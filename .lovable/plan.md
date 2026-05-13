## Plan — apply remaining client changes (B, C, D, F, G, H)

Skipping A (done) and E (per your instruction). Will use the **newer numbers** from your bottom list (33+, 100+, 25+, 2+, since 1993).

### B. Phone number — `Contact.tsx`
Replace `(03) 9034 6146` → `(03) 9706 5506` on lines 79 and 113. Footer already correct.

### C. Email addresses — `Contact.tsx` + `Footer.tsx`
- Replace `info@glassco.com.au` → `info@glasscoaustralia.com.au` in both files.
- Add `orders@glasscoaustralia.com.au` as a second line under each email entry.

### D. Company stats — `WhoWeAre.tsx`
- Years Experience: 27+ → **33+**
- Happy Clients: 1000+ → **100+**
- Team Members: 50+ → **25+**
- Locations: 10+ → **2+**
- Floating teal badge: 27+ → **33+**
- Body copy "over 27 years" → "over 33 years"; add line **"Proudly serving Australia since 1993."**

### F. Services trim — `Services.tsx`
Remove the **Smart Glass** card (Glazing & Heritage Restoration aren't present). Also remove "Smart Glass" from `Footer.tsx` services list.

### G. Wide Range overhaul — `Range.tsx`
Rebuild as 5 categories. Each card gets a generated photo + small spec strip + rewritten copy:
1. **Float / Annealed Glass** — 3–19 mm · clear & low-iron
2. **Toughened (Tempered) Safety Glass** — AS/NZS 2208 · 4–19 mm
3. **Laminated Safety Glass** — Grade A · acoustic & security
4. **Low-E / Energy-Efficient Glass** — U-value from 1.6 W/m²K
5. **Mirrors & Decorative** — silvered, tinted, custom cut

Generate 5 new images at `src/assets/range-float.jpg`, `range-tempered.jpg` (reuse), `range-laminated.jpg` (reuse), `range-lowe.jpg`, `range-mirrors.jpg`. Delete `range-smart.jpg` and `range-glazing.jpg` (or repurpose). Adjust grid to 5 cards (e.g. 3-2-2-3-2 split or simple uniform 3-col on desktop).

### H. Glass Types section + PDF — new `src/components/GlassTypes.tsx`
- Insert in `routes/index.tsx` between `<Range />` and `<WhyUs />`.
- Responsive table with columns: **Product · Thickness (mm) · U-value (W/m²K) · SHGC · VLT · Notes**.
- Seed with a Viridian-referenced draft (Clear Float, Low-Iron, Toughened, Laminated, Low-E SuperGreen, ComfortPlus DGU, Mirror) — clearly marked as indicative; you can hand me final values later and I'll update.
- "Download PDF" button using **`jspdf` + `jspdf-autotable`** (client-side, no backend). PDF includes header with company name + contact, the table, and a footer note. Uses existing teal `#009AAA`.
- Install: `bun add jspdf jspdf-autotable`.

### Execution order
1. B + C + D + F + Footer cleanup (text-only, fastest).
2. G — generate 3 new images, rewrite Range component.
3. H — install deps, build `GlassTypes.tsx`, wire into index, add PDF generator.

### Technical notes
- No design-token changes; reuse teal `#009AAA`, Rajdhani, Poppins.
- All new images lazy-loaded with explicit width/height.
- jsPDF runs entirely in the browser — no server work, no Worker constraints.
- After H, I'll verify the table renders and the PDF downloads cleanly via console/network.
