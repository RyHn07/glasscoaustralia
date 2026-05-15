import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import heroImage from "@/assets/product-decorative.jpg";

export const Route = createFileRoute("/products/decorative-glass")({
  head: () => ({
    meta: [
      { title: "Decorative Glass — Patterned, Mirror & Printed | GlassCo Australia" },
      {
        name: "description",
        content:
          "Patterned, printed ceramic, mirror and ultra clear decorative glass for residential and commercial design projects.",
      },
      { property: "og:title", content: "Decorative Glass" },
      {
        property: "og:description",
        content: "Combine function with visual impact using GlassCo's range of decorative glass.",
      },
    ],
  }),
  component: DecorativeGlassPage,
});

function DecorativeGlassPage() {
  return (
    <ProductPageLayout
      eyebrow="PRODUCT — DECORATIVE"
      title="Decorative"
      titleAccent="Glass"
      subtitle="Patterned, printed, mirrored and ultra clear glass to bring design and function together across any project."
      heroImage={heroImage}
      keyBenefits={[
        "Patterned glass for privacy and light diffusion",
        "Printed ceramic glass for durable design finishes",
        "Mirror glass for interiors, retail and hospitality",
        "Ultra clear glass for premium clarity",
        "Options to combine design with safety and performance",
      ]}
      intro={[
        "Decorative glass allows designers, builders and property owners to combine function with visual impact. It can improve privacy, enhance interiors, create feature walls, support branding, increase light flow and deliver a premium finish across residential and commercial projects.",
        "GlassCo Australia supplies decorative glass options including patterned glass, printed ceramic glass, mirror glass and ultra clear low iron glass — giving customers flexible choices for both practical and design-led applications.",
      ]}
      sections={[
        {
          heading: "What is decorative glass?",
          paragraphs: [
            "Decorative glass is a broad category that includes glass selected for appearance as well as function. It may use texture, colour, pattern, ceramic printing, reflectivity or extra clarity to achieve a design goal.",
            "Unlike standard clear glass, decorative glass can shape how light moves through a space, how much privacy is achieved and how a surface contributes to the overall interior or facade design. Glass is not just a building material — it is also a design element.",
          ],
        },
        {
          heading: "Patterned and privacy glass",
          paragraphs: [
            "Patterned glass is produced with textured surfaces that diffuse light and obscure direct visibility. It is ideal for bathrooms, entry areas, partitions, doors and spaces where privacy is needed without losing natural light.",
            "Patterned glass can soften glare, create visual interest and maintain brightness — common in shower areas, offices, residential doors and decorative panels.",
          ],
        },
        {
          heading: "Range of decorative options",
          bullets: [
            "Patterned glass — textured surfaces for privacy and light diffusion",
            "Printed ceramic glass — durable digitally printed designs",
            "Mirror glass — for interiors, retail and hospitality",
            "Ultra clear (low iron) glass — premium clarity for showcase applications",
            "Coloured back-painted glass — for splashbacks and feature walls",
            "Tinted and reflective glass — for facades and shopfronts",
          ],
        },
      ]}
      faqs={[
        {
          q: "Can decorative glass also be safety glass?",
          a: "Yes. Many decorative options can be supplied in laminated or toughened forms depending on the application.",
        },
        {
          q: "Where is patterned glass commonly used?",
          a: "It is commonly used in bathrooms, doors, partitions and privacy-focused interiors.",
        },
      ]}
    />
  );
}
