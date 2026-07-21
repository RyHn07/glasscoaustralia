import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import heroImage from "@/assets/solution-residential.jpg";
import doorsImg from "@/assets/gallery/doors/doors-1.jpg.asset.json";
import mirrorsImg from "@/assets/gallery/mirrors/mirrors-1.jpg.asset.json";
import balustradeImg from "@/assets/gallery/balustrade/balustrade-1.jpg.asset.json";
import poolFencingImg from "@/assets/gallery/pool-fencing/pool-fencing-1.jpg.asset.json";
import showerScreenImg from "@/assets/residential/shower-screen.jpg.asset.json";
import splashbackImg from "@/assets/residential/splashback.jpg.asset.json";

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
        { name: "Windows & Doors", image: doorsImg.url, galleryCategory: "doors" },
        { name: "Shower Screens", image: showerScreenImg.url, galleryCategory: "shower-screens" },
        { name: "Splashbacks", image: splashbackImg.url, galleryCategory: "splashbacks" },
        { name: "Mirrors", image: mirrorsImg.url, galleryCategory: "mirrors" },
        { name: "Balustrades", image: balustradeImg.url, galleryCategory: "balustrade" },
        { name: "Pool Fencing", image: poolFencingImg.url, galleryCategory: "pool-fencing" },
      ]}
      heroImage={heroImage}
    />
  );
}
