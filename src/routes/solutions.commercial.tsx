import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import heroImage from "@/assets/solution-commercial.jpg";
import shopfrontsImg from "@/assets/commercial/shopfronts.jpg.asset.json";
import officePartitionImg from "@/assets/commercial/office-partition.jpg.asset.json";
import facadesImg from "@/assets/commercial/facades.jpg.asset.json";
import glazingImg from "@/assets/commercial/glazing.jpg.asset.json";
import displayGlassImg from "@/assets/commercial/display-glass.jpg.asset.json";
import securityImg from "@/assets/commercial/security.jpg.asset.json";

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
        { name: "Shopfronts", image: shopfrontsImg.url },
        { name: "Office Partitions", image: officePartitionImg.url },
        { name: "Facades & Curtain Walls", image: facadesImg.url },
        { name: "Internal Glazing", image: glazingImg.url },
        { name: "Display Glass", image: displayGlassImg.url },
        { name: "Security & Safety Glass", image: securityImg.url },
      ]}
      heroImage={heroImage}
    />
  );
}
