import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Layers, Cog, Printer, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import toughHero from "@/assets/service-toughening.jpg";
import iguHero from "@/assets/service-igu.jpg";
import processingHero from "@/assets/service-glass-processing.jpg";
import printingHero from "@/assets/product-printing.jpg";

const ACCENT = "#009AAA";
const HEAD_FONT = "Montserrat, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | GlassCo Australia" },
      {
        name: "description",
        content:
          "Toughening, IGU, glass processing and digital glass printing — explore the full suite of GlassCo Australia processing services.",
      },
      { property: "og:title", content: "Our Services | GlassCo Australia" },
      {
        property: "og:description",
        content:
          "Premium toughened glass, insulated glass units, CNC & waterjet processing, and ceramic frit digital printing.",
      },
    ],
  }),
  component: ServicesIndexPage,
});

type ServiceCard = {
  to:
    | "/services/toughening-heat-strengthening"
    | "/services/igu"
    | "/services/glass-processing"
    | "/services/digital-glass-printing";
  image: string;
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  bullets: string[];
  icon: typeof Flame;
};

const services: ServiceCard[] = [
  {
    to: "/services/toughening-heat-strengthening",
    image: toughHero,
    eyebrow: "PROCESSING",
    title: "Toughening &",
    highlight: "Heat Strengthening",
    body: "NorthGlass horizontal toughening furnace producing premium tempered safety glass with exceptional flatness and clarity.",
    bullets: ["4–19 mm thickness", "Up to 2440 × 4200 mm", "EN 12150-1 / ANSI Z97.1"],
    icon: Flame,
  },
  {
    to: "/services/igu",
    image: iguHero,
    eyebrow: "INSULATION",
    title: "Insulating",
    highlight: "Glass Units (IGU)",
    body: "Fully automated LISEC IGU line with Argon gas filling, structural silicone sealing and integrated spacer bending.",
    bullets: ["12–60 mm unit thickness", "Argon gas fill", "Up to 3500 × 2500 mm"],
    icon: Layers,
  },
  {
    to: "/services/glass-processing",
    image: processingHero,
    eyebrow: "PROCESSING",
    title: "Glass",
    highlight: "Processing",
    body: "CNC machining, waterjet cutting, edgework, and float / laminate cutting lines on advanced Italian machinery.",
    bullets: ["SKILL E-D CNC", "TECHNI Intec Waterjet", "Float & Laminate Cutting"],
    icon: Cog,
  },
  {
    to: "/services/digital-glass-printing",
    image: printingHero,
    eyebrow: "PRINTING",
    title: "Digital Glass",
    highlight: "Printing",
    body: "Ceramic frit digital printing for facades, decorative panels and architectural design — fired into the glass surface.",
    bullets: ["Ceramic frit ink", "Full-colour patterns", "Architectural facades"],
    icon: Printer,
  },
];

function ServicesIndexPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: BODY_FONT }}>
      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-neutral-950 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-30">
          <img
            src={processingHero}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-left">
          <div className="inline-flex items-center gap-3">
            <span className="block" style={{ width: 32, height: 1, backgroundColor: ACCENT }} />
            <span
              style={{
                fontFamily: HEAD_FONT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#7DD3DC",
              }}
            >
              OUR SERVICES
            </span>
          </div>
          <h1
            className="mt-5"
            style={{
              fontFamily: HEAD_FONT,
              fontSize: "clamp(2.025rem, 5vw, 3.6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
              margin: 0,
            }}
          >
            End‑to‑end <span style={{ color: ACCENT }}>glass processing</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/80" style={{ fontFamily: BODY_FONT, fontSize: 15, lineHeight: 1.7 }}>
            From tempering and insulating glass units to CNC, waterjet and digital printing —
            select a service below to explore our capabilities, machinery and specifications.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map(({ to, image, eyebrow, title, highlight, body, bullets, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-2xl"
              >
                <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={image}
                    alt={`${title} ${highlight}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div
                    className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className="absolute bottom-4 left-5 text-white/90"
                    style={{
                      fontFamily: HEAD_FONT,
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                    }}
                  >
                    {eyebrow}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h2
                    style={{
                      fontFamily: HEAD_FONT,
                      fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#0a0a0a",
                      margin: 0,
                    }}
                  >
                    {title} <span style={{ color: ACCENT }}>{highlight}</span>
                  </h2>
                  <p
                    className="mt-4 text-neutral-600"
                    style={{ fontFamily: BODY_FONT, fontSize: 14.5, lineHeight: 1.7 }}
                  >
                    {body}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold transition-all" style={{ color: ACCENT }}>
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 text-white" style={{ backgroundColor: ACCENT }}>
        <div className="mx-auto max-w-[1080px] px-6 text-center">
          <h2
            style={{
              fontFamily: HEAD_FONT,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Not sure which service you need?
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-white/85"
            style={{ fontSize: 16, lineHeight: 1.7 }}
          >
            Send us your project specification and our processing team will recommend the right
            combination of tempering, IGU, and edgework.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="rounded-md bg-white px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ color: ACCENT, fontFamily: HEAD_FONT, letterSpacing: "0.05em" }}
            >
              GET A QUOTE
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-white/60 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              style={{ fontFamily: HEAD_FONT, letterSpacing: "0.05em" }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
