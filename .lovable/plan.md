# Convert to Static SPA for Hostinger Deployment

## Goal
Ei TanStack Start (SSR + Cloudflare Workers) project ke ekta pure static SPA-te convert korbo, jate `bun run build` ekta static `dist/` folder toiri kore ja Hostinger Unlimited Web Hosting-e sohoje upload kora jai.

## ⚠️ Important Trade-offs (Please Read)

1. **Lovable preview kaj korbe, kintu template migrate hoye jabe.** Ei project Lovable-er managed TanStack Start template use kore. Convert korle amra ei template theke sore jachchi — future Lovable updates/features (SSR-based) hoyto ei project-e auto-apply hobe na.
2. **SEO impact:** SSR chole jabe, ai per-route meta tags client-side-e set hobe (react-helmet diye). Google modern crawler ei fine handle kore, but old crawlers / social preview scrapers (Facebook, LinkedIn) shob time JS execute kore na — og:image share preview weaker hote pare.
3. **Server functions / API routes chole jabe.** `createServerFn`, `src/routes/api/*` — ei shob remove hobe. Mail-er jonno Hostinger-e PHP endpoints already toiri ache, tai eta problem na.
4. **No going back easily.** Ei ekta oneway migration. Confirm korar age bhalo kore vabun.

## What Stays the Same
- Shob React components (`src/components/*`) — unchanged
- Shob pages er UI logic — unchanged
- Styling (Tailwind, `src/styles.css`) — unchanged
- Assets, images, gallery — unchanged
- Hostinger PHP mail backend (`hostinger/api/*`) — unchanged

## Migration Steps

### 1. Replace Build Toolchain
- New `vite.config.ts`: plain Vite + `@vitejs/plugin-react` + `@tailwindcss/vite`, output to `dist/`
- New `index.html` at project root with `<div id="root">` and script tag
- New `src/main.tsx` entry point mounting React to `#root`
- Remove: `@lovable.dev/vite-tanstack-config`, `@tanstack/react-start`, `@cloudflare/vite-plugin`, `wrangler.jsonc`, `src/server.ts`, `src/start.ts`

### 2. Convert Routing (keep TanStack Router, drop TanStack Start)
- Keep `@tanstack/react-router` (SPA mode supports file-based routing)
- Convert `src/routes/__root.tsx` from `createRootRouteWithContext` shellComponent (html/head/body) to a simple layout returning header/outlet/footer. `<html>/<head>/<body>` chole jabe index.html-e.
- Per-route `head()` metadata → `react-helmet-async` diye replace kora hobe
- Remove: shob server-side loaders, `createServerFn` calls (jodi thake), `src/routes/api/*` files

### 3. Update index.html
- Set title, meta description, favicon links directly in `<head>`
- Add `<link>` tags for Google Fonts (Cormorant Garamond, Lato, Montserrat) — currently `__root.tsx` head e ache

### 4. Per-Route SEO with react-helmet-async
- Wrap app in `<HelmetProvider>` in `main.tsx`
- Each route replaces `head()` with `<Helmet>` inside its component

### 5. SPA Fallback for Hostinger
- Existing `hostinger/.htaccess` already handles SPA routing (rewrite to index.html) — verify korbo

### 6. Update DEPLOY.md
- `dist/client/` → `dist/` correct path
- Simplified build command instructions

### 7. Test Build Locally
- `bun run build` → verify `dist/index.html` + `dist/assets/*` output
- No `.output/` worker bundle

## File Changes Summary

**Delete:**
- `src/server.ts`, `src/start.ts`, `wrangler.jsonc`
- `src/routes/api/*` (jodi thake)
- `src/lib/error-capture.ts`, `src/lib/error-page.ts` (SSR-specific)
- `src/integrations/supabase/*.server.ts` etc. (jodi thake — but Lovable Cloud enabled na tai probably nei)

**Create:**
- `index.html` (project root)
- `src/main.tsx`
- New `vite.config.ts`

**Modify:**
- `package.json` — remove Cloudflare/TanStack Start deps, add `react-helmet-async`, `@vitejs/plugin-react`
- `src/routes/__root.tsx` — strip SSR shell
- ~15+ route files — replace `head()` with `<Helmet>` inside component

## Confirmation Needed
Ei migration onek boro (30-40+ file change). Ekta smaller, safer alternative ache:

**Alternative:** Site Lovable-e publish korun (already live: `glassco.mrkirof.com`). Shudhu Hostinger-e `hostinger/api/*.php` folder + `.htaccess` (with CORS) upload korun mail-er jonno. Contact/Quote form CORS diye Hostinger PHP-te POST korbe. **Zero migration risk, 15 minute setup.**

**Confirm korun:** kon ta korbo?
- **(A)** Full static SPA migration (ei plan) — big change, Lovable template lose korbo
- **(B)** Hybrid: Lovable-e frontend + Hostinger-e shudhu PHP mail (recommended)
