import { ArrowUpRight } from "lucide-react";
import floatImg from "@/assets/range-float.jpg";
import temperedImg from "@/assets/range-tempered.jpg";
import laminatedImg from "@/assets/range-laminated.jpg";
import lowEImg from "@/assets/range-lowe.jpg";
import mirrorsImg from "@/assets/range-mirrors.jpg";

const items = [
  {
    image: floatImg,
    alt: "Stack of clear float glass sheets",
    category: "BASE PRODUCT",
    title: "Float & Annealed Glass",
    spec: "3–19 mm · Clear & Low-Iron · AS/NZS 4666",
    tags: ["Optically Clear", "Cut-to-Size", "Custom Edges"],
  },
  {
    image: temperedImg,
    alt: "Toughened safety glass panels",
    category: "SAFETY GLASS",
    title: "Toughened (Tempered) Glass",
    spec: "4–19 mm · AS/NZS 2208 Grade A",
    tags: ["Impact Resistant", "Heat-Strengthened", "Certified"],
  },
  {
    image: laminatedImg,
    alt: "Laminated safety glass cross-section",
    category: "SECURITY & ACOUSTIC",
    title: "Laminated Safety Glass",
    spec: "6.38–13.52 mm · PVB/SGP interlayer",
    tags: ["Intruder Resistant", "Acoustic Control", "UV Block"],
  },
  {
    image: lowEImg,
    alt: "Low-E coated glass facade",
    category: "ENERGY EFFICIENT",
    title: "Low-E Glass",
    spec: "U-value from 1.6 W/m²K · SHGC tunable",
    tags: ["Thermal Control", "High VLT", "Lower Energy Bills"],
  },
  {
    image: mirrorsImg,
    alt: "Custom silvered mirror panels in interior",
    category: "DECORATIVE",
    title: "Mirrors & Decorative",
    spec: "3–6 mm · Silver, Bronze, Grey · Custom cut",
    tags: ["Polished Edges", "Tinted Options", "Made to Order"],
  },
];

export function Range() {
  return (
    <section className="w-full bg-white py-24">
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
                OUR RANGE
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Premium <span style={{ color: "#009AAA" }}>Glass</span> Range
            </h2>
          </div>
          <p
            className="text-neutral-600 lg:text-right"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            Manufactured, imported and cut in-house. Every product in our range meets strict
            Australian quality standards before it reaches you.
          </p>
        </div>

        {/* Grid: 6-col layout — first row 2 wide cards, second row 3 cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-6">
          {items.map((it, i) => {
            // 2 + 3 layout: first two span 3, last three span 2
            const span = i < 2 ? "md:col-span-3" : "md:col-span-2";
            return (
              <article
                key={it.title}
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
                  <p
                    className="mt-2 text-white/80"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px", lineHeight: 1.55 }}
                  >
                    {it.desc}
                  </p>
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
  );
}
