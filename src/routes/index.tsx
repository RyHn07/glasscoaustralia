import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Services } from "@/components/Services";
import { Range } from "@/components/Range";
import { WhyUs } from "@/components/WhyUs";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GlassCo Australia — Premium Glass Manufacturer & Supplier" },
      {
        name: "description",
        content:
          "GlassCo manufactures premium glass from source, supplying builders, architects and retailers across Australia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [imagesReady, setImagesReady] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {!imagesReady && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-white"
          role="status"
          aria-live="polite"
          aria-label="Loading GlassCo Australia"
        >
          <p className="text-3xl font-bold tracking-tight text-neutral-950" style={{ fontFamily: "Montserrat, sans-serif" }}>
            GlassCo <span className="text-[#009AAA]">Australia</span>
          </p>
          <span className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-200 border-t-[#009AAA]" aria-hidden />
          <span className="text-sm text-neutral-600">Loading your glass solutions...</span>
        </div>
      )}
      <Header />
      <div className="flex h-[calc(100dvh-120px)] min-h-[400px] flex-col">
        <div className="flex-1 min-h-0 px-1.5 pb-1.5">
          <div className="h-full w-full overflow-hidden rounded-lg">
            <Hero onImagesReady={() => setImagesReady(true)} />
          </div>
        </div>
      </div>
      <WhoWeAre />
      <Services />
      <Range />
      <WhyUs />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
