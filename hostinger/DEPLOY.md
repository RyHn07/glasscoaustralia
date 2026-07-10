# Hostinger Deployment Guide — GlassCo Australia

Ei guide-e apni jante parben kivabe ei site Hostinger-er **Web Hosting (Unlimited)** plan-e host korben ar contact/quote form-er mail apnar inbox-e ashbe.

---

## 1. Frontend build kora (apnar local machine e)

```bash
bun install
bun run build
```

Build shesh hole `dist/` folder toiri hobe. Amra `dist/client/` folder-er contents upload korbo Hostinger-e.

> Kono issue thakle Lovable dashboard theke "Export" / "Download code" kore local-e chalate paren.

---

## 2. Hostinger-e email account toiri

Hostinger hPanel → **Emails → Email Accounts** → **Create**
- Email: `noreplay@glasscoaustralia.com.au`
- Strong password diye save korun
- Ei mailbox theke website mail pathabe (envelope sender)

---

## 3. Hostinger-e files upload

Hostinger hPanel → **File Manager** → open `public_html/` folder.

Upload korun ei jinishguli **directly public_html-er moddhe**:

1. **`dist/client/` folder-er shob file** (index.html, assets/, favicon, etc.) — folder ta na, tar **contents** upload korben
2. `hostinger/.htaccess` → `public_html/.htaccess`
3. `hostinger/api/` folder → `public_html/api/`

Structure ei rokom dekhabe:

```
public_html/
├── index.html
├── assets/
│   ├── index-xxxxx.js
│   └── index-xxxxx.css
├── favicon.ico
├── .htaccess              ← from hostinger/
└── api/                   ← from hostinger/
    ├── _lib.php
    ├── send-contact.php
    ├── send-quote.php
    ├── config.example.php
    └── config.local.php   ← apni banabo (step 4)
```

---

## 4. Mail config toiri korun

`public_html/api/config.example.php` copy kore `config.local.php` naam diye save korun same folder e.

Values ei rokom set korun:

```php
return [
    'mail_to'         => 'reaz1006@gmail.com',            // apnar inbox
    'mail_to_name'    => 'GlassCo Australia',
    'mail_from'       => 'noreplay@glasscoaustralia.com.au', // step 2 er mailbox
    'mail_from_name'  => 'GlassCo Website',
    'subject_contact' => '[Contact] ',
    'subject_quote'   => '[Quote] ',
    'allowed_origins' => [
        'https://glasscoaustralia.com.au',
        'https://www.glasscoaustralia.com.au',
    ],
    'form_token'      => '',      // optional shared secret
    'rate_limit_per_hour' => 20,
];
```

`config.local.php` `.htaccess` diye block kora ache — browser theke keu access korte parbe na.

---

## 5. Domain point kora

Domain registrar e Hostinger-er nameservers set korun (Hostinger dashboard e nameservers dekhabe, sadharoncally):
```
ns1.dns-parking.com
ns2.dns-parking.com
```

Ba jodi A record diye point korte chan:
```
A    @    <Hostinger shared IP>
A    www  <Hostinger shared IP>
```
Hostinger-er dashboard e IP paben.

---

## 6. SSL enable korun

Hostinger hPanel → **SSL → Setup** → **Install SSL** (Let's Encrypt free)

`.htaccess` te already HTTPS redirect ache — SSL install hoye gele auto HTTPS chalu hobe.

---

## 7. Test korun

1. `https://glasscoaustralia.com.au` open korun
2. Contact form fill kore submit korun → `reaz1006@gmail.com` e mail asha uchit
3. Quote form fill korun + file upload kore submit korun → mail e attachment shoho ashbe

---

## 8. Deliverability (spam folder e na jaite)

Hostinger hPanel → **Emails → Email Deliverability** — DKIM & SPF records auto add hobe apnar domain-er DNS-e. Ei duita on thakle Gmail spam folder e mail jabe na.

Additional (optional but recommended) — DMARC record add korun:
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:reaz1006@gmail.com
```

---

## Amake ki ki data lagbe (aapnar theke)

Ei muhurte kichu lage na — shob code-e configured ache jei values apni diyechen:

- **Receiver:** `reaz1006@gmail.com` ✅
- **Sender:** `noreplay@glasscoaustralia.com.au` ✅
- **Domain:** `glasscoaustralia.com.au` ✅

**Aapnake shudhu Hostinger-e ei kaajgulo korte hobe:**
1. `noreplay@glasscoaustralia.com.au` mailbox toiri korun (password mone rakhun — jodio SMTP lagbe na karon amra PHP `mail()` use korchi)
2. hPanel-e **Email Deliverability** on korun (SPF/DKIM)
3. Domain-er nameserver Hostinger-e point korun
4. SSL install korun

Kono step e atke gele screenshot pathan — thik kore dibo.

---

## Update / Redeploy

Onno kono change korle:
1. `bun run build` local-e run korun
2. `dist/client/` folder er nutun contents upload korun `public_html/` te (overwrite)
3. `.htaccess` ar `api/` untouched thakbe

---

## Troubleshooting

**Form submit korle "Server not configured" ashe:**
- `api/config.local.php` file toiri hoy nai ba wrong location e ache

**Mail ashe na kintu form success dekhay:**
- Spam folder check korun
- hPanel → Emails → Email Deliverability e SPF/DKIM on ache kina check korun
- `mail_from` domain apnar Hostinger domain er sathe match korche kina

**Direct routes (e.g. /about) 404 dey:**
- `.htaccess` `public_html/` te ache kina check korun — SPA fallback ei file er upor nirbhor kore
