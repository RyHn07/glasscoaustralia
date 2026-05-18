import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Layers, Plus, Sparkles, Sun, Home, Building2, Store, GraduationCap, Hotel, Leaf } from "lucide-react";
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

type DetailSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Variant = {
  id: "lowe" | "evantage" | "luxeco";
  letter: "A" | "B" | "C";
  name: string;
  tagline: string;
  icon: typeof Layers;
  intro: string[];
  highlights: string[];
  applications?: string[];
  applicationsNote?: string;
  details?: DetailSection[];
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
    details: [
      {
        heading: "Coating layers & insulation",
        paragraphs: [
          "Low‑E coatings consist of a sequence of almost invisible material layers applied to the glass surface. These layers reflect long‑wave heat (radiated from interior heating and from the sun) while still allowing visible light to transmit through.",
          "By reducing radiative heat transfer through the window, Low‑E glass improves the thermal envelope of a building. The result is a lower U‑Value, which means less heat escaping in winter and less heat entering in summer.",
        ],
      },
      {
        heading: "Solar control performance",
        paragraphs: [
          "Low‑E glass reflects a significant portion of incoming solar energy, reducing solar heat gain on exposed elevations. This helps reduce reliance on air conditioning during summer and contributes to more stable indoor temperatures throughout the day.",
        ],
      },
      {
        heading: "Finish & format options",
        paragraphs: [
          "Low‑E glass is available in monolithic, laminated and toughened formats, and can be incorporated into insulated glass units (IGUs). Toughened options achieve Grade A safety glass compliance, and laminated options can also reduce UV transmission by up to 99%.",
        ],
      },
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
    details: [
      {
        heading: "Processing & fabrication",
        bullets: [
          "Annealed — for standard glazing applications",
          "Toughened — for Grade A safety and increased strength",
          "Laminated — for safety, security and acoustic performance",
          "Insulated glass units (IGUs) — for higher thermal performance",
          "Combined laminated/insulated configurations",
        ],
      },
      {
        heading: "Installation considerations",
        paragraphs: [
          "Evantage is a coated product and the coating face is important for performance and durability. The pyrolytic coating is typically installed on surface #2 (the inner face of the outer pane) in IGUs to maximise thermal benefit and protect the coating.",
          "As with all coated reflective glass, attention must be paid to potential haze, thermal stress and edge conditions. Installation should follow manufacturer guidelines and any relevant council or building authority regulations regarding reflectivity on building facades.",
        ],
      },
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
    applicationsNote:
      "Especially beneficial where large glazed areas, high daylight transmission and strong thermal performance are all required at the same time.",
    details: [
      {
        heading: "Energy efficiency",
        paragraphs: [
          "Luxeco delivers strong thermal performance by combining a soft coat Low‑E coating with insulating glass unit construction. This reduces heat transfer through the glazing and lowers the building's heating and cooling demand year‑round.",
        ],
      },
      {
        heading: "High performance double & triple glazing",
        paragraphs: [
          "Luxeco is engineered for both double and triple glazed insulating glass units. Triple glazed configurations further improve thermal insulation, making Luxeco particularly suited to low energy and passive housing projects.",
        ],
      },
      {
        heading: "Excellent light transmission",
        paragraphs: [
          "Even in triple glazed configurations, Luxeco maintains approximately 74% visible light transmission — supporting bright, naturally lit interiors without compromising thermal performance.",
        ],
      },
      {
        heading: "Reduced reflection",
        paragraphs: [
          "Luxeco minimises disruptive interior and exterior reflections, helping the glazing read as a clear, neutral surface rather than a mirrored facade.",
        ],
      },
      {
        heading: "Year‑round comfort",
        paragraphs: [
          "By balancing solar control, thermal insulation and daylight transmission, Luxeco helps maintain stable, comfortable indoor temperatures across all seasons.",
        ],
      },
      {
        heading: "Supports modern design",
        paragraphs: [
          "Luxeco is designed to support contemporary architectural trends — larger glazed areas, expansive openings and open‑plan interiors — while still delivering the thermal performance modern buildings require.",
        ],
      },
    ],
  },
];

const bestApplications = [
  { label: "Residential homes and sliding doors", icon: Home },
  { label: "Apartment developments", icon: Building2 },
  { label: "Commercial facades and shopfronts", icon: Store },
  { label: "Office buildings and schools", icon: GraduationCap },
  { label: "Healthcare facilities and hotels", icon: Hotel },
  { label: "Sustainable building and retrofit projects", icon: Leaf },
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
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, "");
    if (!hash) return;
    if (variants.some((v) => v.id === hash)) {
      setActiveId(hash as Variant["id"]);
    }
    const el = document.getElementById("sub-categories");
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [location.hash]);

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
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 py-12">
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
                    className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
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
        <div className="mx-auto max-w-[1280px] px-6">
          <Eyebrow>OVERVIEW</Eyebrow>
          <SectionHeading>
            Smarter glazing for <span style={{ color: ACCENT }}>modern buildings</span>
          </SectionHeading>
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
      <section id="sub-categories" className="w-full bg-neutral-50 py-24 scroll-mt-24">
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

                {active.details && active.details.length > 0 && (
                  <div className="mt-8 space-y-6 border-t border-neutral-200 pt-8">
                    {active.details.map((d) => (
                      <div key={d.heading}>
                        <h4
                          className="text-neutral-900"
                          style={{
                            fontFamily: HEAD_FONT,
                            fontSize: "17px",
                            fontWeight: 700,
                            letterSpacing: "0.01em",
                          }}
                        >
                          {d.heading}
                        </h4>
                        {d.paragraphs && (
                          <div
                            className="mt-2 space-y-3 text-neutral-700"
                            style={{ fontSize: "15px", lineHeight: 1.8 }}
                          >
                            {d.paragraphs.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>
                        )}
                        {d.bullets && (
                          <ul className="mt-3 space-y-2">
                            {d.bullets.map((b) => (
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
                        )}
                      </div>
                    ))}
                  </div>
                )}
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
                    {active.applicationsNote && (
                      <p className="mt-4 text-neutral-600" style={{ fontSize: "13px", lineHeight: 1.7 }}>
                        {active.applicationsNote}
                      </p>
                    )}
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
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
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
            Talk to our glass specialists
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Get tailored advice on the right Low‑E or insulated glass solution for your project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="rounded-md px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "#ffffff", color: ACCENT, fontFamily: HEAD_FONT, letterSpacing: "0.05em" }}
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

function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-neutral-50"
      >
        <span
          className="text-neutral-900"
          style={{ fontFamily: HEAD_FONT, fontSize: "18px", fontWeight: 600, letterSpacing: "0.01em" }}
        >
          {q}
        </span>
        <Plus
          className="h-5 w-5 flex-shrink-0 transition-transform duration-300"
          style={{ color: ACCENT, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <p
          className="px-6 pb-6 text-neutral-700"
          style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.7 }}
        >
          {a}
        </p>
      )}
    </div>
  );
}
