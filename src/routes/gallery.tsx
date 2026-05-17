import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import floatImg from "@/assets/range-float.jpg";
import temperedImg from "@/assets/range-tempered.jpg";
import laminatedImg from "@/assets/range-laminated.jpg";
import lowEImg from "@/assets/range-lowe.jpg";
import mirrorsImg from "@/assets/range-mirrors.jpg";
import acousticImg from "@/assets/product-acoustic.jpg";
import decorativeImg from "@/assets/product-decorative.jpg";
import energyImg from "@/assets/product-energy.jpg";
import printingImg from "@/assets/product-printing.jpg";
import atriumImg from "@/assets/project-atrium.jpg";
import coastalImg from "@/assets/project-coastal.jpg";
import curvedImg from "@/assets/project-curved.jpg";
import heritageImg from "@/assets/project-heritage.jpg";
import officeImg from "@/assets/project-office.jpg";
import retailImg from "@/assets/project-retail.jpg";
import cncImg from "@/assets/glass-cnc-line.jpg";
import waterjetImg from "@/assets/glass-waterjet.jpg";
import bimatechImg from "@/assets/glass-bimatech.jpg";
import furnaceImg from "@/assets/northglass-furnace.jpg";
import aboutManu from "@/assets/about-manufacturing.jpg";
import aboutBuilding from "@/assets/about-building.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — GlassCo" },
      {
        name: "description",
        content:
          "Explore GlassCo's portfolio of premium glass products, projects and in-house manufacturing capabilities.",
      },
      { property: "og:title", content: "Gallery — GlassCo" },
      {
        property: "og:description",
        content:
          "A visual showcase of our glass range, finished projects and processing facility.",
      },
    ],
  }),
  component: GalleryPage,
});

type Item = {
  image: string;
  alt: string;
  category: string;
  title: string;
  spec: string;
  tags: string[];
};

