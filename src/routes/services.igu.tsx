import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  Droplets,
  Search,
  Frame,
  Wind,
  Wrench,
  ShieldCheck,
  Home,
  Volume2,
  Thermometer,
  Sun,
  FlaskConical,
  Move3d,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/service-igu.jpg";
import lisecLine from "@/assets/lisec-igu-line.png";
import imgWashing from "@/assets/igu-washing-machine.jpg";
import imgInspecting from "@/assets/igu-inspecting-station.jpg";
import imgSpacer from "@/assets/igu-spacer-bending.jpg";
import imgDesiccant from "@/assets/igu-desiccant-filling.jpg";
import imgFrame from "@/assets/igu-frame-mounting.jpg";
import imgGasPress from "@/assets/igu-gas-filling-press.jpg";
import imgSealing from "@/assets/igu-sealing-machine.jpg";

const ACCENT = "#009AAA";
const HEAD_FONT = "Rajdhani, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

export const Route = createFileRoute("/services/igu")({
  head: () => ({
    meta: [
      { title: "Insulating Glass Units (IGU) | GlassCo Australia" },
      {
        name: "description",
        content:
          "Fully automated LISEC IGU production line with Argon gas filling and structural silicone sealing for premium insulating glass units.",
      },
      { property: "og:title", content: "Insulating Glass Units (IGU) | GlassCo Australia" },
      {
        property: "og:description",
        content:
          "State-of-the-art LISEC IGU line — automated sealing, Argon gas fill, premium thermal & acoustic performance.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: IGUPage,
});

const technicalData: { label: string; value: string }[] = [
  { label: "Unit Thickness", value: "12–60 mm" },
  { label: "Glass Thickness", value: "3–13 mm" },
  { label: "Minimum Size", value: "350 × 180 mm (smaller with hand sealing)" },
  { label: "Maximum Size", value: "3500 × 2500 mm" },
  { label: "Transport Speed", value: "4–30 m/min" },
  { label: "Transport Height", value: "520 mm" },
  { label: "Inclination for Glass Transport", value: "6°" },
  { label: "Maximum Load", value: "150 kg/lm" },
  { label: "Support", value: "Yes" },
];

const components = [
  {
    icon: Droplets,
    image: imgWashing,
    label: "Washing Machine",
    body: "Vertical glass washing line removes dust, fingerprints and residue. Brushes and de-ionised water deliver a contaminant-free surface — essential before sealing.",
  },
  {
    icon: Search,
    image: imgInspecting,
    label: "Inspecting Station",
    body: "High-intensity backlight inspection catches scratches, edge chips, coating defects and visual flaws before the unit moves into assembly.",
  },
  {
    icon: Move3d,
    image: imgSpacer,
    label: "Spacer Bending Machine",
    body: "Automated bending of aluminium or warm-edge spacer bars to the exact unit geometry — including rectangular, shaped and stepped IGUs.",
  },
  {
    icon: FlaskConical,
    image: imgDesiccant,
    label: "Desiccant Filling Machine",
    body: "Precisely fills bent spacer frames with molecular-sieve desiccant to absorb residual moisture inside the cavity, preventing internal fogging over the unit's life.",
  },
  {
    icon: Frame,
    image: imgFrame,
    label: "Frame Mounting Station",
    body: "Spacer frame is butyl-coated and accurately positioned on the first glass lite — locking in the cavity depth and a primary moisture seal.",
  },
  {
    icon: Wind,
    image: imgGasPress,
    label: "Gas-Filling Press",
    body: "Argon (or Krypton) gas is injected as the lites are pressed together inside the LISEC press, replacing air in the cavity for superior U-values.",
  },
  {
    icon: Wrench,
    image: imgSealing,
    label: "Automatic Sealing Machine",
    body: "Two-component structural silicone or polysulphide is robotically extruded around the perimeter to form the secondary seal and lock the unit together for life.",
  },
];

const benefits = [
  {
    icon: Thermometer,
    title: "Lower Energy Costs",
    body: "Reduce heating and cooling loads year-round, lowering energy bills while keeping interiors comfortable.",
  },
  {
    icon: Home,
    title: "Improved Comfort",
    body: "Warmer interior glass surfaces in winter and reduced solar heat gain in summer create a more comfortable environment.",
  },
  {
    icon: Volume2,
    title: "Sound Reduction",
    body: "Insulated units are highly effective at reducing unwanted noise transmission from outside.",
  },
  {
    icon: Sun,
    title: "UV & Fade Protection",
    body: "Specialised glass and coatings limit UV transmission, protecting carpet, furniture, artwork and timber from fading.",
  },
];

function IGUPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: BODY_FONT }}>
      <Header />

      {/* HERO */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="LISEC insulating glass unit production line"
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
            Insulating Glass
            <br />
            <span style={{ color: ACCENT }}>Units (IGU)</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
            Fully automated LISEC IGU line with structural silicone sealing and Argon gas fill —
            engineered for premium thermal and acoustic performance.
          </p>
        </div>
      </section>

      {/* OVERVIEW — WhoWeAre style */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div
                className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2"
                style={{ borderColor: ACCENT }}
              />
              <img
                src={lisecLine}
                alt="LISEC fully automated IGU manufacturing line"
                loading="lazy"
                width={1280}
                height={896}
                className="h-auto w-full rounded-lg object-contain shadow-lg transition-transform duration-700 ease-out hover:scale-105"
                style={{ background: "#f5f5f5" }}
              />
              <div
                className="absolute -bottom-6 -right-6 rounded-lg px-8 py-5 text-center text-white shadow-xl"
                style={{ backgroundColor: ACCENT, fontFamily: HEAD_FONT }}
              >
                <div className="text-4xl font-bold leading-none">LISEC</div>
                <div className="mt-1 text-sm font-medium">State-of-the-Art</div>
              </div>
            </div>

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
                Fully automated
                <br />
                <span style={{ color: ACCENT }}>LISEC</span> IGU line
              </h2>
              <div
                className="mt-6 space-y-4 text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                <p>
                  GlassCo Australia takes pride in having the latest state-of-the-art IGU line
                  series from LISEC. The fully automated manufacturing line features an automatic
                  sealing robot using only high-quality structural silicone.
                </p>
                <p>
                  Argon gas is added to all units, significantly increasing the thermal
                  performance of every insulating glass unit produced at GlassCo Australia.
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
                "Premium IGUs — sealed for performance, filled for efficiency."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
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
                COMPONENTS
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
              Line <span style={{ color: ACCENT }}>configuration</span>
            </h2>
          </div>
          <p
            className="mx-auto mt-6 max-w-2xl text-center text-neutral-600"
            style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.75 }}
          >
            Every IGU on our LISEC line passes through a sequence of dedicated stations. Each
            machine has a specific role in producing a hermetically sealed, gas-filled unit.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {components.map(({ icon: Icon, image, label, body }, idx) => (
              <div
                key={label}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
              >
                <div className="relative h-44 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={image}
                    alt={label}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="relative flex flex-1 flex-col p-6">
                  <span
                    className="absolute right-5 top-5 text-xs font-bold tracking-wider text-neutral-300"
                    style={{ fontFamily: HEAD_FONT }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: `${ACCENT}15` }}
                  >
                    <Icon className="h-7 w-7" style={{ color: ACCENT }} />
                  </span>
                  <h3
                    className="mt-5 text-neutral-900"
                    style={{ fontFamily: HEAD_FONT, fontSize: "20px", fontWeight: 700, lineHeight: 1.2 }}
                  >
                    {label}
                  </h3>

                  <p
                    className="mt-4 text-neutral-600"
                    style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.7 }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA — GlassTypes style */}
      <section className="w-full bg-white py-24">
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
                IGU line <span style={{ color: ACCENT }}>specifications</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <p
                className="text-neutral-600 lg:text-right"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                Performance figures for our LISEC insulating glass unit production line. All units
                are manufactured to international IGU standards.
              </p>
            </div>
          </div>

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
                      IGU LINE SPECIFICATION
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

      {/* BENEFITS */}
      <section className="w-full bg-neutral-50 py-24">
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
                BENEFITS
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
              Why insulated <span style={{ color: ACCENT }}>matters</span>
            </h2>
            <p
              className="mt-5 text-neutral-600"
              style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.75 }}
            >
              Insulated window and door products lower energy costs and make rooms cosier by
              improving comfort, decreasing condensation, reducing fading and cutting unwanted
              sound transmission.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {benefits.map(({ icon: Icon, title, body }) => (
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

          {/* Long-form detail */}
          <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{ background: `${ACCENT}15` }}
            >
              <ShieldCheck className="h-6 w-6" style={{ color: ACCENT }} strokeWidth={1.75} />
            </span>
            <h3
              className="mt-5"
              style={{
                fontFamily: HEAD_FONT,
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Year-round <span style={{ color: ACCENT }}>performance</span>
            </h3>

            <div
              className="mt-5 grid grid-cols-1 gap-x-10 gap-y-4 text-neutral-600 md:grid-cols-2"
              style={{ fontFamily: BODY_FONT, fontSize: "14.5px", lineHeight: 1.7 }}
            >
              <p>
                In summer, heat is transmitted through standard glass and absorbed by walls,
                furniture and floors. Window and door products with a low solar heat gain
                coefficient reduce incoming solar radiation, improving comfort and lowering the
                energy needed for cooling during warm months.
              </p>
              <p>
                During cooler seasons, insulated products create warmer interior glass surfaces,
                reducing frost and condensation from forming on the glass.
              </p>
              <p className="md:col-span-2">
                Many materials — carpet, curtains, upholstery, artwork and timber — fade upon
                exposure to sunlight. Window glass selection influences the type and intensity of
                ultraviolet (UV) rays reaching the interior, which is the primary cause of fading
                and material degradation.
              </p>
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
            Need insulated glass units for your project?
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-white/85"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            Talk to our processing team about IGUs tailored to your thermal, acoustic and
            architectural specification.
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
