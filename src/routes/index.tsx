import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

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
    <main className="flex h-screen flex-col bg-background">
      <Header />
      <div className="flex-1 min-h-0">
        <Hero />
      </div>
    </main>
  );
}
