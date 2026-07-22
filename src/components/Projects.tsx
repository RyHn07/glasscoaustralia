import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteImage } from "@/lib/site-images";
import officeImg from "@/assets/project-office.jpg";
import coastalImg from "@/assets/project-coastal.jpg";
import retailImg from "@/assets/project-retail.jpg";
import heritageImg from "@/assets/project-heritage.jpg";
import atriumImg from "@/assets/project-atrium.jpg";
import curvedImg from "@/assets/project-curved.jpg";

const images = [
  { src: officeImg, slot: "home-project-office", alt: "Modern angular glass facade at dusk", area: "a" },
  { src: retailImg, slot: "home-project-retail", alt: "Commercial glazing project under construction", area: "b" },
  { src: coastalImg, slot: "home-project-coastal", alt: "Glass facade reflecting cloudy sky", area: "c" },
  { src: atriumImg, slot: "home-project-atrium", alt: "Outdoor patio with sliding glass doors", area: "d" },
  { src: curvedImg, slot: "home-project-curved", alt: "Reflective blue glass facade", area: "e" },
  { src: heritageImg, slot: "home-project-heritage", alt: "Residential home with large glazed windows", area: "f" },
];

export function Projects() {
  return (
    <section className="w-full bg-neutral-50 py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="block"
                style={{ width: "32px", height: "1px", backgroundColor: "#009AAA" }}
              />
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#009AAA",
                }}
              >
                OUR WORK
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.025rem, 5vw, 3.6rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Featured <span style={{ color: "#009AAA" }}>Projects</span>
            </h2>
          </div>
          <p
            className="text-neutral-600 lg:text-right"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            From beachfront homes to 45-storey towers — every project is a showcase of GlassCo's
            precision and craftsmanship.
          </p>
        </div>

        {/* Structured grid gallery */}
        <div
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gridTemplateAreas: `"a a b" "c d e" "c d f"`,
            gridAutoRows: "280px",
          }}
        >
          {images.map((img) => (
            <div
              key={img.alt}
              className="group relative overflow-hidden rounded-xl bg-neutral-100 max-lg:aspect-[4/3]"
              style={{ gridArea: img.area }}
            >
              <SiteImage
                slot={img.slot}
                fallback={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/gallery"
            className="btn-animate inline-flex items-center gap-2 rounded-md bg-neutral-900 px-7 py-4 text-sm font-semibold text-white hover:opacity-95"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
    </section>
  );
}
