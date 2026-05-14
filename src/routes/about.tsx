import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/about-hero.jpg";
import manufacturingImg from "@/assets/about-manufacturing.jpg";
import teamImg from "@/assets/about-team.jpg";
import printingImg from "@/assets/about-printing.jpg";
import environmentImg from "@/assets/about-environment.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GlassCo Australia — Company Profile" },
      {
        name: "description",
        content:
          "Melbourne-based supplier of glass and value-added glass products serving residential, commercial and architectural projects across Australia.",
      },
      { property: "og:title", content: "About GlassCo Australia" },
      {
        property: "og:description",
        content:
          "Trusted Melbourne-based glass manufacturer, importer and wholesaler.",
      },
    ],
  }),
  component: AboutPage,
});

const ACCENT = "rgb(0, 154, 170)";
const HEAD_FONT = '"Rajdhani", sans-serif';
const BODY_FONT = '"Geist", "Geist Fallback", sans-serif';

const equipment = [
  "Automatic Float Cutting Line",
  "CNC Machining Centres",
  "Water Jet Cutting Machines",
  "NorthGlass Toughening Furnace",
  "LISEC IGU Production Lines",
  "Dip-Tech GP/GPi Ceramic Printing",
];

const values = [
  {
    title: "Relationships",
    body: "Long-term partnerships built on professionalism, honesty and respect.",
  },
  {
    title: "People",
    body: "Our team is the heart of the business — supported, recognised, and growing.",
  },
  {
    title: "Innovation",
    body: "Continuous investment in glass technology and manufacturing capability.",
  },
  {
    title: "Future",
    body: "Building a sustainable, reliable Australian glass supplier for generations.",
  },
];

const environmental = [
  "ISO 14001 aligned environmental management",
  "Continuous monitoring and improvement",
  "Reduce, reuse and recycle wherever practical",
  "Environmentally responsible products and processes",
  "Ongoing employee training and awareness",
  "Compliance with all environmental legislation",
];

