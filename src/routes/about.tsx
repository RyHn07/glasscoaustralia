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

const ACCENT = "#009AAA";
const HEAD_FONT = "Rajdhani, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

const equipment = [
  "Automatic Float Cutting Line",
  "CNC Machining Centres",
  "Water Jet Cutting Machines",
  "Advanced NorthGlass Toughening Furnace",
  "LISEC Insulated Glass Unit (IGU) Production Lines",
  "Dip-Tech GP/GPi Digital Ceramic Printing Systems",
];

const values = [
  {
    title: "Relationships",
    body: "We value strong, respectful, and long-term relationships with our employees, customers, suppliers and stakeholders. We believe in professionalism, honesty and open communication, and we treat others with fairness, courtesy and respect at all times. We encourage collaboration and believe everyone deserves the opportunity to be heard in a constructive and supportive environment.",
  },
  {
    title: "People",
    body: "Our people are at the center of our business. We encourage personal and professional growth by supporting learning, skill development and career progression. We recognise initiative, reward effort and provide opportunities for individuals to develop within a strong team environment.",
  },
  {
    title: "Innovation",
    body: "Innovation is an important part of our continued growth. We are committed to improving our products, services and manufacturing capabilities to remain at the forefront of glass technology and deliver greater value to our customers.",
  },
  {
    title: "Future",
    body: "Together with our employees, customers and suppliers, we are building a strong and sustainable future. Our goal is to continue growing as a reliable and respected Australian glass supplier while maintaining our commitment to quality, service and long-term partnerships.",
  },
];

const environmental = [
  "Comply with all relevant environmental legislation and applicable ISO 14001 environmental management requirements",
  "Identify activities that may impact the environment",
  "Implement appropriate control measures to minimise environmental impact",
  "Establish meaningful environmental objectives and monitor performance for continuous improvement",
  "Promote sustainable resource use through reducing, reusing and recycling wherever practical",
  "Utilise environmentally responsible products and processes where possible",
  "Provide employees with appropriate environmental training, awareness and instruction",
  "Continuously improve our environmental management systems and operational practices",
];

