import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Services } from "@/components/Services";
import { Range } from "@/components/Range";

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
      <Header />
      <div className="h-screen px-1.5 pb-1.5">
        <div className="h-full w-full overflow-hidden rounded-lg">
          <Hero />
        </div>
      </div>
      <WhoWeAre />
      <Services />
      <Range />
    </main>
  );
}
