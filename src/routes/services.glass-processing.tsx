import { useEffect } from "react";
import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import {
  Cog,
  Droplets,
  Scissors,
  Check,
  Zap,
  Layers,
  Sparkles,
  Hammer,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/service-glass-processing.jpg";
import cncImage from "@/assets/glass-cnc-line.jpg";
import waterjetImage from "@/assets/glass-waterjet.jpg";
import bimatechImage from "@/assets/glass-bimatech.jpg";

const ACCENT = "#009AAA";
const HEAD_FONT = "Rajdhani, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

export const Route = createFileRoute("/services/glass-processing")({
  head: () => ({
    meta: [
      { title: "Glass Processing | GlassCo Australia" },
      {
        name: "description",
        content:
          "Comprehensive glass processing and edgework — CNC machining, waterjet cutting, and precision edge finishing on advanced Italian and global machinery.",
      },
      { property: "og:title", content: "Glass Processing | GlassCo Australia" },
      {
        property: "og:description",
        content:
          "Precision CNC, waterjet, and edge processing for architectural and custom glass applications.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: GlassProcessingPage,
});

const subServices = [
  {
    id: "cnc-line",
    label: "CNC Line",
    short: "SKILL E-D Vertical Machining Centre",
  },
  {
    id: "waterjet",
    label: "TECHNI Intec Waterjet",
    short: "Ultra-high-pressure abrasive cutting",
  },
  {
    id: "bimatech",
    label: "Bimatech Techno Edge",
    short: "Italian CNC edging & polishing",
  },
];

const cncProcesses = [
  {
    icon: Layers,
    title: "Grinding",
    body: "Carried out using diamond grinders with a diameter of 150 mm on flat or shaped glass — even if layered or treated.",
  },
  {
    icon: Sparkles,
    title: "Polishing",
    body: "Performed on large surfaces with 150 mm diameter grinders, or in small inserts with 50 mm or 30 mm grinders.",
  },
  {
    icon: Hammer,
    title: "Drilling",
    body: "Opposed heads deliver maximum speed while guaranteeing optimum quality and precision on every hole.",
  },
];

const waterjetCapabilities = [
  "Precision cutting for complex shapes and detailed designs",
  "Cuts without heat damage, warping, or burning",
  "Suitable for thick and thin materials",
  "Large format cutting for full sheets and oversized panels",
  "Smooth, clean edge finish with minimal secondary processing",
];

const waterjetIdealFor = [
  "Metal fabrication",
  "Architectural panels",
  "Decorative screens",
  "Custom engineering components",
  "Stone benchtops & inlays",
  "Glass panels & signage",
];

const waterjetSpecs: { label: string; value: string }[] = [
  { label: "Cutting Bed", value: "3480 × 1750 mm" },
  { label: "Technology", value: "Ultra-high-pressure abrasive waterjet" },
  { label: "Cutting Process", value: "Cold cutting — no heat distortion" },
  { label: "Material Range", value: "Thin to thick — glass, stone, metal, composites" },
  { label: "Edge Finish", value: "Smooth, clean — minimal secondary processing" },
];

const bimatechCapabilities = [
  "Precision glass edging and polishing",
  "CNC processing of complex and irregular glass shapes",
  "High-quality edge finishing for architectural and decorative glass",
  "Suitable for custom glass fabrication and high-end projects",
];

const bimatechFeatures = [
  "Flat polished edges",
  "Pencil and arrised edges",
  "Holes, internal cut-outs and notches",
  "Shape processing for custom glass panels",
];

function GlassProcessingPage() {
  // Smooth-scroll to hash target when arriving from menu
  const hash = useRouterState({ select: (s) => s.location.hash });
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      // small delay so layout settles
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [hash]);

  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: BODY_FONT }}>
      <Header />

      {/* HERO */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="GlassCo Australia glass processing facility"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 py-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
            <span
              style={{
                fontFamily: HEAD_FONT,
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#7DD3DC",
              }}
            >
              SERVICE — PROCESSING
            </span>
          </div>
          <h1
            className="mt-2"
            style={{
              fontFamily: HEAD_FONT,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Glass
            <br />
            <span style={{ color: ACCENT }}>Processing</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
            Comprehensive glass processing and edgework solutions — CNC machining, waterjet
            cutting and precision edge finishing on advanced Italian and global machinery.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
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
                  OVERVIEW
                </span>
              </div>
              <h2
                style={{
                  fontFamily: HEAD_FONT,
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#0a0a0a",
                  margin: 0,
                }}
              >
                Precision <span style={{ color: ACCENT }}>edgework</span> and
                cutting
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div
                className="space-y-4 text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.75 }}
              >
                <p>
                  GlassCo Australia offers a comprehensive range of glass processing and edgework
                  solutions, supported by advanced machinery and experienced operators. Our
                  capabilities include precision edge finishing, standard and countersunk holes,
                  finger pulls, notches, custom cut-outs, and the accurate cutting of complex and
                  irregular glass shapes to suit a wide variety of architectural and custom
                  applications.
                </p>
                <p>Our facility is equipped with advanced glass processing machinery including:</p>
              </div>

              {/* Sub-service quick links */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {subServices.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
                  >
                    <div
                      className="text-xs font-bold"
                      style={{
                        fontFamily: HEAD_FONT,
                        letterSpacing: "0.15em",
                        color: ACCENT,
                      }}
                    >
                      {`0${subServices.indexOf(s) + 1}`}
                    </div>
                    <div
                      className="mt-1.5"
                      style={{
                        fontFamily: HEAD_FONT,
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#0a0a0a",
                        lineHeight: 1.2,
                      }}
                    >
                      {s.label}
                    </div>
                    <div className="mt-1 text-xs text-neutral-500">{s.short}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (A) CNC LINE */}
      <section id="cnc-line" className="w-full bg-neutral-50 py-24 scroll-mt-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2"
                style={{ borderColor: ACCENT }}
              />
              <img
                src={cncImage}
                alt="SKILL E-D vertical CNC machining centre"
                loading="lazy"
                width={1280}
                height={896}
                className="h-auto w-full rounded-lg object-cover shadow-lg transition-transform duration-700 ease-out hover:scale-105"
              />
              <div
                className="absolute -bottom-6 -right-6 rounded-lg px-7 py-5 text-center text-white shadow-xl"
                style={{ backgroundColor: ACCENT, fontFamily: HEAD_FONT }}
              >
                <div className="text-3xl font-bold leading-none">SKILL E-D</div>
                <div className="mt-1 text-xs font-medium">Vertical CNC</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                  style={{ background: ACCENT }}
                >
                  <Cog className="h-4 w-4" />
                </span>
                <span
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: ACCENT,
                  }}
                >
                  (A) CNC LINE
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
                SKILL E-D <span style={{ color: ACCENT }}>vertical</span> machining centre
              </h2>
              <div
                className="mt-6 space-y-4 text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                <p>
                  SKILL E-D is a vertical machining centre that combines multiple processes in one
                  machine and is capable of carrying out all processes with speed and precision.
                  The machine combines vertical drilling and milling with the characteristics of a
                  grinder and vertical arissing machine, and can be used for any process — whether
                  on flat or shaped sheet glass.
                </p>
                <p>
                  Its fundamental characteristic is its versatility, which allows the machine to
                  carry out very different operations while maintaining speed and optimal precision.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {cncProcesses.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: `${ACCENT}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color: ACCENT }} />
                </span>
                <h3
                  className="mt-5"
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    margin: 0,
                  }}
                >
                  {title}
                </h3>
                <p
                  className="mt-3 text-neutral-600"
                  style={{ fontFamily: BODY_FONT, fontSize: "14.5px", lineHeight: 1.7 }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (B) WATERJET */}
      <section id="waterjet" className="w-full bg-white py-24 scroll-mt-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                  style={{ background: ACCENT }}
                >
                  <Droplets className="h-4 w-4" />
                </span>
                <span
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: ACCENT,
                  }}
                >
                  (B) WATERJET CUTTING
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
                TECHNI Intec <span style={{ color: ACCENT }}>waterjet</span>
              </h2>
              <p
                className="mt-6 text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                Our TECHNI Intec waterjet delivers high-precision cutting across a wide range of
                materials using ultra-high-pressure abrasive waterjet technology. With a large
                3480 × 1750 mm cutting bed and no heat distortion during cutting, the machine is
                ideal for both industrial fabrication and custom projects.
              </p>
              <div
                className="mt-6 rounded-lg border-l-4 bg-neutral-50 p-5 text-neutral-700"
                style={{ borderColor: ACCENT, fontSize: "14.5px", lineHeight: 1.7 }}
              >
                <strong className="text-neutral-900">Why waterjet?</strong> Unlike laser or plasma
                cutting, waterjet technology uses a cold cutting process — allowing us to cut
                sensitive materials with exceptional accuracy while maintaining material integrity.
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -right-4 -top-4 h-16 w-16 rounded-tr-lg border-r-2 border-t-2"
                style={{ borderColor: ACCENT }}
              />
              <img
                src={waterjetImage}
                alt="TECHNI Intec waterjet cutting glass"
                loading="lazy"
                width={1280}
                height={896}
                className="h-auto w-full rounded-lg object-cover shadow-lg transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </div>

          {/* Capabilities + Ideal For */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="group animate-fade-in rounded-xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--accent-color,#009AAA)] hover:shadow-2xl" style={{ ["--accent-color" as any]: ACCENT }}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: `${ACCENT}15` }}
                >
                  <Zap className="h-5 w-5" style={{ color: ACCENT }} />
                </span>
                <h3
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    margin: 0,
                  }}
                >
                  Capabilities
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {waterjetCapabilities.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-neutral-700"
                    style={{ fontSize: "14.5px", lineHeight: 1.6 }}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: `${ACCENT}15` }}
                >
                  <Scissors className="h-5 w-5" style={{ color: ACCENT }} />
                </span>
                <h3
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    margin: 0,
                  }}
                >
                  Ideal for
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {waterjetIdealFor.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm text-neutral-700"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Specs table */}
          <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ fontFamily: BODY_FONT }}>
                <thead style={{ backgroundColor: ACCENT }}>
                  <tr>
                    <th
                      className="whitespace-nowrap px-5 py-5 text-white"
                      style={{
                        fontFamily: HEAD_FONT,
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      WATERJET SPECIFICATION
                    </th>
                    <th
                      className="whitespace-nowrap px-5 py-5 text-white"
                      style={{
                        fontFamily: HEAD_FONT,
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      DETAILS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {waterjetSpecs.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-neutral-50"} group cursor-pointer transition-colors duration-200 hover:bg-[#009AAA]/10`}
                    >
                      <td
                        className="px-5 py-5 align-top"
                        style={{
                          fontSize: "13.5px",
                          lineHeight: 1.55,
                          fontWeight: 600,
                          color: "#0a0a0a",
                        }}
                      >
                        {row.label}
                      </td>
                      <td
                        className="px-5 py-5 align-top text-neutral-700"
                        style={{ fontSize: "13.5px", lineHeight: 1.55 }}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* (C) BIMATECH */}
      <section id="bimatech" className="w-full bg-neutral-50 py-24 scroll-mt-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2"
                style={{ borderColor: ACCENT }}
              />
              <img
                src={bimatechImage}
                alt="Bimatech Techno Edge CNC glass processing machine"
                loading="lazy"
                width={1280}
                height={896}
                className="h-auto w-full rounded-lg object-cover shadow-lg transition-transform duration-700 ease-out hover:scale-105"
              />
              <div
                className="absolute -bottom-6 -right-6 rounded-lg px-7 py-5 text-center text-white shadow-xl"
                style={{ backgroundColor: ACCENT, fontFamily: HEAD_FONT }}
              >
                <div className="text-3xl font-bold leading-none">BIMATECH</div>
                <div className="mt-1 text-xs font-medium">Made in Italy</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                  style={{ background: ACCENT }}
                >
                  <Hammer className="h-4 w-4" />
                </span>
                <span
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: ACCENT,
                  }}
                >
                  (C) EDGE PROCESSING
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
                Bimatech <span style={{ color: ACCENT }}>Techno Edge</span>
              </h2>
              <p
                className="mt-6 text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                The Bimatech Techno Edge is a high-precision CNC glass processing and edging
                machine designed for advanced glass fabrication applications. Manufactured in
                Italy, the machine is widely recognised for its accuracy, reliability, and ability
                to process complex glass shapes and edge finishes with exceptional consistency.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3
                style={{
                  fontFamily: HEAD_FONT,
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  margin: 0,
                }}
              >
                Key <span style={{ color: ACCENT }}>capabilities</span>
              </h3>
              <ul className="mt-5 space-y-3">
                {bimatechCapabilities.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-neutral-700"
                    style={{ fontSize: "14.5px", lineHeight: 1.6 }}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3
                style={{
                  fontFamily: HEAD_FONT,
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  margin: 0,
                }}
              >
                Processing <span style={{ color: ACCENT }}>features</span>
              </h3>
              <ul className="mt-5 space-y-3">
                {bimatechFeatures.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-neutral-700"
                    style={{ fontSize: "14.5px", lineHeight: 1.6 }}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 text-white" style={{ background: ACCENT }}>
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
            Need precision glass processing for your project?
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-white/85"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            Talk to our processing team about CNC, waterjet and edgework tailored to your
            specification.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="rounded-md bg-white px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ color: ACCENT, fontFamily: HEAD_FONT, letterSpacing: "0.05em" }}
            >
              GET A QUOTE
            </Link>
            <Link
              to="/about"
              className="rounded-md border border-white/60 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              style={{ fontFamily: HEAD_FONT, letterSpacing: "0.05em" }}
            >
              ABOUT GLASSCO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
