import { Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import rangeFloat from "@/assets/range-float.jpg";
import rangeLaminated from "@/assets/range-laminated.jpg";
import rangeLowE from "@/assets/range-lowe.jpg";
import productSecurity from "@/assets/product-security.jpg";
import productAcoustic from "@/assets/product-acoustic.jpg";
import productDecorative from "@/assets/product-decorative.jpg";

const items = [
  {
    image: rangeFloat,
    alt: "Clear float glass sheets",
    name: "Clear Float Glass",
    description: "Premium architectural float glass — flat, clear and ready for processing.",
    to: "/products/clear-float-glass" as const,
    topSeller: true,
  },
  {
    image: rangeLaminated,
    alt: "Clear laminated safety glass",
    name: "Clear Laminated Glass",
    description: "Safety glass with PVB interlayer for impact, UV and acoustic performance.",
    to: "/products/clear-laminated-glass" as const,
    topSeller: true,
  },
  {
    image: rangeLowE,
    alt: "Low iron ultra clear glass",
    name: "Low Iron Glass",
    description: "Ultra clear glass with reduced green tint for true colour rendering.",
    to: "/products/low-iron-glass" as const,
  },
  {
    image: productSecurity,
    alt: "Security assault shield glass",
    name: "Security Glass — Assault Shield 14.25 SGP",
    description: "Laminated SGP security glass engineered for forced-entry resistance.",
    to: "/products/security-glass-assault-shield" as const,
  },
  {
    image: productAcoustic,
    alt: "Acoustic laminated glass",
    name: "Acoustic Glass",
    description: "Noise-reducing laminated glass for quieter interiors.",
    to: "/products/acoustic-glass" as const,
  },
  {
    image: productDecorative,
    alt: "Decorative patterned glass",
    name: "Decorative Glass",
    description: "Patterned, printed, mirror and ultra clear decorative ranges.",
    to: "/products/decorative-glass" as const,
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
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#009AAA",
                }}
              >
                OUR PRODUCT
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
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

        {/* Grid — matches /products page card style */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-[translate,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#009AAA]/40 hover:shadow-[0_20px_50px_-20px_rgba(0,154,170,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1600}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 will-change-transform"
                />
                {p.topSeller && (
                  <span
                    className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#009AAA] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md"
                    style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "0.12em" }}
                  >
                    <Star className="h-3 w-3 fill-white" />
                    Top Seller
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="text-xl font-semibold text-neutral-900 transition-colors group-hover:text-[#009AAA]"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {p.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#009AAA]">
                  View product
                  <span className="transition-[translate] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-white transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#009AAA",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
