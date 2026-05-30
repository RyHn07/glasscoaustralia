import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import heroImage from "@/assets/product-security.jpg";

export const Route = createFileRoute("/products/security-glass-assault-shield")({
  head: () => ({
    meta: [
      { title: "Security Glass — Assault Shield 14.25 SGP | GlassCo Australia" },
      {
        name: "description",
        content:
          "Assault Shield 14.25 SGP laminated security glass — engineered with SentryGlas Plus interlayer for forced-entry resistance, impact protection and architectural security.",
      },
      { property: "og:title", content: "Security Glass — Assault Shield 14.25 SGP" },
      {
        property: "og:description",
        content:
          "High-performance security glass with stiff SGP interlayer for forced-entry resistance, blast mitigation and architectural protection.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: SecurityGlassPage,
});

function SecurityGlassPage() {
  return (
    <ProductPageLayout
      eyebrow="PRODUCT — SECURITY GLASS"
      title="Assault Shield 14.25"
      titleAccent="SGP Glass"
      subtitle="High-performance laminated security glass built with a stiff SentryGlas Plus (SGP) interlayer — engineered to resist forced entry, impact and intrusion while maintaining clarity."
      heroImage={heroImage}
      keyBenefits={[
        "14.25mm SGP laminated construction",
        "Forced-entry and impact resistance",
        "Five times stronger interlayer than standard PVB",
        "Maintains structural integrity after breakage",
        "Suitable for high-security applications",
      ]}
      intro={[
        "Assault Shield 14.25 SGP is a premium laminated security glass that bonds heavy glass plies with a rigid SentryGlas Plus ionoplast interlayer.",
        "The SGP interlayer is significantly stiffer and stronger than conventional PVB, giving the panel exceptional post-breakage strength and forced-entry resistance — even under sustained attack with hand tools.",
      ]}
      sections={[
        {
          heading: "Key features",
          bullets: [
            "Heavy 14.25mm SGP-laminated make-up",
            "Exceptional post-breakage stiffness",
            "Resistant to repeated impact attack",
            "Clear, distortion-free vision panel",
            "UV and edge stability for long service life",
            "Can be combined with toughened or IGU make-ups",
          ],
        },
        {
          heading: "Applications",
          bullets: [
            "Bank and retail counters",
            "Government and embassy glazing",
            "Pharmacy and jewellery storefronts",
            "Reception screens and secure partitions",
            "Cash handling and detention environments",
            "High-end residential security glazing",
          ],
        },
        {
          heading: "Performance",
          paragraphs: [
            "The SGP interlayer holds glass fragments tightly even after fracture, allowing the panel to continue resisting force long after standard laminates would fail. This makes Assault Shield 14.25 SGP a strong fit for projects where forced-entry delay, impact protection and continued visibility are critical.",
          ],
        },
      ]}
      ctaTitle="Specify security glass for your project"
      ctaBody="Contact us for technical data, attack-resistance ratings and project-specific recommendations on Assault Shield SGP make-ups."
    />
  );
}
