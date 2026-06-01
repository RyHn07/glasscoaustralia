## Add Patterned Glass Catalogue

Add a new "Patterns Catalogue" section to `src/routes/products.decorative-glass.tsx` listing all 12 client-specified patterns with image, name, thickness, and sheet size.

### Patterns to include
1. Africana Flame Flash — 5mm — 2440 × 1830
2. Cathedral Aqualite — 4mm & 5mm — 2440 × 1830
3. Chinchilla — 5mm — 2440 × 1830
4. Drop — 5mm — 2440 × 1830
5. Flor — 5mm — 2440 × 1830
6. Kasumi — 5mm — 2440 × 1830
7. Millennium — 5mm — 2440 × 1830
8. Matelux Decor Satin — 4mm & 6mm — 3660 × 2440
9. Narrow Reed (Clear & Low Iron) — 5mm & 6mm — 2440 × 2100
10. Reticulate — 5mm — 2440 × 1830
11. Satinlite — 4mm & 5mm — 2440 × 1830
12. Spotswood — 5mm — 2440 × 1830

### Implementation
- Generate 12 AI textured-glass swatch images (fast model, 768×768, parallel) into `src/assets/pattern-*.jpg`.
- Add a new `<section>` after existing content in `products.decorative-glass.tsx` titled "Patterns Catalogue" using existing Eyebrow/SectionHeading styling and ACCENT color.
- Render a responsive grid (1 / 2 / 3 / 4 columns) of cards: image on top, pattern name, thickness chip(s), sheet size line.
- Keep current page sections, FAQs, hero, and CTA untouched.

### Notes
- Images will be AI-rendered representations of each pattern texture — client can replace later with real product photos.
- No new route created; everything lives on the existing Decorative Glass page since patterned glass is a Decorative subcategory.