function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: BODY_FONT }}>
      <Header />

      {/* HERO */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Modern architectural glass facade"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-end px-6 pb-12">
          <Eyebrow light>COMPANY PROFILE</Eyebrow>
          <h1
            className="mt-5"
            style={{
              fontFamily: HEAD_FONT,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
              margin: 0,
            }}
          >
            GlassCo
            <br />
            <span style={{ color: ACCENT }}>Australia</span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
            style={{ fontFamily: BODY_FONT }}
          >
            Trusted supplier of glass and value-added glass products based in
            Melbourne, Victoria — servicing residential, commercial and architectural
            projects across Australia.
          </p>
        </div>
      </section>

      {/* OUR COMPANY */}
      <SplitSection
        eyebrow="OUR COMPANY"
        image={teamImg}
        imageAlt="GlassCo team collaborating"
        heading={
          <>
            Trusted Glass <span style={{ color: ACCENT }}>Partner</span>
            <br />
            Across Australia
          </>
        }
      >
        <p>
          GlassCo Australia is a trusted supplier of glass and value-added glass
          products, supporting builders, glaziers, architects, fabricators and
          property owners with reliable glass solutions and industry expertise.
        </p>
        <p>
          As a growing and progressive company, we operate across multiple areas of
          the glass industry including manufacturing, importing and wholesale
          distribution. Our scale and industry relationships allow us to source,
          process and supply a broad range of high-quality glass products at
          competitive prices.
        </p>
        <p>
          We are highly experienced in supplying the commercial glazing sector and
          understand the importance of compliance, consistency and dependable
          supply. Our products are manufactured and processed to meet relevant
          Australian Standards, giving customers confidence in both quality and
          performance.
        </p>
      </SplitSection>

      {/* DIGITAL CERAMIC PRINTING */}
      <SplitSection
        eyebrow="CERAMIC PRINTING"
        image={printingImg}
        imageAlt="Detailed ceramic printed glass"
        reverse
        heading={
          <>
            Precision <span style={{ color: ACCENT }}>Printed</span>
            <br />
            Glass, Built To Last
          </>
        }
      >
        <p>
          Using industrial-grade Dip-Tech GP/GPi digital ceramic printing systems,
          we produce durable, high-resolution ceramic printed glass solutions
          suitable for both interior and exterior environments.
        </p>
        <p>
          Our digital printing capabilities combine precision engineering,
          large-format production and exceptional design flexibility, allowing
          architects, designers and builders to achieve customised glazing
          solutions with outstanding durability and visual impact.
        </p>
      </SplitSection>

      {/* MANUFACTURING CAPABILITY */}
      <section className="w-full bg-neutral-50 py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Eyebrow>MANUFACTURING CAPABILITY</Eyebrow>
              <SectionHeading>
                Advanced <span style={{ color: ACCENT }}>Processing</span>
                <br />
                Equipment
              </SectionHeading>
            </div>
            <div className="lg:col-span-7">
              <p
                className="text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                The glass industry continues to evolve through innovation, technology
                and changing architectural requirements. At GlassCo Australia, we
                believe it is essential to stay ahead of industry developments through
                continuous research, product development and investment in modern
                processing capabilities.
              </p>
              <p
                className="mt-4 text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                Our focus is to introduce customers to the latest advancements in
                glass design, performance and technology while continuing to deliver
                dependable service and practical glazing solutions. To support
                precision manufacturing and efficient production, we utilise advanced
                processing equipment including:
              </p>
            </div>
          </div>

          <div className="relative mt-12">
            <div
              className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2"
              style={{ borderColor: ACCENT }}
            />
            <img
              src={manufacturingImg}
              alt="Advanced glass manufacturing facility"
              width={1280}
              height={896}
              loading="lazy"
              className="h-[420px] w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-white p-5"
              >
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: ACCENT, fontFamily: HEAD_FONT }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-sm text-neutral-800"
                  style={{ fontFamily: BODY_FONT, fontWeight: 500 }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p
            className="mt-10 text-neutral-700"
            style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7, fontWeight: 500 }}
          >
            Above all, we are committed to supplying products that meet the highest
            standards of quality, reliability and value.
          </p>
        </div>
      </section>

      {/* VISION & VALUES */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-2xl">
            <Eyebrow>OUR VISION & VALUES</Eyebrow>
            <SectionHeading>
              What We <span style={{ color: ACCENT }}>Stand</span> For
            </SectionHeading>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group rounded-lg border border-neutral-200 bg-white p-7 transition-shadow hover:shadow-lg"
              >
                <div
                  className="text-xs font-bold tracking-[0.2em]"
                  style={{ fontFamily: HEAD_FONT, color: ACCENT }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="mt-3 text-3xl font-bold text-neutral-900"
                  style={{ fontFamily: HEAD_FONT, lineHeight: 1.1 }}
                >
                  {v.title}
                </h3>
                <div
                  className="mt-4 h-[2px] w-10 transition-all group-hover:w-16"
                  style={{ background: ACCENT }}
                />
                <p
                  className="mt-5 text-neutral-600"
                  style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.7 }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="w-full bg-neutral-50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex justify-center">
            <Eyebrow>OUR COMMITMENT</Eyebrow>
          </div>
          <div className="[&>h2]:text-center">
            <SectionHeading>
              Quality You <span style={{ color: ACCENT }}>Can</span>
              <br />
              Rely On
            </SectionHeading>
          </div>

          <div
            className="mx-auto mt-10 max-w-2xl italic text-neutral-700"
            style={{
              fontFamily: BODY_FONT,
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            "GlassCo Australia is committed to delivering quality products that
            customers can rely on with confidence."
          </div>
          <div
            className="mx-auto mt-6 h-[2px] w-12"
            style={{ background: ACCENT }}
          />
          <p
            className="mt-8 text-neutral-600"
            style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
          >
            All products are manufactured and processed to meet relevant
            Australian Standards, with stringent quality control procedures in
            place to maintain consistency and performance across our range.
          </p>
          <p
            className="mt-4 text-neutral-600"
            style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
          >
            Our ongoing investment in research and development allows us to
            continually expand and improve our product offering, ensuring we
            provide practical, innovative and high-performing glass solutions
            for modern building requirements.
          </p>
          <p
            className="mt-4 text-neutral-600"
            style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
          >
            We appreciate you taking the time to learn more about GlassCo
            Australia and welcome the opportunity to work with you.
          </p>
        </div>
      </section>

      {/* ENVIRONMENTAL */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          {/* Top row: title left, intro right */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Eyebrow>ENVIRONMENTAL POLICY</Eyebrow>
              <SectionHeading>
                Responsible <span style={{ color: ACCENT }}>By</span>
                <br />
                Design
              </SectionHeading>
            </div>
            <div className="lg:col-span-7">
              <p
                className="text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                GlassCo Australia is committed to environmentally responsible
                business practices and sustainable resource management.
              </p>
              <p
                className="mt-4 text-neutral-600"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
              >
                We aim to minimise environmental impact through responsible
                operations, continuous improvement and compliance with applicable
                environmental standards and regulations.
              </p>
            </div>
          </div>

          {/* Middle row: image left, commitments right */}
          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div
                className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2"
                style={{ borderColor: ACCENT }}
              />
              <img
                src={environmentImg}
                alt="Lush Australian forest"
                width={1280}
                height={896}
                loading="lazy"
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            </div>
            <div>
              <h3
                className="text-2xl font-semibold text-neutral-900"
                style={{ fontFamily: HEAD_FONT, letterSpacing: "0.02em" }}
              >
                Our Environmental Commitment
              </h3>
              <ul className="mt-6 space-y-3">
                {environmental.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-700"
                    style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.7 }}
                  >
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

          {/* Bottom: full width closing paragraph */}
          <p
            className="mt-16 text-neutral-700"
            style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
          >
            All GlassCo Australia personnel are expected to perform their work
            responsibly and contribute to maintaining environmentally conscious
            workplace practices. We remain committed to protecting the environment
            while supporting the long-term sustainability of our business, our
            customers and the wider community.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------- shared style helpers (mirrors WhoWeAre) ---------- */

function Eyebrow({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span
        className="block"
        style={{ width: "32px", height: "1px", backgroundColor: ACCENT }}
      />
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
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </h2>
  );
}

function SplitSection({
  eyebrow,
  heading,
  image,
  imageAlt,
  children,
  reverse,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className={`w-full py-24 ${reverse ? "bg-neutral-50" : "bg-white"}`}>
      <div className="mx-auto max-w-[1280px] px-6">
        <div
          className={`grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative">
            <div
              className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2"
              style={{ borderColor: ACCENT }}
            />
            <img
              src={image}
              alt={imageAlt}
              width={1280}
              height={896}
              loading="lazy"
              className="h-auto w-full rounded-lg object-cover shadow-lg"
            />
          </div>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <SectionHeading>{heading}</SectionHeading>
            <div
              className="mt-6 space-y-4 text-neutral-600"
              style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
