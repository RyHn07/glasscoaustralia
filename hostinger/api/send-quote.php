<?php
declare(strict_types=1);
require __DIR__ . '/_lib.php';

gc_cors();
gc_require_post();
gc_rate_limit();

// Quote form uses multipart/form-data (files). Fields land in $_POST, files in $_FILES.
$name        = gc_clean((string)($_POST['name']        ?? ''), 100);
$email       = gc_clean((string)($_POST['email']       ?? ''), 255);
$phone       = gc_clean((string)($_POST['phone']       ?? ''), 30);
$company     = gc_clean((string)($_POST['company']     ?? ''), 120);
$projectType = gc_clean((string)($_POST['projectType'] ?? ''), 60);
$timeline    = gc_clean((string)($_POST['timeline']    ?? ''), 60);
$suburb      = gc_clean((string)($_POST['suburb']      ?? ''), 120);
$delivery    = !empty($_POST['delivery']) && $_POST['delivery'] !== 'false';
$message     = gc_clean((string)($_POST['message']     ?? ''), 1500);

// Honeypot
if (!empty($_POST['website'])) gc_json_ok();

if ($name === '' || !gc_valid_email($email) || $phone === '' || $projectType === '' || $timeline === '') {
    gc_json_error(422, 'Please fill all required fields correctly.');
}

// --- Attachments ---
$MAX_FILES = 5;
$MAX_BYTES = 10 * 1024 * 1024;
$ALLOWED = ['pdf','dwg','dxf','jpg','jpeg','png','doc','docx'];
$MIME = [
    'pdf'  => 'application/pdf',
    'dwg'  => 'application/acad',
    'dxf'  => 'application/dxf',
    'jpg'  => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'png'  => 'image/png',
    'doc'  => 'application/msword',
    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

$attachments = [];
if (!empty($_FILES['files']) && is_array($_FILES['files']['name'])) {
    $count = count($_FILES['files']['name']);
    if ($count > $MAX_FILES) gc_json_error(422, "Maximum $MAX_FILES files allowed.");
    for ($i = 0; $i < $count; $i++) {
        if (($_FILES['files']['error'][$i] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) continue;
        $tmp  = $_FILES['files']['tmp_name'][$i];
        $orig = $_FILES['files']['name'][$i];
        $size = (int)$_FILES['files']['size'][$i];
        if ($size <= 0 || $size > $MAX_BYTES) gc_json_error(422, "$orig exceeds 10MB.");
        $ext = strtolower(pathinfo($orig, PATHINFO_EXTENSION));
        if (!in_array($ext, $ALLOWED, true)) gc_json_error(422, "$orig has an unsupported file type.");
        if (!is_uploaded_file($tmp)) gc_json_error(400, 'Invalid upload.');
        $data = file_get_contents($tmp);
        if ($data === false) gc_json_error(500, 'Could not read uploaded file.');
        // sanitize filename
        $safe = preg_replace('/[^A-Za-z0-9._-]/', '_', $orig);
        $attachments[] = [
            'name' => $safe,
            'type' => $MIME[$ext] ?? 'application/octet-stream',
            'data' => $data,
        ];
    }
}

$cfg = gc_config();
$mailSubject = $cfg['subject_quote'] . "$projectType — $name";

$text  = "New quote request\n";
$text .= "-----------------\n";
$text .= "Name:         $name\n";
$text .= "Email:        $email\n";
$text .= "Phone:        $phone\n";
$text .= "Company:      $company\n";
$text .= "Project type: $projectType\n";
$text .= "Timeline:     $timeline\n";
$text .= "Suburb:       $suburb\n";
$text .= "Delivery:     " . ($delivery ? 'Yes' : 'No') . "\n";
$text .= "Attachments:  " . count($attachments) . "\n\n";
$text .= "Notes:\n" . ($message ?: '(none)') . "\n";

$html  = '<div style="font-family:Arial,sans-serif;font-size:14px;color:#111">';
$html .= '<h2 style="color:#009AAA;margin:0 0 12px">New Quote Request</h2>';
$html .= '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse">';
foreach ([
    'Name' => $name, 'Email' => $email, 'Phone' => $phone, 'Company' => $company,
    'Project Type' => $projectType, 'Timeline' => $timeline, 'Suburb' => $suburb,
    'Include Delivery' => $delivery ? 'Yes' : 'No',
    'Attachments' => (string)count($attachments),
] as $k => $v) {
    $html .= '<tr><td><strong>' . gc_esc($k) . '</strong></td><td>' . gc_esc((string)$v) . '</td></tr>';
}
$html .= '</table>';
if ($message !== '') {
    $html .= '<h3 style="margin:16px 0 6px">Notes</h3>';
    $html .= '<div style="white-space:pre-wrap;background:#f7fafa;padding:12px;border-left:3px solid #009AAA">' . gc_esc($message) . '</div>';
}
$html .= '</div>';

$sent = gc_send_mail($mailSubject, $text, $html, $email, $name, $attachments);
if (!$sent) gc_json_error(500, 'Could not send email. Please try again later.');

gc_json_ok(['message' => 'Quote request sent successfully']);