function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: BODY_FONT }}>
      <Header />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Modern architectural glass facade"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 pb-16">
          <p
            className="mb-4 text-xs uppercase tracking-[0.3em] text-white/80"
            style={{ fontFamily: HEAD_FONT }}
          >
            Company Profile
          </p>
          <h1
            className="text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: HEAD_FONT }}
          >
            GlassCo
            <br />
            <span style={{ color: ACCENT }}>Australia</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
            Melbourne-based supplier of premium glass and value-added glass products,
            servicing projects across Australia.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { k: "Melbourne", v: "Headquartered in VIC" },
            { k: "AS Standards", v: "Certified to Australian" },
            { k: "End-to-End", v: "Manufacture · Import · Wholesale" },
            { k: "Industry-Grade", v: "Dip-Tech · LISEC · NorthGlass" },
          ].map((s) => (
            <div key={s.k}>
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: HEAD_FONT, color: ACCENT }}
              >
                {s.k}
              </div>
              <div className="mt-1 text-sm text-neutral-600">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR COMPANY — split */}
      <SplitSection
        eyebrow="Our Company"
        title="Trusted glass partner across Australia"
        image={teamImg}
        imageAlt="GlassCo team collaborating"
        reverse={false}
      >
        <p>
          GlassCo Australia supports builders, glaziers, architects, fabricators and
          property owners with reliable glass solutions and deep industry expertise.
        </p>
        <p>
          As a progressive, growing company, we operate across manufacturing, importing
          and wholesale distribution — sourcing and supplying high-quality glass at
          competitive prices.
        </p>
      </SplitSection>

      {/* PRINTING — split reversed */}
      <SplitSection
        eyebrow="Digital Ceramic Printing"
        title="Precision printed glass, built to last"
        image={printingImg}
        imageAlt="Detailed ceramic printed glass"
        reverse={true}
      >
        <p>
          Industrial-grade Dip-Tech GP/GPi systems produce durable, high-resolution
          ceramic printed glass for both interior and exterior environments.
        </p>
        <p>
          Large-format production and design flexibility let architects and designers
          achieve customised glazing with outstanding visual impact.
        </p>
      </SplitSection>

      {/* MANUFACTURING — image with equipment grid below */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="max-w-2xl">
            <Eyebrow>Manufacturing Capability</Eyebrow>
            <SectionTitle>Advanced processing equipment</SectionTitle>
            <p className="mt-4 text-neutral-600">
              We invest in modern processing capabilities to stay ahead of industry
              developments and deliver dependable, high-performing glass.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl">
            <img
              src={manufacturingImg}
              alt="Advanced glass manufacturing facility"
              width={1280}
              height={896}
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5"
              >
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ background: ACCENT, fontFamily: HEAD_FONT }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-neutral-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VISION & VALUES */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="max-w-2xl">
            <Eyebrow>Our Vision & Values</Eyebrow>
            <SectionTitle>What we stand for</SectionTitle>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div
                  className="text-xs font-semibold tracking-widest text-neutral-400"
                  style={{ fontFamily: HEAD_FONT }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="mt-3 text-2xl font-bold text-neutral-900"
                  style={{ fontFamily: HEAD_FONT }}
                >
                  {v.title}
                </h3>
                <div
                  className="mt-3 h-0.5 w-10 transition-all group-hover:w-16"
                  style={{ background: ACCENT }}
                />
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT — quote-style */}
      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-24 text-center">
          <Eyebrow center>Our Commitment</Eyebrow>
          <p
            className="mt-6 text-3xl font-medium leading-tight text-neutral-900 sm:text-4xl"
            style={{ fontFamily: HEAD_FONT }}
          >
            “Quality products our customers can rely on — manufactured to Australian
            Standards, backed by stringent quality control.”
          </p>
          <div className="mx-auto mt-8 h-0.5 w-16" style={{ background: ACCENT }} />
          <p className="mt-6 text-sm text-neutral-500">— GlassCo Australia</p>
        </div>
      </section>

      {/* ENVIRONMENTAL — split with image */}
      <section className="relative overflow-hidden bg-neutral-900 text-white">
        <div className="mx-auto grid max-w-[1400px] gap-0 lg:grid-cols-2">
          <div className="relative h-[320px] lg:h-auto">
            <img
              src={environmentImg}
              alt="Lush Australian forest"
              width={1280}
              height={896}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="px-6 py-16 lg:px-14 lg:py-20">
            <Eyebrow light>Environmental Policy</Eyebrow>
            <h2
              className="mt-3 text-3xl font-bold sm:text-4xl"
              style={{ fontFamily: HEAD_FONT }}
            >
              Responsible by design
            </h2>
            <p className="mt-5 max-w-xl text-white/75">
              Committed to sustainable resource management and minimising environmental
              impact through responsible operations and continuous improvement.
            </p>
            <ul className="mt-8 space-y-3">
              {environmental.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ background: ACCENT }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center">
          <h2
            className="text-3xl font-bold text-neutral-900 sm:text-4xl"
            style={{ fontFamily: HEAD_FONT }}
          >
            Let's build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Thank you for taking the time to learn more about GlassCo Australia. We
            welcome the opportunity to work with you.
          </p>
          <button
            className="mt-8 rounded-md bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: HEAD_FONT }}
          >
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Eyebrow({
  children,
  light,
  center,
}: {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.3em] ${
        light ? "text-white/60" : "text-neutral-500"
      } ${center ? "text-center" : ""}`}
      style={{ fontFamily: HEAD_FONT }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-3 text-3xl font-bold text-neutral-900 sm:text-4xl"
      style={{ fontFamily: HEAD_FONT }}
    >
      {children}
    </h2>
  );
}

function SplitSection({
  eyebrow,
  title,
  image,
  imageAlt,
  children,
  reverse,
  dark,
}: {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-neutral-950 text-white" : "bg-white"}>
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div
          className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <p
              className={`text-xs uppercase tracking-[0.3em] ${
                dark ? "text-white/60" : "text-neutral-500"
              }`}
              style={{ fontFamily: HEAD_FONT }}
            >
              {eyebrow}
            </p>
            <h2
              className={`mt-3 text-3xl font-bold sm:text-4xl ${
                dark ? "text-white" : "text-neutral-900"
              }`}
              style={{ fontFamily: HEAD_FONT }}
            >
              {title}
            </h2>
            <div className="mt-5 h-0.5 w-12" style={{ background: ACCENT }} />
            <div
              className={`mt-6 space-y-4 leading-relaxed ${
                dark ? "text-white/75" : "text-neutral-600"
              }`}
            >
              {children}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src={image}
              alt={imageAlt}
              width={1280}
              height={896}
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
