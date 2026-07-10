<?php
declare(strict_types=1);
require __DIR__ . '/_lib.php';

gc_cors();
gc_require_post();
gc_rate_limit();

// Accept JSON or form-encoded
$raw = file_get_contents('php://input');
$input = [];
if ($raw && str_starts_with(trim($raw), '{')) {
    $input = json_decode($raw, true) ?: [];
} else {
    $input = $_POST;
}

$name    = gc_clean((string)($input['name']    ?? ''), 100);
$email   = gc_clean((string)($input['email']   ?? ''), 255);
$phone   = gc_clean((string)($input['phone']   ?? ''), 30);
$company = gc_clean((string)($input['company'] ?? ''), 120);
$subject = gc_clean((string)($input['subject'] ?? ''), 120);
$message = gc_clean((string)($input['message'] ?? ''), 1500);

// Honeypot
if (!empty($input['website'])) gc_json_ok(); // silently drop bots

if ($name === '' || !gc_valid_email($email) || strlen($message) < 10 || $subject === '') {
    gc_json_error(422, 'Please fill all required fields correctly.');
}

$cfg = gc_config();
$mailSubject = $cfg['subject_contact'] . $subject . ' — ' . $name;

$text = "New contact form submission\n"
      . "----------------------------\n"
      . "Name:    $name\n"
      . "Email:   $email\n"
      . "Phone:   $phone\n"
      . "Company: $company\n"
      . "Subject: $subject\n\n"
      . "Message:\n$message\n";

$html = '<div style="font-family:Arial,sans-serif;font-size:14px;color:#111">'
      . '<h2 style="color:#009AAA;margin:0 0 12px">New Contact Form Submission</h2>'
      . '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse">'
      . '<tr><td><strong>Name</strong></td><td>' . gc_esc($name) . '</td></tr>'
      . '<tr><td><strong>Email</strong></td><td>' . gc_esc($email) . '</td></tr>'
      . '<tr><td><strong>Phone</strong></td><td>' . gc_esc($phone) . '</td></tr>'
      . '<tr><td><strong>Company</strong></td><td>' . gc_esc($company) . '</td></tr>'
      . '<tr><td><strong>Subject</strong></td><td>' . gc_esc($subject) . '</td></tr>'
      . '</table>'
      . '<h3 style="margin:16px 0 6px">Message</h3>'
      . '<div style="white-space:pre-wrap;background:#f7fafa;padding:12px;border-left:3px solid #009AAA">'
      . gc_esc($message) . '</div>'
      . '</div>';

$sent = gc_send_mail($mailSubject, $text, $html, $email, $name);
if (!$sent) gc_json_error(500, 'Could not send email. Please try again later.');

gc_json_ok(['message' => 'Message sent successfully']);
