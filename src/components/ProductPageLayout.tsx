import { Link } from "@tanstack/react-router";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-neutral-100"
      >
        <span
          className="text-neutral-900"
          style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "18px", fontWeight: 600, letterSpacing: "0.01em" }}
        >
          {q}
        </span>
        <Plus
          className="h-5 w-5 flex-shrink-0 transition-transform duration-300"
          style={{ color: "#009AAA", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="overflow-hidden">
          <p
            className="px-6 pb-6 text-neutral-700"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", lineHeight: 1.7 }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  );
}
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import sectionImg1 from "@/assets/about-manufacturing.jpg";
import sectionImg2 from "@/assets/about-printing.jpg";
import sectionImg3 from "@/assets/about-environment.jpg";
import sectionImg4 from "@/assets/project-atrium.jpg";
import sectionImg5 from "@/assets/project-office.jpg";
import sectionImg6 from "@/assets/project-curved.jpg";
import sectionImg7 from "@/assets/project-coastal.jpg";
import sectionImg8 from "@/assets/project-retail.jpg";

const ACCENT = "#009AAA";
const HEAD_FONT = "Rajdhani, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

const SECTION_IMAGES = [
  sectionImg1, sectionImg2, sectionImg3, sectionImg4,
  sectionImg5, sectionImg6, sectionImg7, sectionImg8,
];

export type ProductSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: string;
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

      {/* INTRO — quote-style centered overview */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow centered>OVERVIEW</Eyebrow>
            <SectionHeading center>
              The <span style={{ color: ACCENT }}>essentials</span> at a glance
            </SectionHeading>
          </div>
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div
              className="absolute -left-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full shadow-lg"
              style={{ background: ACCENT }}
            >
              <span
                className="text-white"
                style={{ fontFamily: HEAD_FONT, fontWeight: 700, fontSize: "18px" }}
              >
                ✦
              </span>
            </div>
            <div
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-10 shadow-sm"
              style={{ fontFamily: BODY_FONT }}
            >
              <div
                className="space-y-5 text-neutral-700"
                style={{ fontSize: "16px", lineHeight: 1.8 }}
              >
                {intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-6 h-[2px] w-12" style={{ background: ACCENT }} />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS — image-rich varied layouts */}
      {sections.map((s, idx) => {
        const bg = idx % 2 === 0 ? "bg-neutral-50" : "bg-white";
        const cardBg = idx % 2 === 0 ? "bg-white" : "bg-neutral-50";
        const variant = idx % 3;
        const img = s.image ?? SECTION_IMAGES[idx % SECTION_IMAGES.length];

        return (
          <section key={s.heading} className={`w-full py-24 ${bg}`}>
            <div className="mx-auto max-w-[1280px] px-6">

              {/* VARIANT 0 — image left, content right (with corner bracket) */}
              {variant === 0 && (
                <>
                  <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="relative">
                      <div
                        className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2"
                        style={{ borderColor: ACCENT }}
                      />
                      <img
                        src={img}
                        alt={s.heading}
                        loading="lazy"
                        className="h-[420px] w-full rounded-lg object-cover shadow-lg transition-transform duration-700 ease-out hover:scale-105"
                      />
                      <div
                        className="absolute -bottom-5 -right-5 rounded-lg px-5 py-3 text-white shadow-xl"
                        style={{ background: ACCENT, fontFamily: HEAD_FONT }}
                      >
                        <span className="text-sm font-bold tracking-[0.15em]">0{idx + 1}</span>
                      </div>
                    </div>
                    <div>
                      <SectionHeading>{s.heading}</SectionHeading>
                      {s.paragraphs && (
                        <div
                          className="mt-6 space-y-4 text-neutral-600"
                          style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
                        >
                          {s.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
                        </div>
                      )}
                    </div>
                  </div>
                  {s.bullets && (
                    <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {s.bullets.map((b, i) => (
                        <li
                          key={b}
                          className={`flex items-center gap-4 rounded-lg border border-neutral-200 ${cardBg} p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg`}
                        >
                          <span
                            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                            style={{ background: ACCENT, fontFamily: HEAD_FONT }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-neutral-800" style={{ fontFamily: BODY_FONT, fontWeight: 500 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              {/* VARIANT 1 — content left, image right (reversed) */}
              {variant === 1 && (
                <>
                  <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="order-2 lg:order-1">
                      <SectionHeading>{s.heading}</SectionHeading>
                      {s.paragraphs && (
                        <div
                          className="mt-6 space-y-4 text-neutral-600"
                          style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.7 }}
                        >
                          {s.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
                        </div>
                      )}
                    </div>
                    <div className="relative order-1 lg:order-2">
                      <div
                        className="absolute -right-4 -top-4 h-16 w-16 rounded-tr-lg border-r-2 border-t-2"
                        style={{ borderColor: ACCENT }}
                      />
                      <img
                        src={img}
                        alt={s.heading}
                        loading="lazy"
                        className="h-[420px] w-full rounded-lg object-cover shadow-lg transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  </div>
                  {s.bullets && (
                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {s.bullets.map((b, i) => (
                        <div
                          key={b}
                          className={`group rounded-lg border border-neutral-200 ${cardBg} p-7 transition-shadow hover:shadow-lg`}
                        >
                          <div className="text-xs font-bold tracking-[0.2em]" style={{ fontFamily: HEAD_FONT, color: ACCENT }}>
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          <div className="mt-4 h-[2px] w-10 transition-all group-hover:w-16" style={{ background: ACCENT }} />
                          <p className="mt-5 text-neutral-700" style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.7, fontWeight: 500 }}>{b}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* VARIANT 2 — full-width hero image with overlay heading + content card */}
              {variant === 2 && (
                <>
                  <div className="relative h-[380px] w-full overflow-hidden rounded-lg shadow-lg">
                    <img src={img} alt={s.heading} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
                    <div className="relative z-10 flex h-full max-w-2xl flex-col justify-end p-10">
                      <h2 style={{ fontFamily: HEAD_FONT, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.1, color: "#fff", margin: 0 }}>
                        {s.heading}
                      </h2>
                    </div>
                  </div>
                  {s.paragraphs && (
                    <div className={`relative z-10 mx-auto -mt-14 max-w-4xl rounded-lg border border-neutral-200 ${cardBg === "bg-white" ? "bg-white" : "bg-white"} p-10 shadow-lg`}>
                      <div className="space-y-4 text-neutral-700" style={{ fontFamily: BODY_FONT, fontSize: "15px", lineHeight: 1.8 }}>
                        {s.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
                      </div>
                    </div>
                  )}
                  {s.bullets && (
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {s.bullets.map((b) => (
                        <div
                          key={b}
                          className={`group rounded-xl border border-neutral-200 ${cardBg} p-7 transition-all hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg`}
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ background: `${ACCENT}1A` }}>
                            <Check className="h-5 w-5" style={{ color: ACCENT }} strokeWidth={3} />
                          </div>
                          <p className="mt-5 text-neutral-700" style={{ fontFamily: BODY_FONT, fontSize: "14px", lineHeight: 1.7 }}>{b}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

            </div>
          </section>
        );
      })}

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
            <div className="mt-12 space-y-4">
              {faqs.map((f, i) => (
                <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </section>
      )}

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
