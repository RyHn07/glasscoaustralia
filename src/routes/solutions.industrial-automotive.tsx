import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import heroImage from "@/assets/solution-industrial.jpg";
import automotiveImg from "@/assets/industrial/automotive.jpg.asset.json";
import transportImg from "@/assets/industrial/transport.jpg.asset.json";
import manufacturingImg from "@/assets/industrial/manufacturing.jpg.asset.json";
import warehousesImg from "@/assets/industrial/warehouses.jpg.asset.json";
import infrastructureImg from "@/assets/industrial/infrastructure.jpg.asset.json";
import safetyImg from "@/assets/industrial/safety.jpg.asset.json";

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
        { name: "Automotive Glass Components", image: automotiveImg.url },
        { name: "Transport & Fleet Vehicles", image: transportImg.url },
        { name: "Manufacturing Facilities", image: manufacturingImg.url },
        { name: "Warehouses & Distribution Centres", image: warehousesImg.url },
        { name: "Infrastructure Projects", image: infrastructureImg.url },
        { name: "Safety & Protective Glazing", image: safetyImg.url },
      ]}
      heroImage={heroImage}
    />
  );
}
