import { ArrowUpRight } from "lucide-react";
import glazingImg from "@/assets/range-glazing.jpg";
import temperedImg from "@/assets/range-tempered.jpg";
import laminatedImg from "@/assets/range-laminated.jpg";
import smartImg from "@/assets/range-smart.jpg";

const items = [
  {
    image: glazingImg,
    alt: "Modern glass windows on a building",
    category: "WINDOWS & DOORS",
    title: "Premium Glazing",
    tags: ["Soundproof", "Energy Efficient", "UV Protection"],
  },
  {
    image: temperedImg,
    alt: "Tempered safety glass panel",
    category: "SAFETY GLASS",
    title: "Tempered Glass",
    tags: ["Shatter Resistant", "High Strength", "Certified"],
  },
  {
    image: laminatedImg,
    alt: "Laminated glass security installation",
    category: "SECURITY",
    title: "Laminated Glass",
    tags: ["Impact Resistant", "Intruder Proof", "Fire Rated"],
  },
  {
    image: smartImg,
    alt: "Smart glass in modern office",
    category: "INNOVATION",
    title: "Smart Glass",
    tags: ["Instant Privacy", "Smart Control", "Modern Design"],
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

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-200"
            >
              <img
                src={it.image}
                alt={it.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              {/* Content */}
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
                    fontSize: "28px",
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  {it.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
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
              {/* Arrow */}
              <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all group-hover:bg-white group-hover:text-black">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
