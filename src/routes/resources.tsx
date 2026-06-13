import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlassTypes } from "@/components/GlassTypes";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Glass Types & Technical Reference | GlassCo Australia" },
      {
        name: "description",
        content:
          "Technical reference for our standard glass range — U-values, SHGC, VLT, UV block and thickness data. Download the full PDF spec sheet.",
      },
      { property: "og:title", content: "Resources — Glass Types & Technical Reference" },
      {
        property: "og:description",
        content:
          "Indicative performance figures for GlassCo's standard glass range. Free PDF reference download.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <section className="border-b border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-24">
          <span
            className="inline-block"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#009AAA",
            }}
          >
            RESOURCES
          </span>
          <h1
            className="mt-4 max-w-3xl text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Rajdhani", sans-serif', letterSpacing: "-0.01em" }}
          >
            Technical reference & downloads
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Performance data, specification sheets and reference material for our complete glass
            range — built for architects, builders and specifiers.
          </p>
        </div>
      </section>
      <GlassTypes />
      <Footer />
    </main>
  );
}
