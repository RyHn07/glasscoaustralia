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
          "High-resolution digital ceramic printing on glass for splashbacks, facades, partitions, balustrades and architectural projects across Australia.",
      },
      { property: "og:title", content: "Digital Glass Printing — CGI Ceramic Printer" },
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
      subtitle="Premium quality, vibrant ceramic printing directly onto glass — for residential, commercial and architectural applications."
      heroImage={heroImage}
      keyBenefits={[
        "High-resolution digital ceramic printing",
        "Custom designs and photographic imagery",
        "UV resistant and long-lasting finish",
        "Suitable for interior and exterior applications",
        "Fast turnaround and precision production",
      ]}
      intro={[
        "We are proud to announce the installation of our latest CGI Digital Glass Printing Machine, bringing world-class digital ceramic printing capabilities to Australia.",
        "Designed for modern architectural and decorative glass applications, this advanced printer enables us to produce high-definition graphics, patterns, textures, gradients, and custom designs directly onto glass surfaces with exceptional accuracy and durability.",
      ]}
      sections={[
        {
          heading: "About the machine",
          paragraphs: [
            "The CGI Digital Glass Printing Machine is one of the most advanced ceramic ink printers available, engineered for both small bespoke pieces and large architectural panels. It uses precision print head technology and a digital ceramic ink system to deliver consistent, high-definition results.",
            "Designs are fused permanently into the glass during the tempering process, producing a finish that is scratch resistant, UV stable and suitable for the harshest interior and exterior environments.",
          ],
        },
        {
          heading: "Premium ceramic printing",
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
            "The CGI printer operates in a precision-controlled environment to maintain superior print quality and consistency across every panel we produce.",
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
          heading: "Ideal applications",
          paragraphs: [
            "Digital ceramic printing transforms ordinary glass into a functional architectural element, suitable for a wide range of residential, commercial and architectural projects.",
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
          heading: "Why choose our digital printing",
          paragraphs: [
            "Bringing this technology to Australia means architects, designers and builders can specify world-class custom printed glass locally — with faster lead times, tighter quality control and the support of an experienced glazing partner.",
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
          heading: "Sectors we serve",
          paragraphs: [
            "Residential — kitchen splashbacks, bathroom panels, shower screens, decorative doors and wardrobe panels.",
            "Commercial — office partitions, reception feature walls, shopfront glass, signage panels and branding applications.",
            "Architectural — facades, balustrades, cladding, external feature glass, privacy and decorative glazing.",
          ],
        },
      ]}
    />
  );
}
