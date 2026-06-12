import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import heroImage from "@/assets/solution-residential.jpg";

export const Route = createFileRoute("/solutions/residential")({
  head: () => ({
    meta: [
      { title: "Residential Glass Solutions — GlassCo Australia" },
      {
        name: "description",
        content:
          "Premium residential glass solutions for windows, doors, shower screens, splashbacks, mirrors, balustrades and pool fencing across Australia.",
      },
      { property: "og:title", content: "Residential Glass Solutions — GlassCo Australia" },
      {
        property: "og:description",
        content: "Enhance your home with quality glass — windows, shower screens, balustrades and more.",
      },
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  return (
    <SolutionPage
      eyebrow="Residential"
      title="Residential Glass Solutions"
      tagline="Enhance Your Home with Quality Glass"
      description="From stylish interiors to durable exterior glazing, we provide premium glass solutions designed to improve comfort, safety, and aesthetics in modern homes."
      applications={[
        "Windows & Doors",
        "Shower Screens",
        "Splashbacks",
        "Mirrors",
        "Balustrades",
        "Pool Fencing",
      ]}
      heroImage={heroImage}
    />
  );
}
