import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import heroImage from "@/assets/product-printing.jpg";

export const Route = createFileRoute("/products/digital-glass-printing")({
  head: () => ({
    meta: [
      { title: "Digital Glass Printing — CGI Ceramic Printer | GlassCo Australia" },
      {
        name: "description",
        content:
          "High-resolution digital ceramic printing on glass for splashbacks, facades, partitions, balustrades and architectural projects.",
      },
      { property: "og:title", content: "Digital Glass Printing" },
      {
        property: "og:description",
        content: "Premium ceramic printing directly onto glass — durable, vibrant and custom designed.",
      },
    ],
  }),
  component: DigitalGlassPrintingPage,
});

function DigitalGlassPrintingPage() {
  return (
    <ProductPageLayout
      eyebrow="PRODUCT — DIGITAL CERAMIC PRINTING"
      title="Digital Glass"
      titleAccent="Printing"
      subtitle="Premium quality, vibrant ceramic printing directly onto glass — for residential, commercial and architectural applications."
      heroImage={heroImage}
      keyBenefits={[
        "High-resolution digital ceramic printing",
        "Custom designs & photographic imagery",
        "UV resistant & long-lasting finish",
        "Suitable for interior & exterior applications",
        "Fast turnaround & precision production",
      ]}
      intro={[
        "We are proud to announce the installation of our latest CGI Digital Glass Printing Machine, bringing world-class digital ceramic printing capabilities to Australia.",
        "Designed for modern architectural and decorative glass applications, this advanced printer enables us to produce high-definition graphics, patterns, textures, gradients, and custom designs directly onto glass surfaces with exceptional accuracy and durability.",
      ]}
      sections={[
        {
          heading: "Ideal applications",
          bullets: [
            "Splashbacks",
            "Shower screens",
            "Feature walls",
            "Office partitions",
            "Facades",
            "Balustrades",
            "Shopfronts",
            "Decorative architectural glass",
            "Commercial signage",
            "Interior design projects",
          ],
        },
        {
          heading: "Premium digital ceramic printing",
          paragraphs: [
            "The printer uses advanced ceramic ink technology to permanently fuse designs into the glass surface during tempering, ensuring exceptional durability and colour stability.",
          ],
          bullets: [
            "High Resolution Printing",
            "Custom Design Capability",
            "Architectural Grade Durability",
            "Large Format Glass Printing",
            "Fast & Efficient Production",
            "Eco-Friendly Process",
          ],
        },
        {
          heading: "Advanced production environment",
          paragraphs: [
            "The CGI printer operates in a precision-controlled environment to maintain superior print quality and consistency.",
          ],
          bullets: [
            "Digital ceramic ink system",
            "Precision print head technology",
            "Automated glass handling",
            "Controlled airflow & cleanroom environment",
            "High-performance graphic processing software",
            "Remote monitoring capability",
          ],
        },
        {
          heading: "Why choose us",
          bullets: [
            "Faster production turnaround",
            "Superior print consistency",
            "Greater design flexibility",
            "Custom architectural solutions",
            "Premium quality finishes",
            "Advanced manufacturing capability",
          ],
        },
        {
          heading: "Applications by sector",
          paragraphs: [
            "Residential — kitchen splashbacks, bathroom panels, shower screens, decorative doors, wardrobe panels.",
            "Commercial — office partitions, reception feature walls, shopfront glass, signage panels, branding applications.",
            "Architectural — facades, balustrades, cladding, external feature glass, privacy and decorative glazing.",
          ],
        },
      ]}
      ctaTitle="Bring Your Vision to Life"
      ctaBody="Looking for custom printed glass? Contact us for design consultation, samples, project pricing and technical assistance."
    />
  );
}
