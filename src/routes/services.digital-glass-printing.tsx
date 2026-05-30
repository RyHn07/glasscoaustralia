import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import heroImage from "@/assets/product-printing.jpg";

export const Route = createFileRoute("/services/digital-glass-printing")({
  head: () => ({
    meta: [
      { title: "Digital Glass Printing — Dip-Tech GPi Ceramic Printer | GlassCo Australia" },
      {
        name: "description",
        content:
          "High-resolution Dip-Tech GPi digital ceramic printing on glass for splashbacks, facades, partitions, balustrades and architectural projects across Australia.",
      },
      { property: "og:title", content: "Digital Glass Printing — Dip-Tech GPi Ceramic Printer" },
      {
        property: "og:description",
        content:
          "Premium ceramic printing directly onto glass — durable, vibrant and custom designed for residential, commercial and architectural applications.",
      },
      { property: "og:image", content: heroImage },
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
      subtitle="Introducing our newly installed Dip-Tech GPi Digital Glass Printing Machine — delivering premium quality, vibrant ceramic printing directly onto glass for residential, commercial and architectural applications."
      heroImage={heroImage}
      keyBenefits={[
        "High-resolution digital ceramic printing",
        "Custom designs and photographic imagery",
        "UV resistant and long-lasting finish",
        "Suitable for interior and exterior applications",
        "Fast turnaround and precision production",
      ]}
      intro={[
        "We are proud to announce the installation of our latest Dip-Tech GPi Digital Glass Printing Machine, bringing world-class digital ceramic printing capabilities to Australia.",
        "Designed for modern architectural and decorative glass applications, this advanced printer enables us to produce high-definition graphics, patterns, textures, gradients, and custom designs directly onto glass surfaces with exceptional accuracy and durability.",
      ]}
      sections={[
        {
          heading: "About the machine",
          paragraphs: [
            "The Dip-Tech GPi is one of the most advanced ceramic ink printers available, engineered for both small bespoke pieces and large architectural panels. It uses precision print head technology and a digital ceramic ink system to deliver consistent, high-definition results.",
            "Designs are fused permanently into the glass during the tempering process, producing a finish that is scratch resistant, UV stable and suitable for the harshest interior and exterior environments.",
          ],
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
            "The printer uses advanced ceramic ink technology to permanently fuse designs into the glass surface during tempering, ensuring exceptional durability and colour stability that will not fade over time.",
          ],
          bullets: [
            "High resolution printing",
            "Custom design capability",
            "Architectural grade durability",
            "Large format glass printing",
            "Fast and efficient production",
            "Eco-friendly process",
          ],
        },
        {
          heading: "Advanced production environment",
          paragraphs: [
            "The Dip-Tech GPi operates in a precision-controlled environment to maintain superior print quality and consistency across every panel we produce.",
          ],
          bullets: [
            "Digital ceramic ink system",
            "Precision print head technology",
            "Automated glass handling",
            "Controlled airflow and cleanroom environment",
            "High-performance graphic processing software",
            "Remote monitoring capability",
          ],
        },
        {
          heading: "Connectivity",
          bullets: [
            "Electrical power infrastructure",
            "Compressed air system",
            "Internet-enabled remote access support",
          ],
        },
        {
          heading: "Why choose us",
          paragraphs: [
            "With the addition of this new printer, we now offer faster turnaround, superior consistency and greater design flexibility. Our investment in cutting-edge technology allows us to deliver innovative glass solutions for builders, architects, designers and homeowners.",
          ],
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
          heading: "Applications",
          paragraphs: [
            "Residential — kitchen splashbacks, bathroom panels, shower screens, decorative doors and wardrobe panels.",
            "Commercial — office partitions, reception feature walls, shopfront glass, signage panels and branding applications.",
            "Architectural — facades, balustrades, cladding, external feature glass, privacy and decorative glazing.",
          ],
        },
      ]}
      ctaTitle="Bring your vision to life"
      ctaBody="Looking for custom printed glass solutions? Our new Dip-Tech GPi Digital allows us to create stunning architectural and decorative glass tailored to your project — contact us for custom design consultation, samples and finishes, project pricing and technical assistance."
    />
  );
}
