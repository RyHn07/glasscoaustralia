import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Layers, Sparkles, Sun } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/product-energy.jpg";

const ACCENT = "#009AAA";
const HEAD_FONT = "Rajdhani, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

export const Route = createFileRoute("/products/energy-efficient-glass")({
  head: () => ({
    meta: [
      { title: "Low‑E & Energy Efficient Glass | GlassCo Australia" },
      {
        name: "description",
        content:
          "Low‑E coated glass, insulated glass units and solar control glazing to improve thermal performance and indoor comfort.",
      },
      { property: "og:title", content: "Low‑E & Energy Efficient Glass" },
      {
        property: "og:description",
        content:
          "Improve thermal performance and reduce energy use with GlassCo's energy efficient glazing.",
      },
    ],
  }),
  component: EnergyGlassPage,
});

const keyBenefits = [
  "Low‑E glass for improved thermal insulation",
  "Insulated glass units (IGUs) for stronger year‑round performance",
  "Solar control options for exposed elevations",
  "Laminated combinations for safety, UV and acoustic benefits",
  "Toughened options for strength and compliance",
];

type Variant = {
  id: "lowe" | "evantage" | "luxeco";
  letter: "A" | "B" | "C";
  name: string;
  tagline: string;
  icon: typeof Layers;
  intro: string[];
  highlights: string[];
  applications?: string[];
};

const variants: Variant[] = [
  {
    id: "lowe",
    letter: "A",
    name: "Low‑E (Hard Coated)",
    tagline: "Reflective coating for thermal & solar control",
    icon: Sun,
    intro: [
      "Low‑E coatings reflect both solar and ambient heat, helping keep workspaces, offices or homes cooler in summer and reducing heat escaping through the glass in winter. The main objective is to improve comfort while reducing energy costs by lowering the U‑Value.",
      "Low‑E coatings are made up of a sequence of almost invisible layers of various materials that reflect exterior and interior heat while still allowing natural light to pass through. Low‑E laminated glass can also reduce UV radiation by up to 99%.",
      "GlassCo Australia offers both laminated and monolithic Low‑E options, with many products also available in toughened form to achieve Grade A safety and security compliance.",
    ],
    highlights: [
      "Thermal insulation — reduces heat transfer through glazing",
      "Solar control — reduces solar heat gain in summer",
      "UV protection — protects furniture, flooring and artwork",
      "Natural daylight — high visible light transmission",
      "Energy savings — reduced heating and cooling costs",
      "Enhanced comfort — fewer hot or cold spots near windows",
    ],
    applications: [
      "Single glazing",
      "Laminated glass",
      "Toughened glass",
      "Insulated glass units (IGUs)",
      "Retrofit glazing upgrades",
    ],
  },
  {
    id: "evantage",
    letter: "B",
    name: "Evantage — Reflective Low‑E",
    tagline: "Pyrolytic coating with subtle reflectivity & glare control",
    icon: Sparkles,
    intro: [
      "Evantage is a high‑performance reflective Low‑E coated glass designed to deliver thermal insulation, solar control and glare reduction. It is manufactured using a pyrolytic Low‑E coating process — producing a durable coating that combines solar and thermal performance with subtle reflectivity.",
      "Evantage helps keep spaces cooler in summer and warmer in winter while also offering improved daytime privacy and an attractive reflective appearance. It can be used in single glazed applications, laminated units, IGUs and combined laminated/insulated systems.",
    ],
    highlights: [
      "Improved thermal insulation and solar control",
      "Reduced glare and UV transmission",
      "Subtle reflective appearance",
      "Good visible light transmission",
      "Improved daytime privacy",
      "Durable pyrolytic coating",
    ],
    applications: [
      "Apartments & residential homes",
      "Office buildings & commercial facades",
      "Hotels & hospitality",
      "Healthcare & retirement facilities",
      "Institutional buildings & shopfronts",
    ],
  },
  {
    id: "luxeco",
    letter: "C",
    name: "Luxeco (Soft Coat Low‑E)",
    tagline: "Premium IGU performance with maximum daylight",
    icon: Layers,
    intro: [
      "Luxeco insulating glass units are designed to provide high levels of energy efficiency while maximising natural daylight and indoor comfort. Modern building design increasingly incorporates larger glazed areas — Luxeco is built to support these trends while maintaining strong thermal insulation performance.",
      "Luxeco combines natural daylight transmission, thermal insulation and solar control performance, making it suitable for low energy and passive housing applications. Triple glazed configurations can achieve approximately 74% visible light transmission.",
    ],
    highlights: [
      "Energy efficient double & triple glazing",
      "Excellent visible light transmission (~74% triple glazed)",
      "Reduced disruptive reflections",
      "Year‑round indoor comfort",
      "Supports larger glazed areas",
      "Suitable for passive housing",
    ],
    applications: [
      "Low energy & passive houses",
      "Large glazed residential designs",
      "Modern apartments",
      "Sustainable commercial projects",
    ],
  },
];

