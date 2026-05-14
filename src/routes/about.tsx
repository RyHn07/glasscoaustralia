import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GlassCo Australia — Company Profile" },
      {
        name: "description",
        content:
          "GlassCo Australia is a Melbourne-based supplier of glass and value-added glass products serving residential, commercial and architectural projects across Australia.",
      },
      { property: "og:title", content: "About GlassCo Australia — Company Profile" },
      {
        property: "og:description",
        content:
          "Trusted Melbourne-based glass manufacturer, importer and wholesaler. Discover our vision, values, commitment and environmental policy.",
      },
    ],
  }),
  component: AboutPage,
});

const equipment = [
  "Automatic Float Cutting Line",
  "CNC Machining Centres",
  "Water Jet Cutting Machines",
  "Advanced NorthGlass toughening furnace",
  "LISEC Insulated Glass Unit (IGU) Production Lines",
  "Dip-Tech GP/GPi digital ceramic printing systems",
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

function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1100px] px-6 py-20 lg:py-28">
          <p
            className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            Company Profile
          </p>
          <h1
            className="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            GlassCo <span style={{ color: "rgb(0, 154, 170)" }}>Australia</span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg text-neutral-600"
            style={{ fontFamily: '"Geist", "Geist Fallback", sans-serif' }}
          >
            A trusted Melbourne-based supplier of glass and value-added glass products,
            servicing residential, commercial and architectural projects across Australia.
          </p>
        </div>
      </section>

      {/* Our Company */}
      <Section eyebrow="Our Company" title="Built on quality, scale and expertise">
        <Paragraph>
          GlassCo Australia is a trusted supplier of glass and value-added glass products
          based in Melbourne, Victoria. We service a wide range of residential, commercial
          and architectural projects across Australia, supporting builders, glaziers,
          architects, fabricators and property owners with reliable glass solutions and
          industry expertise.
        </Paragraph>
        <Paragraph>
          Using industrial-grade Dip-Tech GP/GPi digital ceramic printing systems, we
          produce durable, high-resolution ceramic printed glass solutions suitable for both
          interior and exterior environments.
        </Paragraph>
        <Paragraph>
          Our digital printing capabilities combine precision engineering, large-format
          production and exceptional design flexibility, allowing architects, designers and
          builders to achieve customised glazing solutions with outstanding durability and
          visual impact.
        </Paragraph>
        <Paragraph>
          As a growing and progressive company, GlassCo Australia operates across multiple
          areas of the glass industry including manufacturing, importing and wholesale
          distribution. Our scale and industry relationships allow us to source, process and
          supply a broad range of high-quality glass products at competitive prices.
        </Paragraph>
        <Paragraph>
          We are highly experienced in supplying the commercial glazing sector and
          understand the importance of compliance, consistency and dependable supply. Our
          products are manufactured and processed to meet relevant Australian Standards,
          giving customers confidence in both quality and performance.
        </Paragraph>

        <h3
          className="mt-10 text-xl font-semibold text-neutral-900"
          style={{ fontFamily: '"Rajdhani", sans-serif' }}
        >
          Advanced processing equipment
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {equipment.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-md border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700"
            >
              <span
                className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: "rgb(0, 154, 170)" }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Paragraph className="mt-10">
          The glass industry continues to evolve through innovation, technology and changing
          architectural requirements. At GlassCo Australia, we believe it is essential to
          stay ahead of industry developments through continuous research, product
          development and investment in modern processing capabilities.
        </Paragraph>
        <Paragraph>
          Our focus is to introduce customers to the latest advancements in glass design,
          performance and technology while continuing to deliver dependable service and
          practical glazing solutions.
        </Paragraph>
        <Paragraph>
          Above all, we are committed to supplying products that meet the highest standards
          of quality, reliability and value.
        </Paragraph>
      </Section>

      {/* Vision & Values */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <p
            className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            Our Vision & Values
          </p>
          <h2
            className="text-3xl font-bold text-neutral-900 sm:text-4xl"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            What we stand for
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <h3
                  className="text-xl font-semibold text-neutral-900"
                  style={{ fontFamily: '"Rajdhani", sans-serif' }}
                >
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <Section eyebrow="Our Commitment" title="Quality you can rely on">
        <Paragraph>
          GlassCo Australia is committed to delivering quality products that customers can
          rely on with confidence.
        </Paragraph>
        <Paragraph>
          All products are manufactured and processed to meet relevant Australian Standards,
          with stringent quality control procedures in place to maintain consistency and
          performance across our range.
        </Paragraph>
        <Paragraph>
          Our ongoing investment in research and development allows us to continually expand
          and improve our product offering, ensuring we provide practical, innovative and
          high-performing glass solutions for modern building requirements.
        </Paragraph>
        <Paragraph>
          We appreciate you taking the time to learn more about GlassCo Australia and
          welcome the opportunity to work with you.
        </Paragraph>
      </Section>

      {/* Environmental Policy */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <p
            className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            Our Environmental Policy
          </p>
          <h2
            className="text-3xl font-bold text-neutral-900 sm:text-4xl"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            Responsible by design
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-neutral-700">
            <p>
              GlassCo Australia is committed to environmentally responsible business
              practices and sustainable resource management.
            </p>
            <p>
              We aim to minimise environmental impact through responsible operations,
              continuous improvement and compliance with applicable environmental standards
              and regulations.
            </p>
          </div>

          <h3
            className="mt-10 text-xl font-semibold text-neutral-900"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            Our Environmental Commitment
          </h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {environmental.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-md border border-neutral-200 bg-white p-4 text-sm text-neutral-700"
              >
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: "rgb(0, 154, 170)" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl text-neutral-700">
            All GlassCo Australia personnel are expected to perform their work responsibly
            and contribute to maintaining environmentally conscious workplace practices.
          </p>
          <p className="mt-4 max-w-3xl text-neutral-700">
            We remain committed to protecting the environment while supporting the long-term
            sustainability of our business, our customers and the wider community.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <p
          className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500"
          style={{ fontFamily: '"Rajdhani", sans-serif' }}
        >
          {eyebrow}
        </p>
        <h2
          className="text-3xl font-bold text-neutral-900 sm:text-4xl"
          style={{ fontFamily: '"Rajdhani", sans-serif' }}
        >
          {title}
        </h2>
        <div className="mt-8 space-y-5 text-neutral-700">{children}</div>
      </div>
    </section>
  );
}

function Paragraph({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`leading-relaxed ${className}`}>{children}</p>;
}
