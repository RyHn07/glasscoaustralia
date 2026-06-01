## Gallery Page (`src/routes/gallery.tsx`)

- Image list ke 2 category te split korbo:
  - **Projects** — atrium, coastal, curved, heritage, office, retail
  - **Products & Machinery** — float, tempered, laminated, lowE, mirrors, acoustic, decorative, energy, printing, furnace, bimatech, manufacturing, building
- Top e tab switcher (Projects / Products & Machinery / All) — default "Projects"
- Active tab onujayi grid filter hobe; lightbox + keyboard nav existing tab er images er moddhe cycle korbe
- Heading update: "Projects & Facility"

## Quote Page (`src/routes/quote.tsx`)

- "Glass specifications" section puro remove (thickness, dimensions, items array, add/remove item UI)
- Replace with **File Upload** section:
  - Drag-and-drop + click-to-browse input
  - Accept: PDF, DWG, DXF, JPG, PNG (max 10MB per file, max 5 files)
  - Selected files er list dekhabo with name, size, remove button
  - Client-side validation (size, type, count) with toast error
- Form schema (zod) theke `items` remove kore `files` array add (optional, client-side only validation)
- Submit handler updated — files er name/size include korbo confirmation message e
- "Email files to..." line ar lagbe na karon upload direct ache; rakhbo as fallback note

**Note:** Files actual upload kothao hobe na (backend nai) — sudhu form UI te collect hobe ar user contact er sathe describe korbe. Backend storage chaile Lovable Cloud enable kore Supabase Storage e upload korte hobe — eta porer step.
