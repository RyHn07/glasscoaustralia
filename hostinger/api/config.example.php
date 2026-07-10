<?php
/**
 * GlassCo Australia — mail configuration
 *
 * COPY this file to:  api/config.local.php
 * Then edit values below and upload.
 * config.local.php is blocked by .htaccess so it stays private.
 */

return [
    // Where form submissions are delivered
    'mail_to'         => 'reaz1006@gmail.com',
    'mail_to_name'    => 'GlassCo Australia',

    // Envelope sender — MUST be an email created on your Hostinger domain.
    // Create it in hPanel → Emails → Email Accounts first.
    'mail_from'       => 'noreplay@glasscoaustralia.com.au',
    'mail_from_name'  => 'GlassCo Website',

    // Subject prefixes
    'subject_contact' => '[Contact] ',
    'subject_quote'   => '[Quote] ',

    // Allowed origins for CORS (add your live domain + preview URLs)
    'allowed_origins' => [
        'https://glasscoaustralia.com.au',
        'https://www.glasscoaustralia.com.au',
    ],

    // Optional: shared secret sent by the frontend as X-Form-Token header.
    // Leave empty '' to disable. If set, must match VITE_FORM_TOKEN.
    'form_token'      => '',

    // Simple per-IP rate limit (submissions per hour). 0 = disabled.
    'rate_limit_per_hour' => 20,
];
