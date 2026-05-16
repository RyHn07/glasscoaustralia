import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/service-toughening.jpg";
import furnaceImage from "@/assets/northglass-furnace.jpg";

const ACCENT = "#009AAA";
const HEAD_FONT = "Rajdhani, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

export const Route = createFileRoute("/services/toughening-heat-strengthening")({
  head: () => ({
    meta: [
      { title: "Toughening & Heat Strengthening | GlassCo Australia" },
      {
        name: "description",
        content:
          "Premium-quality tempered safety glass processed on an industry-leading NorthGlass horizontal toughening furnace.",
      },
      { property: "og:title", content: "Toughening & Heat Strengthening" },
      {
        property: "og:description",
        content:
          "Industry-leading NorthGlass horizontal toughening furnace delivering tempered safety glass with exceptional clarity, strength and flatness.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: ToughingHeatStrengtheningPage,
});

const technicalData: { label: string; value: string }[] = [
  { label: "Glass Thickness Range", value: "4–19 mm" },
  { label: "Maximum Glass Size", value: "2440 × 4200 mm" },
  { label: "Minimum Glass Size", value: "100 × 300 mm" },
  { label: "Production Standard", value: "ANSI Z97.1 / EN12150-1" },
  { label: "Finished Product Rate", value: "Minimum 98%" },
  { label: "Heating Speed", value: "Approx. 28 sec/mm" },
  { label: "Productivity", value: "Up to 160 sqm/hour" },
];

const keyFeatures = [
  "Advanced heating and convection system for uniform glass tempering",
  "High safety and operational reliability",
  "Energy-efficient furnace design",
  "Intelligent PLC control system with touchscreen interface",
  "Produces strong safety glass with minimal distortion",
  "Designed for high-quality tempering of Low-E, coated, and float glass",
];

function ToughingHeatStrengtheningPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: BODY_FONT }}>
      <Header />

      {/* HERO */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="NorthGlass horizontal glass toughening furnace"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-end px-6 pb-12">
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
            Toughening &
            <br />
            <span style={{ color: ACCENT }}>Heat Strengthening</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
            Premium-quality tempered safety glass processed on an industry-leading NorthGlass
            horizontal toughening furnace.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
              <span
                style={{
                  fontFamily: HEAD_FONT,
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: ACCENT,
                }}
              >
                OVERVIEW
              </span>
              <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
            </div>
            <h2
              className="mt-5"
              style={{
                fontFamily: HEAD_FONT,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Industry-leading <span style={{ color: ACCENT }}>NorthGlass</span> furnace
            </h2>
          </div>
          <p
            className="mx-auto mt-8 max-w-3xl text-center text-neutral-700"
            style={{ fontSize: "16px", lineHeight: 1.85 }}
          >
            At Glass Co Australia, we utilise an industry-leading NorthGlass horizontal glass
            toughening furnace, engineered to deliver premium-quality tempered safety glass with
            exceptional optical clarity, strength, flatness, and consistency. Designed for
            high-performance processing, the system enables precise and reliable tempering across a
            wide range of architectural and specialty glass applications while maintaining superior
            quality standards and production efficiency.
          </p>
        </div>
      </section>

      {/* TECHNICAL DATA */}
      <section className="w-full bg-neutral-50 py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
                <span
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: ACCENT,
                  }}
                >
                  TECHNICAL DATA
                </span>
              </div>
              <h2
                className="mt-5"
                style={{
                  fontFamily: HEAD_FONT,
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#0a0a0a",
                  margin: 0,
                }}
              >
                Furnace <span style={{ color: ACCENT }}>specifications</span>
              </h2>
              <p
                className="mt-5 text-neutral-600"
                style={{ fontSize: "15px", lineHeight: 1.7 }}
              >
                Performance figures for our NorthGlass horizontal toughening line. All processing is
                completed to international tempered safety glass standards.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-sm">
                <table className="w-full text-left">
                  <thead>
                    <tr style={{ background: "#1a1a1a" }}>
                      <th
                        className="px-6 py-4 text-white"
                        style={{
                          fontFamily: HEAD_FONT,
                          fontSize: "13px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                        }}
                      >
                        GLASS PROCESSING SPECIFICATION
                      </th>
                      <th
                        className="px-6 py-4 text-white"
                        style={{
                          fontFamily: HEAD_FONT,
                          fontSize: "13px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                        }}
                      >
                        DETAILS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalData.map((row, i) => (
                      <tr
                        key={row.label}
                        style={{
                          background: i % 2 === 0 ? "#262626" : "#2d2d2d",
                          borderTop: "1px solid #404040",
                        }}
                      >
                        <td
                          className="px-6 py-4 text-white"
                          style={{ fontSize: "14px", fontWeight: 500 }}
                        >
                          {row.label}
                        </td>
                        <td
                          className="px-6 py-4 text-neutral-200"
                          style={{ fontSize: "14px" }}
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
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
              <span
                style={{
                  fontFamily: HEAD_FONT,
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: ACCENT,
                }}
              >
                KEY FEATURES
              </span>
              <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
            </div>
            <h2
              className="mt-5"
              style={{
                fontFamily: HEAD_FONT,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Engineered for <span style={{ color: ACCENT }}>performance</span>
            </h2>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {keyFeatures.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-5"
                style={{ fontSize: "14px", lineHeight: 1.65 }}
              >
                <span
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ background: ACCENT }}
                >
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-neutral-800">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-neutral-900 py-20 text-white">
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
            Need toughened glass for your project?
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-white/75"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            Talk to our processing team about tempered safety glass tailored to your specification.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="rounded-md px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: ACCENT, fontFamily: HEAD_FONT, letterSpacing: "0.05em" }}
            >
              GET A QUOTE
            </Link>
            <Link
              to="/about"
              className="rounded-md border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
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
