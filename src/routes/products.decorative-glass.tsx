import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import heroImage from "@/assets/product-decorative.jpg";
import pAqualite from "@/assets/patterns/aqualite.png.asset.json";
import pChinchilla from "@/assets/patterns/chinchilla.png.asset.json";
import pDiamond from "@/assets/patterns/diamond.png.asset.json";
import pAfricana from "@/assets/patterns/africana.png.asset.json";
import pFlor from "@/assets/patterns/flor.png.asset.json";
import pKasumi from "@/assets/patterns/kasumi.png.asset.json";
import pMillennium from "@/assets/patterns/millennium.png.asset.json";
import pNarrowReed from "@/assets/patterns/narrow-reed.png.asset.json";
import pRain from "@/assets/patterns/rain.png.asset.json";
import pReticulate from "@/assets/patterns/reticulate.png.asset.json";
import pDrop from "@/assets/patterns/drop.png.asset.json";
import pSatinlite from "@/assets/patterns/satinlite.png.asset.json";
import pSpotswood from "@/assets/patterns/spotswood.png.asset.json";


export const Route = createFileRoute("/products/decorative-glass")({
  head: () => ({
    meta: [
      { title: "Decorative Glass — Patterned, Mirror & Printed | GlassCo Australia" },
      {
        name: "description",
        content:
          "Patterned, printed ceramic, mirror and ultra clear decorative glass for residential and commercial design projects.",
      },
      { property: "og:title", content: "Decorative Glass" },
      {
        property: "og:description",
        content: "Combine function with visual impact using GlassCo's range of decorative glass.",
      },
    ],
  }),
  component: DecorativeGlassPage,
});

const ACCENT = "#009AAA";
const HEAD_FONT = "Montserrat, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

type Pattern = {
  name: string;
  image: string;
  thickness: string[];
  size: string;
};

const PATTERNS: Pattern[] = [
  { name: "Aqualite / Cathedral", image: pAqualite.url, thickness: ["4mm", "5mm"], size: "2440 × 1830" },
  { name: "Chinchilla", image: pChinchilla.url, thickness: ["5mm"], size: "2440 × 1830" },
  { name: "Diamond", image: pDiamond.url, thickness: ["5mm"], size: "2440 × 1830" },
  { name: "Africana / Flame", image: pAfricana.url, thickness: ["5mm"], size: "2440 × 1830" },
  { name: "Flor", image: pFlor.url, thickness: ["5mm"], size: "2440 × 1830" },
  { name: "Kasumi", image: pKasumi.url, thickness: ["5mm"], size: "2440 × 1830" },
  { name: "Millennium", image: pMillennium.url, thickness: ["5mm"], size: "2440 × 1830" },
  { name: "Narrow Reed / Moru", image: pNarrowReed.url, thickness: ["5mm", "6mm"], size: "2440 × 2100" },
  { name: "Rain / Seadrift", image: pRain.url, thickness: ["5mm"], size: "2440 × 1830" },
  { name: "Reticulate", image: pReticulate.url, thickness: ["5mm"], size: "2440 × 1830" },
  { name: "Drop", image: pDrop.url, thickness: ["5mm"], size: "2440 × 1830" },
  { name: "Satinlite", image: pSatinlite.url, thickness: ["4mm", "5mm"], size: "2440 × 1830" },
  { name: "Spotswood", image: pSpotswood.url, thickness: ["5mm"], size: "2440 × 1830" },
];


function PatternsCatalogue() {
  return (
    <section className="w-full bg-neutral-50 py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
            <span
              style={{
                fontFamily: HEAD_FONT,
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: ACCENT,
              }}
            >
              PATTERNS CATALOGUE
            </span>
          </div>
          <h2
            style={{
              fontFamily: HEAD_FONT,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#0a0a0a",
              margin: 0,
            }}
          >
            Patterned glass <span style={{ color: ACCENT }}>range</span>
          </h2>
          <p
            className="mt-4 text-neutral-600"
            style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
          >
            A selection of textured and decorative patterned glass available in standard thicknesses
            and sheet sizes. Contact us for stock availability and bespoke processing options.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PATTERNS.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-square w-full overflow-hidden bg-neutral-100">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {p.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.thickness.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-1 text-xs font-semibold"
                      style={{
                        fontFamily: HEAD_FONT,
                        color: ACCENT,
                        background: `${ACCENT}1A`,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="mt-3 flex items-center gap-2 text-neutral-600"
                  style={{ fontFamily: BODY_FONT, fontSize: "13px" }}
                >
                  <span style={{ color: ACCENT, fontWeight: 700 }}>SIZE</span>
                  <span>{p.size} mm</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DecorativeGlassPage() {
  return (
    <ProductPageLayout
      eyebrow="PRODUCT — DECORATIVE"
      title="Decorative"
      titleAccent="Glass"
      subtitle="Patterned, printed, mirrored and ultra clear glass to bring design and function together across any project."
      heroImage={heroImage}
      keyBenefits={[
        "Patterned glass for privacy and light diffusion",
        "Printed ceramic glass for durable design finishes",
        "Mirror glass for interiors, retail and hospitality",
        "Ultra clear glass for premium clarity",
        "Options to combine design with safety and performance",
      ]}
      intro={[
        "Decorative glass allows designers, builders and property owners to combine function with visual impact. It can improve privacy, enhance interiors, create feature walls, support branding, increase light flow and deliver a premium finish across residential and commercial projects.",
        "GlassCo Australia supplies decorative glass options including patterned glass, printed ceramic glass, mirror glass and ultra clear low iron glass — giving customers flexible choices for both practical and design-led applications.",
      ]}
      sections={[
        {
          heading: "What is decorative glass?",
          paragraphs: [
            "Decorative glass is a broad category that includes glass selected for appearance as well as function. It may use texture, colour, pattern, ceramic printing, reflectivity or extra clarity to achieve a design goal.",
            "Unlike standard clear glass, decorative glass can shape how light moves through a space, how much privacy is achieved and how a surface contributes to the overall interior or facade design. Glass is not just a building material — it is also a design element.",
          ],
        },
        {
          heading: "Patterned and privacy glass",
          paragraphs: [
            "Patterned glass is produced with textured surfaces that diffuse light and obscure direct visibility. It is ideal for bathrooms, entry areas, partitions, doors and spaces where privacy is needed without losing natural light.",
            "Patterned glass can soften glare, create visual interest and maintain brightness — common in shower areas, offices, residential doors and decorative panels.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Can decorative glass also be safety glass?",
          a: "Yes. Many decorative options can be supplied in laminated or toughened forms depending on the application.",
        },
        {
          q: "Where is patterned glass commonly used?",
          a: "It is commonly used in bathrooms, doors, partitions and privacy-focused interiors.",
        },
      ]}
    >
      <PatternsCatalogue />
    </ProductPageLayout>
  );
}
