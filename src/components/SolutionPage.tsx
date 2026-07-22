import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteImage, imageSlot } from "@/lib/site-images";

const ACCENT = "#009AAA";
const HEAD_FONT = "Montserrat, sans-serif";
const BODY_FONT = "Poppins, sans-serif";

export type Application = string | { name: string; image?: string; galleryCategory?: string };

export type SolutionPageProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  applications: Application[];
  heroImage: string;
};

export function SolutionPage({ eyebrow, title, tagline, description, applications, heroImage }: SolutionPageProps) {
  const pageSlot = typeof window === "undefined" ? imageSlot(title) : window.location.pathname.slice(1).replace(/\//g, "-");

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-24 md:py-32">
          <div className="flex items-center gap-3">
            <span className="block h-px w-8" style={{ backgroundColor: ACCENT }} />
            <span
              className="font-bold uppercase tracking-widest"
              style={{ fontFamily: HEAD_FONT, color: ACCENT, fontSize: "16px" }}
            >
              {eyebrow}
            </span>
          </div>
          <h1
            className="max-w-3xl text-white"
            style={{ fontFamily: HEAD_FONT, fontWeight: 700, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}
          >
            {title}
          </h1>
          <p
            className="max-w-2xl text-lg text-white/90"
            style={{ fontFamily: BODY_FONT }}
          >
            {tagline}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto w-full max-w-[1280px] px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2
              className="mb-6 text-3xl text-neutral-900 md:text-4xl"
              style={{ fontFamily: HEAD_FONT, fontWeight: 700 }}
            >
              Overview
            </h2>
            <p className="text-base leading-relaxed text-neutral-700" style={{ fontFamily: BODY_FONT }}>
              {description}
            </p>

            <div className="mt-10">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ACCENT, fontFamily: HEAD_FONT }}
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h3
              className="mb-6 text-2xl text-neutral-900"
              style={{ fontFamily: HEAD_FONT, fontWeight: 700 }}
            >
              Applications
            </h3>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {applications.map((app) => {
                const name = typeof app === "string" ? app : app.name;
                const image = typeof app === "string" ? undefined : app.image;
                const galleryCategory = typeof app === "string" ? undefined : app.galleryCategory;
                return (
                  <li
                    key={name}
                    onClick={() => { if (galleryCategory) window.location.href = `/gallery?category=${galleryCategory}`; }}
                    onKeyDown={(event) => { if (galleryCategory && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); window.location.href = `/gallery?category=${galleryCategory}`; } }}
                    tabIndex={galleryCategory ? 0 : undefined}
                    role={galleryCategory ? "link" : undefined}
                    className={`overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${galleryCategory ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#009AAA] focus:ring-offset-2" : ""}`}
                  >
                    {image && (
                      <SiteImage slot={`${pageSlot}-application-${imageSlot(name)}`} fallback={image} alt={name} className="h-32 w-full object-cover" />
                    )}
                    <div className="flex items-start gap-3 p-3">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm font-medium text-neutral-800" style={{ fontFamily: BODY_FONT }}>
                        {name}
                        {galleryCategory ? (
                          <span className="mt-1 block text-xs font-semibold" style={{ color: ACCENT }}>
                            View gallery ?
                          </span>
                        ) : null}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
