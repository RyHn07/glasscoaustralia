import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import acousticOfficeImage from "@/assets/gallery/office-partitions/office-partitions-1.jpg.asset.json";
import heroImage from "@/assets/product-acoustic.jpg";

export const Route = createFileRoute("/products/acoustic-glass")({
  head: () => ({
    meta: [
      { title: "Acoustic Glass — Noise Reduction | GlassCo Australia" },
      {
        name: "description",
        content:
          "Laminated acoustic glass designed to reduce traffic, urban and aircraft noise for homes, offices, apartments and hotels across Australia.",
      },
      { property: "og:title", content: "Acoustic Glass — Noise Reduction" },
      {
        property: "og:description",
        content: "Reduce external noise with laminated acoustic glass solutions from GlassCo Australia.",
      },
    ],
  }),
  component: AcousticGlassPage,
});

function AcousticGlassPage() {
  return (
    <ProductPageLayout
      eyebrow="PRODUCT — NOISE REDUCTION"
      title="Acoustic"
      titleAccent="Glass"
      subtitle="Laminated noise reduction glass for quieter, more comfortable indoor spaces in busy urban environments."
      heroImage={heroImage}
      keyBenefits={[
        "Reduces external noise from traffic and urban activity",
        "Laminated construction for safety and retention",
        "Useful for homes, offices, apartments and hotels",
        "Supports improved comfort, privacy and concentration",
      ]}
      intro={[
        "Acoustic glass is designed to reduce unwanted noise and create quieter, more comfortable indoor spaces. In busy suburbs, apartments, offices and commercial buildings, external noise from traffic, trains, aircraft, construction and people can affect comfort, sleep, concentration and productivity.",
        "GlassCo Australia supplies noise reduction glass solutions that combine laminated safety performance with improved acoustic control, making them ideal for modern Australian living and working environments.",
      ]}
      sections={[
        {
          heading: "What is acoustic glass?",
          image: acousticOfficeImage.url,
          paragraphs: [
            "Acoustic glass is a type of laminated glass designed to reduce sound transmission. It generally uses a special interlayer between two or more glass sheets. This interlayer helps dampen vibration and reduces the amount of sound that passes through the glass.",
            "Standard glass can reduce some noise simply by being a barrier, but acoustic laminated glass is designed to perform better across a wider range of frequencies. It is particularly useful for reducing traffic noise, voices, aircraft noise and other common urban sound sources.",
          ],
        },
        {
          heading: "Why noise reduction matters",
          paragraphs: [
            "Noise is more than an inconvenience. In homes, it can affect sleep, relaxation and privacy. In offices, it can make concentration harder and reduce the quality of meetings. In apartments and mixed-use developments, noise complaints can become a major concern for residents and property managers.",
            "As cities become denser, acoustic performance is becoming an important part of building design. Glazing can be a key part of the solution when specified correctly.",
          ],
        },
        {
          heading: "How acoustic performance works",
          paragraphs: [
            "Sound travels as vibration through air and building materials. Windows and glazed doors are often weaker points in a building envelope because they are lighter than walls. Acoustic glass improves performance by using laminated construction and specialised interlayers that absorb and dampen vibration.",
            "Performance can also be affected by glass thickness, asymmetrical glass combinations, frame quality, seals, air gaps and installation. Acoustic glass works best when considered as part of the complete window or facade system.",
          ],
        },
        {
          heading: "Benefits for homes",
          paragraphs: [
            "For residential customers, acoustic glass can make bedrooms quieter, improve comfort in living areas and reduce the intrusion of traffic or neighbourhood noise. It is especially useful for homes near main roads, train lines, tram routes, schools, shopping strips or airports.",
            "It can also support privacy by reducing sound transfer through windows and doors. Because acoustic glass is generally laminated, it can also provide safety and UV benefits — giving homeowners more than one improvement from a single upgrade.",
          ],
        },
        {
          heading: "Benefits for commercial buildings",
          paragraphs: [
            "For commercial properties, acoustic glass can improve workplace comfort, support better meeting rooms, reduce distractions and help create a more premium indoor environment. It is suitable for office facades, internal meeting rooms, hotels, healthcare facilities, education buildings and mixed-use developments.",
            "In retail and hospitality settings, reducing street noise can improve the customer experience and help create a more controlled atmosphere.",
          ],
        },
      ]}
    />
  );
}
