import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import heroImage from "@/assets/solution-industrial.jpg";

export const Route = createFileRoute("/solutions/industrial-automotive")({
  head: () => ({
    meta: [
      { title: "Industrial & Automotive Glass Solutions — GlassCo Australia" },
      {
        name: "description",
        content:
          "Durable, high-performance glass for industrial facilities, automotive, transport and specialised manufacturing — engineered for strength, reliability and safety.",
      },
      { property: "og:title", content: "Industrial & Automotive Glass Solutions — GlassCo Australia" },
      {
        property: "og:description",
        content: "Engineered for performance and safety — industrial, automotive and protective glazing.",
      },
    ],
  }),
  component: IndustrialPage,
});

function IndustrialPage() {
  return (
    <SolutionPage
      eyebrow="Industrial & Automotive"
      title="Industrial & Automotive Glass Solutions"
      tagline="Engineered for Performance and Safety"
      description="We provide durable, high-performance glass solutions for industrial facilities, automotive applications, transport, and specialised manufacturing requirements. Our products are designed to meet demanding environments where strength, reliability, and safety are critical."
      applications={[
        "Automotive Glass Components",
        "Transport & Fleet Vehicles",
        "Manufacturing Facilities",
        "Warehouses & Distribution Centres",
        "Infrastructure Projects",
        "Safety & Protective Glazing",
      ]}
      heroImage={heroImage}
    />
  );
}
