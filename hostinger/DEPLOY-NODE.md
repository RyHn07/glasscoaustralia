# Hostinger Node.js App Deployment — GlassCo Australia

Ei guide-e Hostinger-er **Node.js hosting** (Premium/Business/Cloud plan) use kore ei site deploy korar step gula deya ache.

> Note: Hostinger-er "Web Hosting Unlimited" (shared PHP only) plan-e Node.js chole na — Node.js support Premium plan ba upore lage. Node.js app hisebe deploy korar jonno nicher step gula follow korun.

---

## Ki toiri ache

- `server.js` — Express server ja `dist/` folder theke static SPA serve kore (SPA fallback + gzip shoho).
- `package.json`:
  - `"main": "server.js"`
  - `"engines": { "node": ">=20.0.0" }`
  - Script: `npm start` → `node server.js`
- Port automatically `process.env.PORT` theke ashbe (Hostinger provide kore).

Mail-er jonno PHP endpoints (`hostinger/api/*.php`) chai na Node deployment-e — mail-o Node theke pathate hobe (ei setup a ekhono PHP handler use hocche; jodi Node hosting a jaan tahole ekta separate `/api/send-*` Express route lagbe). Ekhon Node hosting mainly frontend serve korche.

---

## Step 1 — Local build (optional but recommended)

Local a test korte chaile:

```bash
npm install
npm run build
npm start
# → http://localhost:3000
```

---

## Step 2 — Files upload

Hostinger hPanel → **File Manager** → apnar Node app-er application root folder (e.g. `domains/glasscoaustralia.com.au/`) e ei file/folder gula upload korun:

```
server.js
package.json
package-lock.json  (ba bun.lock)
vite.config.ts
tsconfig.json
index.html
src/            (full folder)
public/         (jodi thake)
```

`node_modules/` ar `dist/` upload korbe **na** — Hostinger a install/build korbo.

Alternative (faster): local a `npm run build` kore shudhu `dist/`, `server.js`, `package.json`, `package-lock.json` upload korun. Tahole Hostinger a shudhu `npm install --omit=dev` + `express`/`compression` install lagbe, build lagbe na.

---

## Step 3 — Hostinger Node.js app configure

hPanel → **Advanced → Node.js** → **Create Application**

- **Node.js version:** 20.x
- **Application mode:** Production
- **Application root:** upload korar folder path
- **Application URL:** apnar domain (e.g. glasscoaustralia.com.au)
- **Application startup file:** `server.js`

Save korle Hostinger ekta virtual environment toiri korbe.

---

## Step 4 — Dependencies install

Same Node.js app page a:

1. **Run NPM Install** button e click korun — `package.json` er shob dependency install hobe.
2. Erpor **Run NPM Script** → `build` select kore run korun — `dist/` folder toiri hobe server folder e.

---

## Step 5 — Start app

**Start Application** button click korun. Status "Running" hoye jabe.

Apnar domain browse korle site load hobe.

---

## Step 6 — Redeploy (future updates)

1. Changed source files re-upload korun (File Manager ba SFTP)
2. Node.js panel a **Restart Application** click korun
3. Jodi dependency change hoy: **Run NPM Install** abar
4. Jodi frontend change hoy: **Run NPM Script → build** abar

---

## Troubleshooting

**"Cannot find module 'express'"** → NPM Install run kora hoy nai. hPanel Node.js panel theke **Run NPM Install** click korun.

**"dist/index.html not found"** → Build run kora hoy nai. **Run NPM Script → build** click korun.

**403 Forbidden** → hPanel → Node.js app → **Settings & Redeploy** check korun:
- **Framework:** Express.js ba Other (Vite na, jodi `server.js` use koren)
- **Entry file:** `server.js`
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** `20.x`
- Redeploy dile Hostinger `public_html/.htaccess` regenerate kore Node app-er dike route korbe.

**Port error / EADDRINUSE** → `server.js` already `process.env.PORT` use kore — manually port set korte hobe na.

**502 Bad Gateway** → Application "Running" state a nai. **Restart Application** click korun. Logs check korun hPanel a.

**Direct routes (e.g. /about) 404 dey** → `server.js` SPA fallback handle kore. Jodi tao 404 dey, dist folder properly build hoyeche kina check korun.
