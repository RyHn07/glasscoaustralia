<?php
/**
 * Shared helpers: config loader, CORS, validation, MIME mail with attachments.
 * Uses PHP's built-in mail() — no Composer / PHPMailer required.
 * On Hostinger shared hosting, mail() routes through the domain's mail server
 * automatically when From: uses a mailbox created under that domain.
 */

declare(strict_types=1);

function gc_config(): array {
    static $cfg = null;
    if ($cfg !== null) return $cfg;
    $local = __DIR__ . '/config.local.php';
    if (!file_exists($local)) {
        http_response_code(500);
        header('Content-Type: application/json');
        echo json_encode(['ok' => false, 'error' => 'Server not configured (missing config.local.php)']);
        exit;
    }
    $cfg = require $local;
    return $cfg;
}

function gc_cors(): void {
    $cfg = gc_config();
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin && in_array($origin, $cfg['allowed_origins'], true)) {
        header("Access-Control-Allow-Origin: $origin");
        header('Vary: Origin');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, X-Form-Token');
        header('Access-Control-Max-Age: 86400');
    }
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function gc_json_error(int $code, string $msg): void {
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

function gc_json_ok(array $extra = []): void {
    header('Content-Type: application/json');
    echo json_encode(array_merge(['ok' => true], $extra));
    exit;
}

function gc_require_post(): void {
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        gc_json_error(405, 'Method not allowed');
    }
    $cfg = gc_config();
    if (!empty($cfg['form_token'])) {
        $sent = $_SERVER['HTTP_X_FORM_TOKEN'] ?? '';
        if (!hash_equals($cfg['form_token'], $sent)) {
            gc_json_error(401, 'Invalid form token');
        }
    }
}

function gc_clean(string $s, int $max = 2000): string {
    $s = trim($s);
    $s = str_replace(["\r", "\0"], '', $s);
    if (mb_strlen($s) > $max) $s = mb_substr($s, 0, $max);
    return $s;
}

function gc_valid_email(string $e): bool {
    return (bool) filter_var($e, FILTER_VALIDATE_EMAIL);
}

/**
 * Very small IP rate limiter using tmp files. Best-effort.
 */
function gc_rate_limit(): void {
    $cfg = gc_config();
    $limit = (int)($cfg['rate_limit_per_hour'] ?? 0);
    if ($limit <= 0) return;
    $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $ip = preg_replace('/[^a-zA-Z0-9\.:_-]/', '', explode(',', $ip)[0]);
    $dir = sys_get_temp_dir() . '/gc_rl';
    if (!is_dir($dir)) @mkdir($dir, 0700, true);
    $file = "$dir/" . md5($ip) . '.json';
    $now = time();
    $data = ['count' => 0, 'reset' => $now + 3600];
    if (file_exists($file)) {
        $raw = @file_get_contents($file);
        $j = $raw ? json_decode($raw, true) : null;
        if (is_array($j) && $j['reset'] > $now) $data = $j;
    }
    $data['count']++;
    @file_put_contents($file, json_encode($data), LOCK_EX);
    if ($data['count'] > $limit) {
        gc_json_error(429, 'Too many submissions — please try again later.');
    }
}

/**
 * Send an email via mail(), supporting multiple file attachments.
 *
 * @param string $subject
 * @param string $textBody       plain-text body
 * @param string $htmlBody       html body (optional; pass '' to omit)
 * @param string $replyTo        reply-to email
 * @param string $replyToName
 * @param array  $attachments    [['name'=>..., 'type'=>..., 'data'=>binary], ...]
 */
function gc_send_mail(
    string $subject,
    string $textBody,
    string $htmlBody,
    string $replyTo,
    string $replyToName,
    array  $attachments = []
): bool {
    $cfg = gc_config();
    $to        = $cfg['mail_to'];
    $toName    = $cfg['mail_to_name'];
    $fromEmail = $cfg['mail_from'];
    $fromName  = $cfg['mail_from_name'];

    $boundaryMixed = 'mixed_' . bin2hex(random_bytes(8));
    $boundaryAlt   = 'alt_'   . bin2hex(random_bytes(8));
    $eol = "\r\n";

    $encName = function (string $name): string {
        return preg_match('/[^\x20-\x7e]/', $name)
            ? '=?UTF-8?B?' . base64_encode($name) . '?='
            : $name;
    };

    $headers  = 'From: ' . $encName($fromName) . " <$fromEmail>" . $eol;
    $headers .= 'Reply-To: ' . $encName($replyToName) . " <$replyTo>" . $eol;
    $headers .= 'MIME-Version: 1.0' . $eol;
    $headers .= 'X-Mailer: GlassCoWebsite/1.0' . $eol;

    if (empty($attachments)) {
        // simple alternative body
        $headers .= "Content-Type: multipart/alternative; boundary=\"$boundaryAlt\"" . $eol;
        $body  = "--$boundaryAlt$eol";
        $body .= 'Content-Type: text/plain; charset=UTF-8' . $eol;
        $body .= 'Content-Transfer-Encoding: base64' . $eol . $eol;
        $body .= chunk_split(base64_encode($textBody)) . $eol;
        if ($htmlBody !== '') {
            $body .= "--$boundaryAlt$eol";
            $body .= 'Content-Type: text/html; charset=UTF-8' . $eol;
            $body .= 'Content-Transfer-Encoding: base64' . $eol . $eol;
            $body .= chunk_split(base64_encode($htmlBody)) . $eol;
        }
        $body .= "--$boundaryAlt--$eol";
    } else {
        // mixed with nested alternative
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundaryMixed\"" . $eol;
        $body  = "--$boundaryMixed$eol";
        $body .= "Content-Type: multipart/alternative; boundary=\"$boundaryAlt\"" . $eol . $eol;
        $body .= "--$boundaryAlt$eol";
        $body .= 'Content-Type: text/plain; charset=UTF-8' . $eol;
        $body .= 'Content-Transfer-Encoding: base64' . $eol . $eol;
        $body .= chunk_split(base64_encode($textBody)) . $eol;
        if ($htmlBody !== '') {
            $body .= "--$boundaryAlt$eol";
            $body .= 'Content-Type: text/html; charset=UTF-8' . $eol;
            $body .= 'Content-Transfer-Encoding: base64' . $eol . $eol;
            $body .= chunk_split(base64_encode($htmlBody)) . $eol;
        }
        $body .= "--$boundaryAlt--$eol";
        foreach ($attachments as $att) {
            $name = $encName($att['name']);
            $type = $att['type'] ?: 'application/octet-stream';
            $body .= "--$boundaryMixed$eol";
            $body .= "Content-Type: $type; name=\"$name\"" . $eol;
            $body .= 'Content-Transfer-Encoding: base64' . $eol;
            $body .= "Content-Disposition: attachment; filename=\"$name\"" . $eol . $eol;
            $body .= chunk_split(base64_encode($att['data'])) . $eol;
        }
        $body .= "--$boundaryMixed--$eol";
    }

    $subjectEnc = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $toHeader   = $encName($toName) . " <$to>";
    $envelope   = "-f$fromEmail";

    return @mail($toHeader, $subjectEnc, $body, $headers, $envelope);
}

function gc_esc(string $s): string {
    return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
