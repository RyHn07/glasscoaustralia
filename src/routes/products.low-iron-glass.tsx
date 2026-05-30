import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import heroImage from "@/assets/range-lowe.jpg";

export const Route = createFileRoute("/products/low-iron-glass")({
  head: () => ({
    meta: [
      { title: "Low Iron Glass — Ultra Clear Glazing | GlassCo Australia" },
      {
        name: "description",
        content:
          "Ultra clear low iron glass with reduced green tint for true colour rendering — ideal for display cases, balustrades, splashbacks and premium architectural glazing.",
      },
      { property: "og:title", content: "Low Iron Glass — Ultra Clear Glazing" },
      {
        property: "og:description",
        content:
          "Premium ultra clear glass with significantly reduced iron content for higher light transmission and a neutral, true-to-colour appearance.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: LowIronGlassPage,
});

function LowIronGlassPage() {
  return (
    <ProductPageLayout
      eyebrow="PRODUCT — LOW IRON GLASS"
      title="Low Iron"
      titleAccent="Glass"
      subtitle="Ultra clear glass with reduced iron content — delivering higher light transmission and a neutral, true-to-colour finish for premium architectural and display applications."
      heroImage={heroImage}
      keyBenefits={[
        "Significantly reduced green tint",
        "Higher visible light transmission",
        "True colour rendering",
        "Premium edge appearance",
        "Ideal for display and feature glazing",
      ]}
      intro={[
        "Low iron glass is manufactured with reduced iron oxide content, eliminating the green hue of standard float glass and producing an exceptionally clear, neutral substrate.",
        "It is the preferred choice when colour accuracy, brightness and visual purity matter — from luxury retail and museum display cases to architectural balustrades, splashbacks and structural glazing.",
      ]}
      sections={[
        {
          heading: "Key features",
          bullets: [
            "Ultra-low iron formulation",
            "High light transmission (>91% typical)",
            "Neutral, water-clear appearance",
            "Compatible with toughening, laminating and coatings",
            "Premium polished edges",
          ],
        },
        {
          heading: "Applications",
          bullets: [
            "Display cases and retail fixtures",
            "Museum and gallery glazing",
            "High-end balustrades and pool fencing",
            "White and printed splashbacks",
            "Structural glazing and facades",
            "Furniture, shelving and tabletops",
          ],
        },
      ]}
      ctaTitle="Specify low iron glass"
      ctaBody="Get expert advice on sizes, thicknesses and processing for your next premium glazing project."
    />
  );
}
