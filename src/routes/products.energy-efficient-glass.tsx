import { createFileRoute } from "@tanstack/react-router";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import heroImage from "@/assets/product-energy.jpg";

export const Route = createFileRoute("/products/energy-efficient-glass")({
  head: () => ({
    meta: [
      { title: "Low‑E & Energy Efficient Glass | GlassCo Australia" },
      {
        name: "description",
        content:
          "Low‑E coated glass, insulated glass units and solar control glazing to improve thermal performance and indoor comfort.",
      },
      { property: "og:title", content: "Low‑E & Energy Efficient Glass" },
      {
        property: "og:description",
        content: "Improve thermal performance and reduce energy use with GlassCo's energy efficient glazing.",
      },
    ],
  }),
  component: EnergyGlassPage,
});

function EnergyGlassPage() {
  return (
    <ProductPageLayout
      eyebrow="PRODUCT — ENERGY EFFICIENCY"
      title="Low‑E & Energy"
      titleAccent="Efficient Glass"
      subtitle="Improve thermal insulation, solar control and indoor comfort with high-performance Low‑E and insulated glass solutions."
      heroImage={heroImage}
      keyBenefits={[
        "Low‑E glass for improved thermal insulation",
        "Insulated glass units (IGUs) for stronger year‑round performance",
        "Solar control options for exposed elevations",
        "Laminated combinations for safety, UV and acoustic benefits",
        "Toughened options for strength and compliance",
      ]}
      intro={[
        "Energy efficient glass helps Australian homes and commercial buildings stay more comfortable while reducing reliance on heating and cooling. For builders, architects, glaziers and property owners, the right glazing choice can make a noticeable difference to thermal performance, indoor comfort, UV protection and long‑term operating costs.",
        "GlassCo Australia supplies glass solutions that support modern building requirements, from Low‑E coated glass through to insulated glass units and customised combinations for residential and commercial projects.",
      ]}
      sections={[
        {
          heading: "What is energy efficient glass?",
          paragraphs: [
            "Energy efficient glass is a broad category of glazing designed to manage the movement of heat through windows, doors, facades and other glazed areas. Standard clear glass allows a large amount of heat to pass through, which can make interiors hotter in summer and colder in winter.",
            "Energy efficient glass improves this performance by using advanced coatings, selected glass thicknesses, laminated combinations or insulated glass unit construction. Low‑E (low emissivity) glass includes a microscopically thin coating that helps reflect radiant heat. When combined with an air gap, argon‑filled cavity or double‑glazed unit, it can further improve insulation and reduce unwanted heat transfer.",
          ],
        },
        {
          heading: "Why it matters for Australian buildings",
          paragraphs: [
            "In Melbourne and across Australia, buildings must deal with a mix of hot summer days, cold winter mornings, strong UV exposure and rising energy costs. Large windows and open-plan designs are popular because they bring in natural light and connect indoor spaces with outdoor views — but they can create comfort issues when the wrong glass is used.",
            "Energy efficient glass allows designers to keep the advantages of natural light while improving the way a building performs. It can help reduce heat gain, limit heat loss, protect furnishings from fading and support more stable indoor temperatures throughout the year.",
          ],
        },
        {
          heading: "A. Low‑E (Hard Coated)",
          paragraphs: [
            "Low‑E coatings reflect both solar and ambient heat, helping keep workspaces, offices or homes cooler in summer and reducing heat escaping through the glass in winter. The main objective is to improve comfort while reducing energy costs by lowering the U‑Value and improving energy efficiency.",
            "Low‑E coatings are made up of a sequence of almost invisible layers of various materials that reflect exterior and interior heat while still allowing natural light to pass through. Low‑E laminated glass can also reduce UV radiation by up to 99%, increasing the life of furniture and interior finishes.",
            "GlassCo Australia offers both laminated and monolithic Low‑E options, with many products also available in toughened form to achieve Grade A safety and security compliance.",
          ],
        },
        {
          heading: "Key benefits of Low‑E glass",
          bullets: [
            "Thermal insulation — reduces heat transfer through glazing",
            "Solar control — reduces solar heat gain in summer",
            "UV protection — protects furniture, flooring and artwork from fading",
            "Natural daylight — high visible light transmission",
            "Energy savings — reduced heating and cooling costs",
            "Enhanced comfort — fewer hot or cold spots near windows",
          ],
        },
        {
          heading: "Product options",
          bullets: [
            "Single glazing — improves performance over standard clear glass",
            "Laminated glass — adds safety, UV and acoustic benefits",
            "Toughened glass — for strength and Grade A safety compliance",
            "Insulated glass units (IGUs) — double or triple glazed for top performance",
            "Retrofit glazing — upgrade glazing without replacing window frames",
          ],
        },
        {
          heading: "B. Reflective Low‑E Glass — Evantage",
          paragraphs: [
            "Evantage is a high‑performance reflective Low‑E coated glass designed to deliver thermal insulation, solar control and glare reduction. It is manufactured using a pyrolytic Low‑E coating process — producing a durable coating that combines solar and thermal performance with subtle reflectivity.",
            "Evantage helps keep spaces cooler in summer and warmer in winter while also offering improved daytime privacy and an attractive reflective appearance. It can be incorporated into single glazed applications, laminated units, IGUs and combined laminated/insulated systems for enhanced performance.",
          ],
        },
        {
          heading: "Evantage — features & best applications",
          bullets: [
            "Improved thermal insulation and solar control",
            "Reduced glare and UV transmission",
            "Subtle reflective appearance with good light transmission",
            "Improved daytime privacy",
            "Suitable for apartments, hotels, offices, healthcare and residential",
            "Can be annealed, toughened, heat strengthened, laminated or used in IGUs",
          ],
        },
        {
          heading: "C. Luxeco (Soft Coat Low‑E)",
          paragraphs: [
            "Luxeco insulating glass units are designed to provide high levels of energy efficiency while maximising natural daylight and indoor comfort. Modern building design increasingly incorporates larger glazed areas to allow more daylight and stronger indoor‑outdoor connection — Luxeco is designed to support these trends while maintaining strong thermal insulation performance.",
            "Luxeco combines natural daylight transmission, thermal insulation and solar control performance, making it suitable for low energy and passive housing applications. Triple glazed configurations can achieve approximately 74% visible light transmission, helping maximise daylight and reduce reliance on artificial lighting.",
          ],
        },
        {
          heading: "Best applications for energy efficient glass",
          bullets: [
            "Residential homes and sliding doors",
            "Apartment developments",
            "Commercial facades and shopfronts",
            "Office buildings and schools",
            "Healthcare facilities and hotels",
            "Sustainable building and retrofit projects",
          ],
        },
      ]}
      faqs={[
        {
          q: "Is energy efficient glass only for new buildings?",
          a: "No. It can be used in new construction, renovations and selected replacement glazing projects, subject to frame compatibility and project requirements.",
        },
        {
          q: "Does Low‑E glass look different from clear glass?",
          a: "Some Low‑E products have a very neutral appearance, while others may have subtle tones or reflectivity depending on performance requirements.",
        },
        {
          q: "Can energy efficient glass also be safety glass?",
          a: "Yes. Energy efficient performance can often be combined with laminated or toughened safety glass depending on the application.",
        },
        {
          q: "Can Low‑E glass reduce UV damage?",
          a: "Yes. Many Low‑E products reduce UV transmission and help protect furnishings, flooring and interior finishes from fading.",
        },
        {
          q: "Is Evantage suitable for single glazing?",
          a: "Yes. Evantage is designed as a high‑performance single glazing Low‑E solution, while also being compatible with laminated and insulated glass units.",
        },
      ]}
    />
  );
}
