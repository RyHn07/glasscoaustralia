import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Star } from "lucide-react";

import productAcoustic from "@/assets/product-acoustic.jpg";
import productDecorative from "@/assets/product-decorative.jpg";
import productEnergy from "@/assets/product-energy.jpg";
import productAutomotive from "@/assets/product-automotive.jpg";
import productSecurity from "@/assets/product-security.jpg";
import rangeFloat from "@/assets/range-float.jpg";
import rangeLowE from "@/assets/range-lowe.jpg";
import rangeLaminated from "@/assets/range-laminated.jpg";

type ProductCard = {
  name: string;
  description: string;
  image: string;
  to:
    | "/products/clear-float-glass"
    | "/products/low-iron-glass"
    | "/products/clear-laminated-glass"
    | "/products/security-glass-assault-shield"
    | "/products/acoustic-glass"
    | "/products/decorative-glass"
    | "/products/energy-efficient-glass"
    | "/products/automotive-glass";
  topSeller?: boolean;
};

const products: ProductCard[] = [
  {
    name: "Clear Float Glass",
    description: "Premium architectural float glass — flat, clear and ready for processing.",
    image: rangeFloat,
    to: "/products/clear-float-glass",
    topSeller: true,
  },
  {
    name: "Clear Laminated Glass",
    description: "Safety glass with PVB interlayer for impact, UV and acoustic performance.",
    image: rangeLaminated,
    to: "/products/clear-laminated-glass",
    topSeller: true,
  },
  {
    name: "Low Iron Glass",
    description: "Ultra clear glass with reduced green tint for true colour rendering.",
    image: rangeLowE,
    to: "/products/low-iron-glass",
  },
  {
    name: "Security Glass — Assault Shield 14.25 SGP",
    description: "Laminated SGP security glass engineered for forced-entry resistance.",
    image: productSecurity,
    to: "/products/security-glass-assault-shield",
  },
  {
    name: "Acoustic Glass",
    description: "Noise-reducing laminated glass for quieter interiors.",
    image: productAcoustic,
    to: "/products/acoustic-glass",
  },
  {
    name: "Decorative Glass",
    description: "Patterned, printed, mirror and ultra clear decorative ranges.",
    image: productDecorative,
    to: "/products/decorative-glass",
  },
  {
    name: "Energy Efficient Glass",
    description: "Low-E, IGUs and solar control glazing for thermal performance.",
    image: productEnergy,
    to: "/products/energy-efficient-glass",
  },
  {
    name: "Automotive Glass",
    description: "Laminated safety glass and toughened printed glass for vehicles.",
    image: productAutomotive,
    to: "/products/automotive-glass",
  },
];

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "All Products — Architectural & Safety Glass | GlassCo Australia" },
      {
        name: "description",
        content:
          "Explore our full range of architectural glass products — clear float, low iron, laminated safety, security, acoustic, decorative, energy efficient and automotive glass.",
      },
      { property: "og:title", content: "All Products — Architectural & Safety Glass" },
      {
        property: "og:description",
        content:
          "Browse GlassCo's complete glass product range including top-selling clear float and clear laminated glass.",
      },
    ],
  }),
  component: AllProductsPage,
});

function AllProductsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: '"Geist", sans-serif' }}>
      <Header />

      {/* Hero */}
      <section className="border-b border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
          <span
            className="inline-block"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: 11.2, fontWeight: 600, letterSpacing: "0.18em", color: "#009AAA" }}
          >
            OUR PRODUCTS
          </span>
          <h1
            className="mt-4 max-w-3xl text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Montserrat", sans-serif', letterSpacing: "-0.01em" }}
          >
            The full GlassCo glass range
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            From everyday clear float to high-performance security and acoustic glazing — explore our complete catalogue and click any product for full specifications.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto w-full max-w-[1280px] px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-[translate,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#009AAA]/40 hover:shadow-[0_20px_50px_-20px_rgba(0,154,170,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1600}
                  height={1024}
                  className="h-full w-full object-cover transition-[transform,scale] duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 will-change-transform"
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
                <h2
                  className="text-xl font-semibold text-neutral-900 transition-colors group-hover:text-[#009AAA]"
                  style={{ fontFamily: '"Montserrat", sans-serif' }}
                >
                  {p.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{p.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#009AAA]">
                  View product
                  <span className="transition-[translate] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
