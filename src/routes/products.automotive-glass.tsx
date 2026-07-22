import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import heroImage from "@/assets/product-automotive.jpg";
import automotiveSectionImage from "@/assets/industrial/automotive.jpg.asset.json";

export const Route = createFileRoute("/products/automotive-glass")({
  head: () => ({
    meta: [
      { title: "Automotive Glass — Laminated Safety & Toughened Printed Glass | GlassCo Australia" },
      {
        name: "description",
        content:
          "6.76 green laminated safety glass and toughened automotive glass with digital ceramic printing, black banding and custom branding for OEM and aftermarket.",
      },
      { property: "og:title", content: "Automotive Glass — Laminated & Toughened" },
      {
        property: "og:description",
        content:
          "High-performance automotive glass: 6.76 green laminated safety glass plus toughened glass with digital printing, ceramic black banding and custom branding.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: AutomotiveGlassPage,
});

function AutomotiveGlassPage() {
  return (
    <ProductPageLayout
      eyebrow="PRODUCT — AUTOMOTIVE GLASS"
      title="Automotive"
      titleAccent="Glass"
      subtitle="High-quality 6.76 green laminated safety glass and toughened automotive glass with digital ceramic printing, black banding and custom branding for OEM and aftermarket applications."
      heroImage={heroImage}
      keyBenefits={[
        "6.76 green laminated safety glass",
        "Toughened glass with digital ceramic printing",
        "Ceramic black banding & custom branding",
        "UV, heat and noise reduction",
        "OEM and aftermarket quality",
      ]}
      intro={[
        "Our automotive glass range combines premium 6.76 green laminated safety glass with advanced digitally printed toughened glass — engineered for safety, performance and design flexibility.",
        "From windshields and side glass to commercial vehicle and custom branded applications, we deliver consistent OEM-grade quality with rapid turnaround.",
      ]}
      sections={[
        {
          heading: "6.76 Green Laminated Safety Glass",
          image: automotiveSectionImage.url,
          paragraphs: [
            "We supply high-quality 6.76 green laminated glass suitable for automotive and architectural applications. This safety glass provides excellent UV protection, heat reduction, noise control and enhanced durability.",
          ],
        },
        {
          heading: "Applications — Laminated",
          bullets: [
            "Automotive windshields",
            "Commercial vehicle glass",
            "Building windows and doors",
            "Safety and security glazing",
          ],
        },
        {
          heading: "Features — Laminated",
          bullets: [
            "High safety performance",
            "Green solar control tint",
            "UV and heat reduction",
            "Noise insulation",
            "Strong laminated construction",
            "Professional quality finish",
            "Suitable for OEM and aftermarket applications",
          ],
        },
        {
          heading: "Toughened Glass for Automotive Industry",
          paragraphs: [
            "We provide advanced digital printing solutions for automotive glass, offering high-quality custom printing, ceramic black banding, decorative graphics, logos and photo printing directly on glass surfaces with exceptional precision and durability.",
          ],
        },
        {
          heading: "Our capabilities",
          bullets: [
            "High-resolution photo and image printing",
            "Custom logos and branding",
            "Decorative patterns and graphics",
            "Ceramic black banding (blackout borders)",
            "UV-resistant and weatherproof printing",
            "OEM-quality automotive glass finishing",
          ],
        },
        {
          heading: "Automotive black banding",
          bullets: [
            "Protects adhesive from UV exposure",
            "Improves glass bonding performance",
            "Enhances overall vehicle appearance",
            "Conceals wiring and mounting components",
            "Provides long-lasting ceramic durability",
          ],
        },
        {
          heading: "Why choose our services",
          bullets: [
            "Advanced digital printing technology",
            "Sharp and consistent print quality",
            "Scratch-resistant and heat-resistant finish",
            "Fast production turnaround",
            "Custom design flexibility",
            "Suitable for OEM and aftermarket applications",
          ],
        },
        {
          heading: "Applications — Toughened & Printed",
          bullets: [
            "Automotive windshields",
            "Side and rear glass",
            "Commercial vehicles and buses",
            "Custom automotive projects",
            "Decorative and privacy glass",
            "Branding and advertising on glass",
          ],
        },
        {
          heading: "Custom printing services",
          bullets: [
            "Customer photos and artwork",
            "Corporate logos",
            "CAD-based design printing",
            "Custom blackout border patterns",
            "Specialized decorative glass solutions",
          ],
        },
      ]}
      ctaTitle="Custom automotive glass solutions"
      ctaBody="For custom automotive glass printing and ceramic black banding solutions, contact us for technical consultation, product information and quotations."
    />
  );
}
