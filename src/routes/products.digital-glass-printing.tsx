import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/product-printing.jpg";
import imgSplashback from "@/assets/range-mirrors.jpg";
import imgShower from "@/assets/range-tempered.jpg";
import imgFeatureWall from "@/assets/project-atrium.jpg";
import imgPartition from "@/assets/project-office.jpg";
import imgFacade from "@/assets/project-curved.jpg";
import imgBalustrade from "@/assets/project-coastal.jpg";
import imgShopfront from "@/assets/project-retail.jpg";
import imgDecorative from "@/assets/range-laminated.jpg";
import imgSignage from "@/assets/project-heritage.jpg";
import imgInterior from "@/assets/range-float.jpg";

const APP_IMAGES = [
  imgSplashback,
  imgShower,
  imgFeatureWall,
  imgPartition,
  imgFacade,
  imgBalustrade,
  imgShopfront,
  imgDecorative,
  imgSignage,
  imgInterior,
];

const ACCENT = "#009AAA";
const HEAD_FONT = "Rajdhani, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

export const Route = createFileRoute("/products/digital-glass-printing")({
  head: () => ({
    meta: [
      { title: "Digital Glass Printing — CGI Ceramic Printer | GlassCo Australia" },
      {
        name: "description",
        content:
          "High-resolution digital ceramic printing on glass for splashbacks, facades, partitions, balustrades and architectural projects.",
      },
      { property: "og:title", content: "Digital Glass Printing" },
      {
        property: "og:description",
        content: "Premium ceramic printing directly onto glass — durable, vibrant and custom designed.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: DigitalGlassPrintingPage,
});

const KEY_BENEFITS = [
  { tag: "Resolution", title: "High-resolution digital ceramic printing" },
  { tag: "Creative", title: "Custom designs & photographic imagery" },
  { tag: "Durability", title: "UV resistant & long-lasting finish" },
  { tag: "Versatility", title: "Suitable for interior & exterior applications" },
  { tag: "Efficiency", title: "Fast turnaround & precision production" },
];

const APPLICATIONS = [
  "Splashbacks",
  "Shower screens",
  "Feature walls",
  "Office partitions",
  "Facades",
  "Balustrades",
  "Shopfronts",
  "Decorative architectural glass",
  "Commercial signage",
  "Interior design projects",
];

const PREMIUM_BULLETS = [
  "High Resolution Printing",
  "Custom Design Capability",
  "Architectural Grade Durability",
  "Large Format Glass Printing",
  "Fast & Efficient Production",
  "Eco-Friendly Process",
];

const PRODUCTION_BULLETS = [
  { tag: "Inking System", value: "Digital ceramic ink system" },
  { tag: "Head Tech", value: "Precision print head technology" },
  { tag: "Handling", value: "Automated glass handling" },
  { tag: "Cleanroom", value: "Controlled airflow & cleanroom environment" },
  { tag: "Software", value: "High-performance graphic processing software" },
  { tag: "Monitoring", value: "Remote monitoring capability" },
];

const WHY_CHOOSE = [
  "Faster production turnaround",
  "Superior print consistency",
  "Greater design flexibility",
  "Custom architectural solutions",
  "Premium quality finishes",
  "Advanced manufacturing capability",
];

const SECTORS = [
  {
    name: "Residential",
    body: "Kitchen splashbacks, bathroom panels, shower screens, decorative doors, wardrobe panels.",
  },
  {
    name: "Commercial",
    body: "Office partitions, reception feature walls, shopfront glass, signage panels, branding applications.",
  },
  {
    name: "Architectural",
    body: "Facades, balustrades, cladding, external feature glass, privacy and decorative glazing.",
  },
];

function DigitalGlassPrintingPage() {
  return (
    <main
      className="flex min-h-screen flex-col bg-white text-neutral-900 selection:text-white"
      style={{ fontFamily: BODY_FONT }}
    >
      <Header />
      {/* HERO — Split */}
      <section className="relative flex flex-col lg:flex-row min-h-[88vh] bg-neutral-950 overflow-hidden">
        <div className="w-full lg:w-7/12 h-[40vh] lg:h-auto relative order-1 lg:order-2">
          <img
            src={heroImage}
            alt="Digital ceramic glass printing"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />
        </div>
        <div className="w-full lg:w-5/12 flex items-center bg-neutral-950 relative z-10 order-2 lg:order-1 py-16 lg:py-0">
          <div className="px-8 md:px-16 lg:px-20 max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12" style={{ background: ACCENT }} />
              <p
                className="font-bold tracking-[0.4em] uppercase text-[10px]"
                style={{ color: ACCENT, fontFamily: HEAD_FONT }}
              >
                Product — Digital Ceramic Printing
              </p>
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold text-white leading-[0.9] mb-8 uppercase"
              style={{ fontFamily: HEAD_FONT }}
            >
              Digital Glass <br />
              <span style={{ color: ACCENT }}>Printing</span>
            </h1>
            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              Premium quality, vibrant ceramic printing directly onto glass — for residential,
              commercial and architectural applications.
            </p>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          <div className="lg:w-1/3">
            <p
              className="text-sm font-bold tracking-widest uppercase mb-4"
              style={{ color: ACCENT, fontFamily: HEAD_FONT }}
            >
              01 — Key Benefits
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-none uppercase"
              style={{ fontFamily: HEAD_FONT }}
            >
              Why choose <br />
              this glass
            </h2>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {KEY_BENEFITS.map((b) => (
              <div key={b.title} className="border-t border-neutral-200 pt-8">
                <p className="text-xs font-bold mb-4 tracking-widest" style={{ color: ACCENT }}>
                  {b.tag.toUpperCase()}
                </p>
                <h3
                  className="text-xl font-bold uppercase leading-tight"
                  style={{ fontFamily: HEAD_FONT }}
                >
                  {b.title}
                </h3>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE MACHINE — About-page inspired */}
      <section className="w-full bg-white py-24 border-y border-neutral-100">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p
                className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
                style={{ color: ACCENT, fontFamily: HEAD_FONT }}
              >
                — The Technology
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold uppercase leading-[1.05] text-neutral-900"
                style={{ fontFamily: HEAD_FONT }}
              >
                About <br />the Machine
              </h2>
              <div className="mt-6 h-1 w-16" style={{ background: ACCENT }} />
            </div>
            <div className="lg:col-span-7">
              <p className="text-neutral-700 text-lg leading-relaxed">
                We are proud to announce the installation of our latest{" "}
                <span className="font-semibold text-neutral-900">
                  CGI Digital Glass Printing Machine
                </span>
                , bringing world-class digital ceramic printing capabilities to Australia.
              </p>
              <p className="mt-5 text-neutral-600 leading-relaxed">
                Designed for modern architectural and decorative glass applications, this advanced
                printer enables us to produce high-definition graphics, patterns, textures,
                gradients, and custom designs directly onto glass surfaces with exceptional accuracy
                and durability.
              </p>
            </div>
          </div>

          <div className="relative mt-14">
            <span
              className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2 hidden md:block"
              style={{ borderColor: ACCENT }}
            />
            <span
              className="absolute -right-4 -bottom-4 h-16 w-16 rounded-br-lg border-r-2 border-b-2 hidden md:block"
              style={{ borderColor: ACCENT }}
            />
            <img
              src={heroImage}
              alt="CGI Digital Glass Printing Machine"
              className="h-[360px] md:h-[420px] w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* IDEAL APPLICATIONS — Image cards */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
            <div>
              <p
                className="text-sm font-bold tracking-widest uppercase mb-4"
                style={{ color: ACCENT, fontFamily: HEAD_FONT }}
              >
                02 — Scope
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold uppercase leading-none"
                style={{ fontFamily: HEAD_FONT }}
              >
                Ideal <br />Applications
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-xs md:text-right">
              Transforming ordinary glass into functional architectural elements across diverse
              sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {APPLICATIONS.map((label, i) => (
              <div
                key={label}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-900 cursor-pointer"
              >
                <img
                  src={APP_IMAGES[i % APP_IMAGES.length]}
                  alt={label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent transition-opacity duration-500" />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80 mix-blend-multiply"
                  style={{ background: ACCENT }}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <span
                    className="text-xs font-bold tracking-widest opacity-70"
                    style={{ fontFamily: HEAD_FONT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4
                      className="text-lg md:text-xl font-bold uppercase leading-tight"
                      style={{ fontFamily: HEAD_FONT }}
                    >
                      {label}
                    </h4>
                    <div
                      className="mt-3 h-[2px] w-8 transition-all duration-500 group-hover:w-16 group-hover:bg-white"
                      style={{ background: ACCENT }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM PRINTING — Split dark */}
      <section className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 min-h-[400px] lg:min-h-[600px] bg-neutral-200 relative">
          <img
            src={heroImage}
            alt="Premium ceramic printing process"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 bg-white p-5 shadow-xl hidden md:block">
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-1"
              style={{ color: ACCENT }}
            >
              Technology
            </p>
            <p className="text-base font-bold uppercase" style={{ fontFamily: HEAD_FONT }}>
              CGI Ceramic Ink System
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 bg-neutral-950 text-white p-12 lg:p-20 flex flex-col justify-center">
          <h3
            className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight"
            style={{ fontFamily: HEAD_FONT }}
          >
            Premium digital <br />
            <span style={{ color: ACCENT }}>ceramic printing</span>
          </h3>
          <p className="text-neutral-400 font-light leading-relaxed mb-10">
            The printer uses advanced ceramic ink technology to permanently fuse designs into the
            glass surface during tempering, ensuring exceptional durability and colour stability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {PREMIUM_BULLETS.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span
                  className="w-1.5 h-1.5 shrink-0"
                  style={{ background: ACCENT }}
                />
                <span className="text-xs uppercase tracking-widest">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANCED PRODUCTION — Split light */}
      <section className="flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 min-h-[400px] lg:min-h-[600px] bg-neutral-100 relative">
          <img
            src={heroImage}
            alt="Advanced production environment"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center border-y lg:border-y-0 lg:border-r border-neutral-100">
          <h3
            className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight text-neutral-950"
            style={{ fontFamily: HEAD_FONT }}
          >
            Advanced production <br />
            <span style={{ color: ACCENT }}>environment</span>
          </h3>
          <p className="text-neutral-500 font-light leading-relaxed mb-10">
            The CGI printer operates in a precision-controlled environment to maintain superior
            print quality and consistency.
          </p>
          <ul className="space-y-3">
            {PRODUCTION_BULLETS.map((p) => (
              <li
                key={p.value}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 border-b border-neutral-100 pb-3"
              >
                <span
                  className="text-[11px] uppercase font-bold tracking-widest text-neutral-400"
                  style={{ fontFamily: HEAD_FONT }}
                >
                  {p.tag}
                </span>
                <span className="text-sm text-neutral-800">{p.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE US + SECTORS — Two-column architectural */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold uppercase mb-12 border-l-4 pl-6"
                style={{ borderColor: ACCENT, fontFamily: HEAD_FONT }}
              >
                Why choose us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {WHY_CHOOSE.map((w, i) => (
                  <div key={w} className="space-y-3">
                    <span
                      className="font-bold text-xl"
                      style={{ color: ACCENT, fontFamily: HEAD_FONT }}
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <p className="font-bold uppercase text-sm tracking-wide leading-snug">
                      {w}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold uppercase mb-12 border-l-4 pl-6"
                style={{ borderColor: ACCENT, fontFamily: HEAD_FONT }}
              >
                Applications by sector
              </h2>
              <div className="space-y-10">
                {SECTORS.map((s) => (
                  <div key={s.name}>
                    <h4
                      className="font-bold uppercase tracking-widest text-sm mb-3"
                      style={{ color: ACCENT, fontFamily: HEAD_FONT }}
                    >
                      {s.name}
                    </h4>
                    <p className="text-neutral-600 font-light leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5" />
        <div className="mx-auto max-w-[1280px] px-6 relative z-10 text-center">
          <p
            className="uppercase tracking-[0.4em] text-xs mb-8"
            style={{ color: ACCENT, fontFamily: HEAD_FONT }}
          >
            Ready to start?
          </p>
          <h2
            className="text-5xl md:text-7xl font-bold mb-10 leading-tight uppercase"
            style={{ fontFamily: HEAD_FONT }}
          >
            Bring Your <br />Vision to Life
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-14 font-light">
            Looking for custom printed glass? Contact us for design consultation, samples, project
            pricing and technical assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/contact"
              className="px-10 py-5 text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-neutral-950"
              style={{ background: ACCENT, fontFamily: HEAD_FONT }}
            >
              Get a Quote
            </Link>
            <Link
              to="/about"
              className="px-10 py-5 border border-neutral-700 text-neutral-300 text-sm font-bold uppercase tracking-widest hover:border-white hover:text-white transition-all duration-300"
              style={{ fontFamily: HEAD_FONT }}
            >
              About GlassCo
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
