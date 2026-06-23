# Add new gallery categories from uploaded photos

You uploaded 78 photos across 6 categories:

| Category | Count |
|---|---|
| Balustrade | 15 |
| Doors | 11 |
| Facades & Curtain Walls | 13 |
| Mirrors | 13 |
| Office Partitions | 10 |
| Pool Fencing | 7 (Photos 2) – wait, 7 listed but 10 files exist (1, 2…6, 10) |

(Total ≈ 78 photos. Thumbs.db files ignored.)

## What I'll do

### 1. Upload every image as a Lovable CDN asset
- Run `lovable-assets create` for each `.jpg` (skip `Thumbs.db`).
- Store generated `.asset.json` pointer files under `src/assets/gallery/<category>/<filename>.jpg.asset.json`.
- No binaries copied into the repo — only the JSON pointers (each ~300 B).

### 2. Extend `src/routes/gallery.tsx`
- Add 6 new tabs to the existing tab switcher: **Balustrade · Doors · Facades & Curtain Walls · Mirrors · Office Partitions · Pool Fencing** (alongside the existing **Projects** and **Products & Machinery** tabs).
- Each new category renders its photos in the same 2+3 responsive grid with the existing lightbox (click + arrow-key navigation).
- Pull image URLs from the `.asset.json` pointers (`import x from "...asset.json"; src={x.url}`).
- Alt text auto-generated from filename (e.g. "Balustrade installation 1").

### 3. No other pages touched
The homepage, services, and products pages stay as-is — photos are only surfaced through the Gallery page per your selection.

## Technical notes
- The "Just upload as assets for later use" option is satisfied automatically because all photos become CDN-hosted `.asset.json` pointers you can reference from any other page later.
- Header tab list will become scrollable on small viewports (overflow-x auto) so 8 tabs fit on mobile.
- No new routes, no schema changes, no dependencies.
