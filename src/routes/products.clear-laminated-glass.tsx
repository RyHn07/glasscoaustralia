import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import laminatedSafetyImage from "@/assets/gallery/security-safety-glass/security-safety-glass-1.jpg";
import heroImage from "@/assets/range-laminated.jpg";

export const Route = createFileRoute("/products/clear-laminated-glass")({
  head: () => ({
    meta: [
      { title: "Clear Laminated Glass — Safety Glazing | GlassCo Australia" },
      {
        name: "description",
        content:
          "Top-selling clear laminated safety glass with PVB interlayer for safety, security, UV control and acoustic performance across residential and commercial projects.",
      },
      { property: "og:title", content: "Clear Laminated Glass — Safety Glazing" },
      {
        property: "og:description",
        content:
          "PVB-laminated safety glass that holds together on impact, blocks 99% of UV and improves acoustic comfort.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: ClearLaminatedGlassPage,
});

function ClearLaminatedGlassPage() {
  return (
    <ProductPageLayout
      eyebrow="TOP SELLER — LAMINATE GLASS"
      title="Laminate"
      titleAccent="Glass"
      subtitle="Our top-selling safety glass — two layers of float bonded with a tough PVB interlayer for impact resistance, UV control and improved acoustic performance. Available in Clear, Grey and Green."
      heroImage={heroImage}
      keyBenefits={[
        "Holds together on impact for safety",
        "Blocks up to 99% of UV radiation",
        "Improved acoustic insulation",
        "Meets safety glazing standards (AS/NZS 2208)",
        "Suitable for overhead and balustrade use",
      ]}
      intro={[
        "Clear laminated glass is engineered by bonding two or more sheets of float glass with a tough, flexible PVB interlayer under heat and pressure.",
        "On impact the interlayer holds fragments in place, reducing the risk of injury and maintaining the integrity of the opening — making it the standard for safety, security and overhead glazing.",
      ]}
      sections={[
        {
          heading: "Key features",
          image: laminatedSafetyImage,
          bullets: [
            "Grade A safety glass",
            "PVB interlayer for impact resistance",
            "Up to 99% UV block — protects interiors and furnishings",
            "Acoustic damping for quieter interiors",
            "Available in multiple thickness combinations",
          ],
        },
        {
          heading: "Applications",
          bullets: [
            "Windows and doors in safety zones",
            "Balustrades and pool fencing",
            "Skylights and overhead glazing",
            "Shopfronts and entrances",
            "Internal partitions",
            "Security and acoustic glazing",
          ],
        },
      ]}
      ctaTitle="Order clear laminated glass"
      ctaBody="Speak with our team about thickness make-ups, interlayer options and project-specific requirements."
    />
  );
}
