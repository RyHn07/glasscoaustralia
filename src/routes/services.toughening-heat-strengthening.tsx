import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Building2, Droplets, Sofa, Cpu, Fence, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSiteImage } from "@/lib/site-images";
import heroImage from "@/assets/service-toughening.jpg";
import furnaceAsset from "@/assets/machinery/northglass.jpg.asset.json";
const furnaceImage = furnaceAsset.url;

const ACCENT = "#009AAA";
const HEAD_FONT = "Montserrat, sans-serif";
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
  const pageHero = useSiteImage("hero-services-toughening-heat-strengthening", heroImage);
  const furnaceSectionImage = useSiteImage("services-toughening-northglass-furnace", furnaceImage);

  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: BODY_FONT }}>
      <Header />

      {/* HERO */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={pageHero}
          alt="NorthGlass horizontal glass toughening furnace"
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

      {/* OVERVIEW — TOUGHENING (Part 01) */}
      <section id="toughening" className="w-full bg-white py-24 scroll-mt-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-10 flex items-center gap-3">
            <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
            <span style={{ fontFamily: HEAD_FONT, fontSize: "14px", fontWeight: 700, letterSpacing: "0.2em", color: ACCENT }}>
              PART 01 — TOUGHENING
            </span>
          </div>
        </div>
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left: image */}
            <div className="relative">
              <div
                className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2"
                style={{ borderColor: ACCENT }}
              />
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={furnaceSectionImage}
                  alt="NorthGlass horizontal toughening furnace at GlassCo Australia"
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 h-full w-full scale-[1.4] rotate-90 object-cover transition-transform duration-700 ease-out hover:scale-[1.48]"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 rounded-lg px-8 py-5 text-center text-white shadow-xl"
                style={{ backgroundColor: ACCENT, fontFamily: HEAD_FONT }}
              >
                <div className="text-4xl font-bold leading-none">98%+</div>
                <div className="mt-1 text-sm font-medium">Finished Rate</div>
              </div>
            </div>

            {/* Right: content */}
            <div>
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
                Industry-leading
                <br />
                <span style={{ color: ACCENT }}>NorthGlass</span> furnace
              </h2>
              <div
                className="mt-6 space-y-4 text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                <p>
                  At Glass Co Australia, we utilise an industry-leading NorthGlass horizontal
                  glass toughening furnace, engineered to deliver premium-quality tempered safety
                  glass with exceptional optical clarity, strength, flatness, and consistency.
                </p>
                <p>
                  Designed for high-performance processing, the system enables precise and
                  reliable tempering across a wide range of architectural and specialty glass
                  applications while maintaining superior quality standards and production
                  efficiency.
                </p>
              </div>
              <div
                className="mt-8 pl-4 italic text-neutral-700"
                style={{
                  borderLeftWidth: "3px",
                  borderLeftStyle: "solid",
                  borderColor: ACCENT,
                  fontFamily: BODY_FONT,
                  fontSize: "17px",
                  fontWeight: 400,
                }}
              >
                "Premium tempered safety glass — engineered for performance."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA — GlassTypes style */}
      <section className="w-full bg-neutral-50 py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
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
                style={{
                  fontFamily: HEAD_FONT,
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "#0a0a0a",
                  margin: 0,
                }}
              >
                Furnace <span style={{ color: ACCENT }}>specifications</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <p
                className="text-neutral-600 lg:text-right"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                Performance figures for our NorthGlass horizontal toughening line. All processing
                is completed to international tempered safety glass standards.
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="mt-12 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
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
                      GLASS PROCESSING SPECIFICATION
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
                  {technicalData.map((row, i) => (
                    <tr key={row.label} className={`${i % 2 === 0 ? "bg-white" : "bg-neutral-50"} group cursor-pointer transition-colors duration-200 hover:bg-[#009AAA]/10`}>
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

      {/* KEY FEATURES */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-2xl">
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
                KEY FEATURES
              </span>
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
                className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
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

      {/* APPLICATIONS */}
      <section className="w-full bg-neutral-50 py-24">
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
                APPLICATIONS
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
              Where it's <span style={{ color: ACCENT }}>used</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Building2, label: "Architectural glass" },
              { icon: Droplets, label: "Shower screens & partitions" },
              { icon: Sofa, label: "Furniture glass" },
              { icon: Cpu, label: "Appliance & automotive glass" },
              { icon: Fence, label: "Balustrades & handrails" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: `${ACCENT}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color: ACCENT }} />
                </span>
                <span
                  className="mt-4 text-neutral-800"
                  style={{ fontFamily: BODY_FONT, fontSize: "14px", fontWeight: 500, lineHeight: 1.4 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TOUGHENED GLASS */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="mb-5 flex items-center gap-3">
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
                  WHY CHOOSE
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
                Why choose <span style={{ color: ACCENT }}>toughened glass?</span>
              </h2>
              <p
                className="mt-5 text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.75 }}
              >
                Built to perform where ordinary glass can't — toughened glass combines superior
                strength, thermal resistance and safety. When broken, it shatters into small,
                blunt granules instead of sharp shards, drastically reducing the risk of injury
                and meeting Australian safety standards for high-risk environments.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div
                className="group relative flex flex-col justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-8 pt-[calc(2rem+16px)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[color:var(--accent-color)] hover:shadow-2xl md:p-10 md:pt-[calc(2.5rem+16px)] animate-in fade-in slide-in-from-right-6 duration-700"
                style={{
                  borderLeftWidth: "4px",
                  borderLeftColor: ACCENT,
                  borderLeftStyle: "solid",
                  ["--accent-color" as never]: ACCENT,
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ backgroundColor: ACCENT }}
                />
                <ShieldCheck
                  className="mb-5 h-10 w-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]"
                  style={{ color: ACCENT }}
                  strokeWidth={1.5}
                />
                <p
                  className="text-neutral-700"
                  style={{ fontFamily: BODY_FONT, fontSize: "17px", lineHeight: 1.75 }}
                >
                  Toughened safety glass is up to{" "}
                  <span className="font-semibold" style={{ color: ACCENT }}>
                    five times stronger
                  </span>{" "}
                  than standard annealed glass, making it ideal for commercial, residential, and
                  industrial applications where safety and durability are critical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEAT STRENGTHENING — clearly separated section */}
      <section id="heat-strengthening" className="w-full bg-neutral-50 py-24 scroll-mt-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mx-auto max-w-3xl text-center">
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
                PART 02 — HEAT STRENGTHENING
              </span>
              <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
            </div>
            <h2
              className="mt-5"
              style={{
                fontFamily: HEAD_FONT,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Heat <span style={{ color: ACCENT }}>Strengthening</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-2xl text-neutral-600"
              style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.75 }}
            >
              Heat-strengthened glass is processed on the same NorthGlass line as our toughened
              glass, but cooled at a slower, controlled rate. The result is a glass that is roughly
              twice as strong as standard annealed glass — without the spontaneous-breakage risk
              that can come with fully tempered glass, and with superior optical flatness for
              facade and spandrel applications.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "2× stronger than annealed",
                body: "Improved resistance to thermal stress and wind load without the full safety classification of toughened glass.",
              },
              {
                title: "Superior optical flatness",
                body: "Slower cooling produces less roller wave distortion — ideal for high-spec facades and overhead glazing.",
              },
              {
                title: "Breaks in larger fragments",
                body: "Fractures into larger pieces that tend to remain in the frame — preferred for laminated spandrel and facade panels.",
              },
              {
                title: "Lower NiS breakage risk",
                body: "Significantly reduced risk of spontaneous nickel sulphide inclusion failure compared to fully toughened glass.",
              },
              {
                title: "Compatible with coatings",
                body: "Processed for Low-E, solar control and reflective coatings without compromising performance.",
              },
              {
                title: "Best for facades & spandrels",
                body: "Ideal where strength and flatness matter more than full safety glazing — curtain walls, spandrel panels, skylights.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
              >
                <h3
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    margin: 0,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="mt-3 text-neutral-700"
                  style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.7 }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ fontFamily: BODY_FONT }}>
                <thead style={{ backgroundColor: ACCENT }}>
                  <tr>
                    <th className="px-5 py-4 text-white" style={{ fontFamily: HEAD_FONT, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>PROPERTY</th>
                    <th className="px-5 py-4 text-white" style={{ fontFamily: HEAD_FONT, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>TOUGHENED</th>
                    <th className="px-5 py-4 text-white" style={{ fontFamily: HEAD_FONT, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>HEAT STRENGTHENED</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Surface compression", "≥ 69 MPa", "24–52 MPa"],
                    ["Strength vs annealed", "~4–5× stronger", "~2× stronger"],
                    ["Break pattern", "Small blunt granules", "Larger pieces, stays in frame"],
                    ["Safety classification", "Yes (Grade A)", "No — not a safety glass"],
                    ["Optical flatness", "Standard", "Superior (low roller wave)"],
                    ["Best for", "Doors, balustrades, shower screens", "Facades, spandrels, skylights"],
                  ].map((row, i) => (
                    <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="px-5 py-4 align-top" style={{ fontSize: 13.5, fontWeight: 600, color: "#0a0a0a" }}>{row[0]}</td>
                      <td className="px-5 py-4 align-top text-neutral-700" style={{ fontSize: 13.5 }}>{row[1]}</td>
                      <td className="px-5 py-4 align-top text-neutral-700" style={{ fontSize: 13.5 }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
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
            Need toughened glass for your project?
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-white/85"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            Talk to our processing team about tempered safety glass tailored to your specification.
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