const bestApplications = [
  "Residential homes and sliding doors",
  "Apartment developments",
  "Commercial facades and shopfronts",
  "Office buildings and schools",
  "Healthcare facilities and hotels",
  "Sustainable building and retrofit projects",
];

const faqs = [
  {
    q: "Is energy efficient glass only for new buildings?",
    a: "No. It can be used in new construction, renovations and selected replacement glazing projects, subject to frame compatibility and project requirements.",
  },
  {
    q: "Does Low‑E glass look different from clear glass?",
    a: "Some Low‑E products have a very neutral appearance, while others may have subtle tones or reflectivity depending on performance requirements.",
  },
  {
    q: "Can energy efficient glass also be safety glass?",
    a: "Yes. Energy efficient performance can often be combined with laminated or toughened safety glass depending on the application.",
  },
  {
    q: "Can Low‑E glass reduce UV damage?",
    a: "Yes. Many Low‑E products reduce UV transmission and help protect furnishings, flooring and interior finishes from fading.",
  },
  {
    q: "Is Evantage suitable for single glazing?",
    a: "Yes. Evantage is designed as a high‑performance single glazing Low‑E solution, while also being compatible with laminated and insulated glass units.",
  },
];

function EnergyGlassPage() {
  const [activeId, setActiveId] = useState<Variant["id"]>("lowe");
  const active = variants.find((v) => v.id === activeId)!;

  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: BODY_FONT }}>
      <Header />

      {/* HERO */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Energy efficient glass facade"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-end px-6 pb-12">
          <Eyebrow light>PRODUCT — ENERGY EFFICIENCY</Eyebrow>
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
            Low‑E & Energy
            <br />
            <span style={{ color: ACCENT }}>Efficient Glass</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
            Improve thermal insulation, solar control and indoor comfort with high-performance
            Low‑E and insulated glass solutions.
          </p>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="w-full bg-neutral-50 py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <Eyebrow>KEY BENEFITS</Eyebrow>
              <SectionHeading>
                Why choose <span style={{ color: ACCENT }}>this glass</span>
              </SectionHeading>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {keyBenefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4"
                    style={{ fontSize: "14px", lineHeight: 1.6 }}
                  >
                    <span
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: ACCENT }}
                    >
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-neutral-800">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-[920px] px-6 text-center">
          <Eyebrow centered>OVERVIEW</Eyebrow>
          <div className="mt-6 space-y-5 text-neutral-700" style={{ fontSize: "16px", lineHeight: 1.8 }}>
            <p>
              Energy efficient glass helps Australian homes and commercial buildings stay more
              comfortable while reducing reliance on heating and cooling. The right glazing choice
              can make a noticeable difference to thermal performance, indoor comfort, UV
              protection and long‑term operating costs.
            </p>
            <p>
              GlassCo Australia supplies glass solutions that support modern building requirements,
              from Low‑E coated glass through to insulated glass units and customised combinations
              for residential and commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* SUB-CATEGORIES — A / B / C */}
      <section className="w-full bg-neutral-50 py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow centered>SUB‑CATEGORIES</Eyebrow>
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
              Three energy efficient <span style={{ color: ACCENT }}>glass families</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-neutral-600" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              Explore our three core energy efficient glass categories. Each is engineered for a
              different balance of insulation, solar control and aesthetics.
            </p>
          </div>

          {/* Variant selector cards */}
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {variants.map((v) => {
              const isActive = v.id === activeId;
              const Icon = v.icon;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActiveId(v.id)}
                  className={`group relative overflow-hidden rounded-xl border p-6 text-left transition-all ${
                    isActive
                      ? "border-transparent bg-white text-neutral-900 shadow-xl ring-1 ring-neutral-200"
                      : "border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{
                        background: isActive ? ACCENT : "#0a0a0a",
                        fontFamily: HEAD_FONT,
                      }}
                    >
                      {v.letter}
                    </span>
                    <Icon
                      className="h-5 w-5"
                      style={{ color: isActive ? ACCENT : "#9ca3af" }}
                    />
                  </div>
                  <div
                    className="mt-5"
                    style={{ fontFamily: HEAD_FONT, fontSize: "20px", fontWeight: 700, lineHeight: 1.2 }}
                  >
                    {v.name}
                  </div>
                  <div className="mt-2 text-sm text-neutral-600" style={{ lineHeight: 1.5 }}>
                    {v.tagline}
                  </div>
                  {isActive && (
                    <span
                      className="absolute inset-x-0 bottom-0 block h-1"
                      style={{ background: ACCENT }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active variant detail */}
          <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-8 text-neutral-900 shadow-sm md:p-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold tracking-wider"
                    style={{ background: ACCENT, color: "#fff", fontFamily: HEAD_FONT, letterSpacing: "0.1em" }}
                  >
                    OPTION {active.letter}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-500">
                    {active.tagline}
                  </span>
                </div>
                <h3
                  className="mt-4"
                  style={{
                    fontFamily: HEAD_FONT,
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: "#0a0a0a",
                    margin: 0,
                  }}
                >
                  {active.name}
                </h3>
                <div className="mt-5 space-y-4 text-neutral-700" style={{ fontSize: "15px", lineHeight: 1.8 }}>
                  {active.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl bg-neutral-50 p-6">
                  <div
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: ACCENT, fontFamily: HEAD_FONT, letterSpacing: "0.15em" }}
                  >
                    Key Highlights
                  </div>
                  <ul className="mt-4 space-y-3">
                    {active.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-neutral-700"
                        style={{ fontSize: "14px", lineHeight: 1.6 }}
                      >
                        <span
                          className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: ACCENT }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {active.applications && (
                  <div className="mt-4 rounded-xl border border-neutral-200 p-6">
                    <div
                      className="text-xs font-bold uppercase tracking-wider text-neutral-900"
                      style={{ fontFamily: HEAD_FONT, letterSpacing: "0.15em" }}
                    >
                      Best Applications
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.applications.map((a) => (
                        <span
                          key={a}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST APPLICATIONS */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="mb-6 flex items-center gap-4">
            <span className="block h-px w-10" style={{ backgroundColor: ACCENT }} />
            <h2
              style={{
                fontFamily: HEAD_FONT,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Best applications for energy efficient glass
            </h2>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {bestApplications.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-neutral-700"
                style={{ fontSize: "14px", lineHeight: 1.7 }}
              >
                <span
                  className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: ACCENT }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full bg-neutral-50 py-20">
        <div className="mx-auto max-w-[920px] px-6">
          <div className="text-center">
            <Eyebrow centered>FAQS</Eyebrow>
            <h2
              className="mt-2"
              style={{
                fontFamily: HEAD_FONT,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Frequently Asked <span style={{ color: ACCENT }}>Questions</span>
            </h2>
          </div>
          <div className="mt-12 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-lg border border-neutral-200 bg-white p-6">
                <h3
                  className="text-neutral-900"
                  style={{ fontFamily: HEAD_FONT, fontSize: "18px", fontWeight: 600 }}
                >
                  {f.q}
                </h3>
                <p className="mt-2 text-neutral-700" style={{ fontSize: "14px", lineHeight: 1.7 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
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
            Talk to our glass specialists
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Get tailored advice on the right Low‑E or insulated glass solution for your project.
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

function Eyebrow({
  children,
  centered,
  light,
}: {
  children: React.ReactNode;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
      <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
      <span
        style={{
          fontFamily: HEAD_FONT,
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: light ? "#7DD3DC" : ACCENT,
        }}
      >
        {children}
      </span>
      {centered && (
        <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
      )}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </h2>
  );
}
