import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Services } from "@/components/Services";
import { Range } from "@/components/Range";
import { GlassTypes } from "@/components/GlassTypes";
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
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="flex h-screen flex-col">
        <Header />
        <div className="flex-1 min-h-0 px-1.5 pb-1.5">
          <div className="h-full w-full overflow-hidden rounded-lg">
            <Hero />
          </div>
        </div>
      </div>
      <WhoWeAre />
      <Services />
      <Range />
      <GlassTypes />
      <WhyUs />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
