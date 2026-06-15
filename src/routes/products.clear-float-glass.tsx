import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import heroImage from "@/assets/range-float.jpg";

export const Route = createFileRoute("/products/clear-float-glass")({
  head: () => ({
    meta: [
      { title: "Clear Float Glass — Premium Architectural Glazing | GlassCo Australia" },
      {
        name: "description",
        content:
          "Top-selling clear float glass with optical clarity and consistent thickness for windows, doors, partitions and architectural glazing.",
      },
      { property: "og:title", content: "Clear Float Glass — Premium Architectural Glazing" },
      {
        property: "og:description",
        content:
          "High-clarity float glass — flat, distortion-free and ready for further processing into toughened, laminated or IGU products.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: ClearFloatGlassPage,
});

function ClearFloatGlassPage() {
  return (
    <ProductPageLayout
      eyebrow="TOP SELLER — FLOAT GLASS"
      title="Float"
      titleAccent="Glass"
      subtitle="Our top-selling architectural float glass — perfectly flat, optically clear and the foundation for almost every modern glazing application. Available in various tints — Grey, Green and Bronze."
      heroImage={heroImage}
      keyBenefits={[
        "Exceptional optical clarity",
        "Perfectly flat, distortion-free surface",
        "Consistent thickness and quality",
        "Ready for toughening, laminating and IGUs",
        "Available in a full range of thicknesses",
      ]}
      intro={[
        "Clear float glass is the most widely used architectural glass, manufactured by floating molten glass on a bed of molten tin to produce a perfectly flat surface with parallel faces.",
        "It is the base substrate for most secondary processing — toughening, laminating, coating and double glazing — making it essential across residential, commercial and architectural projects.",
      ]}
      sections={[
        {
          heading: "Key features",
          bullets: [
            "High light transmission",
            "Uniform thickness tolerance",
            "Smooth fire-polished surface",
            "Excellent flatness",
            "Suitable for further processing",
          ],
        },
        {
          heading: "Applications",
          bullets: [
            "Windows and doors",
            "Internal partitions",
            "Shopfronts and facades",
            "Furniture and tabletops",
            "Mirrors and decorative glass",
            "Base substrate for toughened, laminated and IGU products",
          ],
        },
      ]}
      ctaTitle="Order clear float glass"
      ctaBody="Talk to our team about thicknesses, sizes and processing options for your next project."
    />
  );
}
