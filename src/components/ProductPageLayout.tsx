import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ACCENT = "#009AAA";
const HEAD_FONT = "Rajdhani, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

export type ProductSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProductFAQ = { q: string; a: string };

export type ProductPageProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  heroImage: string;
  keyBenefits: string[];
  intro: string[];
  sections: ProductSection[];
  faqs?: ProductFAQ[];
  ctaTitle?: string;
  ctaBody?: string;
};

export function ProductPageLayout(props: ProductPageProps) {
  const {
    eyebrow,
    title,
    titleAccent,
    subtitle,
    heroImage,
    keyBenefits,
    intro,
    sections,
    faqs,
    ctaTitle = "Talk to our glass specialists",
    ctaBody = "Get tailored advice on the right glass solution for your project.",
  } = props;

  return (
    <main className="flex min-h-screen flex-col bg-white" style={{ fontFamily: BODY_FONT }}>
      <Header />

      {/* HERO */}
      <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
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
              {eyebrow}
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
            {title}
            {titleAccent ? (
              <>
                <br />
                <span style={{ color: ACCENT }}>{titleAccent}</span>
              </>
            ) : null}
          </h1>
          <p
            className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
            style={{ fontFamily: BODY_FONT }}
          >
            {subtitle}
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
                    style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.6 }}
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

      {/* INTRO */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-[920px] px-6 text-center">
          <Eyebrow centered>OVERVIEW</Eyebrow>
          <div
            className="mt-6 space-y-5 text-neutral-700"
            style={{ fontFamily: BODY_FONT, fontSize: "16px", lineHeight: 1.8 }}
          >
            {intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS — alternating bg */}
      {sections.map((s, idx) => (
        <section
          key={s.heading}
          className={`w-full py-20 ${idx % 2 === 0 ? "bg-neutral-50" : "bg-white"}`}
        >
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
                {s.heading}
              </h2>
            </div>
            {s.paragraphs && (
              <div
                className="space-y-4 text-neutral-700"
                style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.8 }}
              >
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            {s.bullets && (
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-neutral-700"
                    style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.7 }}
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
        </section>
      ))}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="w-full bg-white py-20">
          <div className="mx-auto max-w-[920px] px-6">
            <div className="text-center">
              <Eyebrow centered>FAQS</Eyebrow>
              <SectionHeading center>
                Frequently Asked <span style={{ color: ACCENT }}>Questions</span>
              </SectionHeading>
            </div>
            <div className="mt-12 space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                  <h3
                    className="text-neutral-900"
                    style={{ fontFamily: HEAD_FONT, fontSize: "18px", fontWeight: 600, letterSpacing: "0.01em" }}
                  >
                    {f.q}
                  </h3>
                  <p
                    className="mt-2 text-neutral-700"
                    style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.7 }}
                  >
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            {ctaTitle}
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-white/75"
            style={{ fontFamily: BODY_FONT, fontSize: "16px", lineHeight: 1.7 }}
          >
            {ctaBody}
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

function Eyebrow({ children, centered }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
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
        {children}
      </span>
      {centered && (
        <span className="block" style={{ width: "32px", height: "1px", backgroundColor: ACCENT }} />
      )}
    </div>
  );
}

function SectionHeading({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2
      className={center ? "mt-2" : ""}
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