const items: Item[] = [
  {
    image: atriumImg,
    alt: "Glass atrium ceiling installation",
    category: "PROJECT",
    title: "Corporate Atrium",
    spec: "Structural glazing · Melbourne CBD",
    tags: ["Custom Cut", "Toughened", "Low-Iron"],
  },
  {
    image: coastalImg,
    alt: "Coastal residence with large glass facade",
    category: "PROJECT",
    title: "Coastal Residence",
    spec: "Double-glazed IGU · Argon fill",
    tags: ["Low-E", "Salt Resistant", "Acoustic"],
  },
  {
    image: curvedImg,
    alt: "Curved glass facade",
    category: "PROJECT",
    title: "Curved Glass Facade",
    spec: "Bent toughened · 12 mm",
    tags: ["Curved", "Heat-Strengthened"],
  },
  {
    image: heritageImg,
    alt: "Heritage building glass restoration",
    category: "PROJECT",
    title: "Heritage Restoration",
    spec: "Restoration glazing · Bespoke",
    tags: ["Custom", "Matched Tint"],
  },
  {
    image: officeImg,
    alt: "Modern office glass partitions",
    category: "PROJECT",
    title: "Office Partitions",
    spec: "Acoustic laminated · 10.38 mm",
    tags: ["Acoustic", "Frameless"],
  },
  {
    image: retailImg,
    alt: "Retail storefront glazing",
    category: "PROJECT",
    title: "Retail Storefront",
    spec: "Ultra-clear · 19 mm toughened",
    tags: ["Low-Iron", "Polished Edges"],
  },
  {
    image: floatImg,
    alt: "Stack of clear float glass sheets",
    category: "PRODUCT",
    title: "Float & Annealed Glass",
    spec: "3–19 mm · Clear & Low-Iron",
    tags: ["Optically Clear", "Cut-to-Size"],
  },
  {
    image: temperedImg,
    alt: "Toughened safety glass panels",
    category: "PRODUCT",
    title: "Toughened Glass",
    spec: "4–19 mm · Grade A safety",
    tags: ["Impact Resistant", "Certified"],
  },
  {
    image: laminatedImg,
    alt: "Laminated safety glass cross-section",
    category: "PRODUCT",
    title: "Laminated Glass",
    spec: "6.38–13.52 mm · PVB/SGP",
    tags: ["Acoustic", "UV Block"],
  },
  {
    image: lowEImg,
    alt: "Low-E coated glass facade",
    category: "PRODUCT",
    title: "Low-E Glass",
    spec: "U-value from 1.6 W/m²K",
    tags: ["Thermal Control", "Energy Saving"],
  },
  {
    image: mirrorsImg,
    alt: "Custom silvered mirror panels",
    category: "PRODUCT",
    title: "Mirrors & Decorative",
    spec: "3–6 mm · Silver, Bronze, Grey",
    tags: ["Polished Edges", "Custom Cut"],
  },
  {
    image: acousticImg,
    alt: "Acoustic glass interior",
    category: "PRODUCT",
    title: "Acoustic Glass",
    spec: "Noise reduction · Up to 42 dB Rw",
    tags: ["Acoustic", "Multi-Layer"],
  },
  {
    image: decorativeImg,
    alt: "Decorative patterned glass",
    category: "PRODUCT",
    title: "Decorative Glass",
    spec: "Patterned · Printed · Mirror",
    tags: ["Custom Pattern", "Tinted"],
  },
  {
    image: energyImg,
    alt: "Energy efficient glazing",
    category: "PRODUCT",
    title: "Energy Efficient",
    spec: "IGU · Argon · Low-E coatings",
    tags: ["Thermal", "Solar Control"],
  },
  {
    image: printingImg,
    alt: "Digital ceramic printed glass",
    category: "PRODUCT",
    title: "Digital Glass Printing",
    spec: "Ceramic ink · Up to 6 colours",
    tags: ["High-Res", "Durable"],
  },
  {
    image: furnaceImg,
    alt: "NorthGlass toughening furnace",
    category: "FACILITY",
    title: "Toughening Furnace",
    spec: "NorthGlass horizontal line",
    tags: ["AS/NZS 2208", "In-House"],
  },
  {
    image: cncImg,
    alt: "CNC glass processing line",
    category: "FACILITY",
    title: "CNC Processing Line",
    spec: "SKILL E-D · Precision edges",
    tags: ["Automated", "Tight Tolerance"],
  },
  {
    image: waterjetImg,
    alt: "TECHNI Intec waterjet cutter",
    category: "FACILITY",
    title: "TECHNI Intec Waterjet",
    spec: "Complex shapes · No heat affected zone",
    tags: ["Custom Shapes", "Clean Cuts"],
  },
  {
    image: bimatechImg,
    alt: "Bimatech Techno edge processing",
    category: "FACILITY",
    title: "Bimatech Techno Edge",
    spec: "Straight-line edge processing",
    tags: ["Polished", "Bevelled"],
  },
  {
    image: aboutManu,
    alt: "Manufacturing facility floor",
    category: "FACILITY",
    title: "Manufacturing Floor",
    spec: "Fully integrated production",
    tags: ["End-to-End", "Quality Controlled"],
  },
  {
    image: aboutBuilding,
    alt: "GlassCo headquarters building",
    category: "FACILITY",
    title: "GlassCo Headquarters",
    spec: "Melbourne · Australian-owned",
    tags: ["Local", "Established"],
  },
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="w-full bg-white pb-16 pt-14">
        <div className="mx-auto max-w-[1280px] px-6">
          {/* Header */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="block"
                  style={{ width: "32px", height: "1px", backgroundColor: "#009AAA" }}
                />
                <span
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "#009AAA",
                  }}
                >
                  OUR GALLERY
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "#0a0a0a",
                  margin: 0,
                }}
              >
                Projects, <span style={{ color: "#009AAA" }}>Products</span> & Facility
              </h1>
            </div>
            <p
              className="text-neutral-600 lg:text-right"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
            >
              A visual tour of our finished installations, full glass range and the in-house
              processing facility that delivers every project to Australian quality standards.
            </p>
          </div>

          {/* Grid: 6-col layout, pattern repeats — first row 2 wide, next row 3 cards */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-6">
            {items.map((it, i) => {
              // Repeating 2+3 pattern every 5 items
              const posInGroup = i % 5;
              const span = posInGroup < 2 ? "md:col-span-3" : "md:col-span-2";
              return (
                <article
                  key={`${it.title}-${i}`}
                  className={`group relative h-[380px] overflow-hidden rounded-xl bg-neutral-200 ${span}`}
                >
                  <img
                    src={it.image}
                    alt={it.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                    <span
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        color: "#00DEF7",
                      }}
                    >
                      {it.category}
                    </span>
                    <h3
                      className="mt-2"
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        fontSize: "26px",
                        fontWeight: 700,
                        lineHeight: 1.1,
                      }}
                    >
                      {it.title}
                    </h3>
                    <div
                      className="mt-2 text-white/85"
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {it.spec}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {it.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
