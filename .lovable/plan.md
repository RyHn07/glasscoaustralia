## Goal

Apnar dewa original "GlassCo Australia – Company Profile" content puro restore kora hobe `src/routes/about.tsx` e. **Design / layout / colors / fonts kichui change hobe na** — shudhu prottek section er text full original e fire ashbe.

## Section-by-section restore plan

**1. HERO** — keep as is (title "GlassCo / Australia"). Subline replace kore lomba intro:
> "Trusted supplier of glass and value-added glass products based in Melbourne, Victoria — servicing residential, commercial and architectural projects across Australia."

**2. OUR COMPANY** (split with team image) — 3 paragraph restore:
- Builders, glaziers, architects, fabricators, property owners support paragraph (full)
- Manufacturing / importing / wholesale distribution + scale & relationships paragraph (full)
- Commercial glazing experience + Australian Standards compliance paragraph (full)

**3. CERAMIC PRINTING** (split with printing image) — 2 paragraph restore:
- Dip-Tech GP/GPi industrial-grade systems, durable high-resolution interior+exterior (full)
- Precision engineering + large-format + design flexibility for architects paragraph (full)

**4. MANUFACTURING CAPABILITY** — Equipment list 6 ta thakbe (already correct), kintu intro paragraph original 2 paragraph e expand:
- "Glass industry continues to evolve through innovation, technology and changing architectural requirements…" (full)
- "Our focus is to introduce customers to the latest advancements…" (full)
- Closing line: "Above all, we are committed to supplying products that meet the highest standards of quality, reliability and value."

**5. VISION & VALUES** — 4 cards er prottek tar full body restore (currently shortened):
- **Relationships** — "We value strong, respectful, and long-term relationships… professionalism, honesty and open communication… fairness, courtesy and respect… collaboration… everyone deserves to be heard."
- **People** — "Our people are at the center of our business… personal and professional growth… learning, skill development and career progression… recognise initiative, reward effort…"
- **Innovation** — "Innovation is an important part of our continued growth… improving products, services and manufacturing capabilities… forefront of glass technology… greater value."
- **Future** — "Together with our employees, customers and suppliers, building a strong and sustainable future… reliable and respected Australian glass supplier… commitment to quality, service and long-term partnerships."

**6. OUR COMMITMENT** — Quote rakhbo, but full 3 paragraph restore:
- Opening: "GlassCo Australia is committed to delivering quality products that customers can rely on with confidence."
- Australian Standards + stringent quality control paragraph (full)
- R&D investment paragraph (full)
- Closing thank-you line (already ache)

**7. ENVIRONMENTAL POLICY** — Intro 2 paragraph add (currently missing), then bullet list 6 → **8 ta** original commitments e expand:
1. Comply with environmental legislation + ISO 14001
2. Identify activities that may impact environment
3. Implement control measures
4. Establish environmental objectives + monitor performance
5. Promote reduce/reuse/recycle
6. Use environmentally responsible products and processes
7. Employee environmental training and awareness
8. Continuously improve environmental management systems

Closing paragraph add: "All GlassCo Australia personnel are expected to perform their work responsibly… committed to protecting the environment while supporting long-term sustainability."

## Technical notes

- Single file edit: `src/routes/about.tsx`
- `equipment`, `values`, `environmental` arrays update kora hobe with full original strings
- Hero subline, SplitSection children, Manufacturing intro, Commitment paragraphs — JSX text e direct update
- No new images, no new components, no design token change
- Layout/spacing/typography/ACCENT color (`#009AAA`) — untouched

## Out of scope

- Design tweaks
- Image swaps
- Header/Footer changes
- Adding new sections
