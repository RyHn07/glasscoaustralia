import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import heroImage from "@/assets/solution-commercial.jpg";

export const Route = createFileRoute("/solutions/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Glass Solutions — GlassCo Australia" },
      {
        name: "description",
        content:
          "High-performance commercial glass for offices, retail, hospitality and commercial developments — shopfronts, partitions, facades and curtain walls.",
      },
      { property: "og:title", content: "Commercial Glass Solutions — GlassCo Australia" },
      {
        property: "og:description",
        content: "Professional glass for modern business spaces — shopfronts, facades, partitions and more.",
      },
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  return (
    <SolutionPage
      eyebrow="Commercial"
      title="Commercial Glass Solutions"
      tagline="Professional Glass for Modern Business Spaces"
      description="We supply high-performance glass products for offices, retail spaces, hospitality venues, and commercial developments. Combining functionality with contemporary design, our solutions help create bright, welcoming environments."
      applications={[
        "Shopfronts",
        "Office Partitions",
        "Facades & Curtain Walls",
        "Internal Glazing",
        "Display Glass",
        "Security & Safety Glass",
      ]}
      heroImage={heroImage}
    />
  );
}
