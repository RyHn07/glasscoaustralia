import officeImg from "@/assets/project-office.jpg";
import coastalImg from "@/assets/project-coastal.jpg";
import retailImg from "@/assets/project-retail.jpg";
import heritageImg from "@/assets/project-heritage.jpg";
import atriumImg from "@/assets/project-atrium.jpg";
import curvedImg from "@/assets/project-curved.jpg";

const images = [
  { src: officeImg, alt: "Modern glass office complex", span: 2 },
  { src: coastalImg, alt: "Coastal luxury home with glass windows", span: 1 },
  { src: retailImg, alt: "Luxury retail glass storefront", span: 1 },
  { src: atriumImg, alt: "Glass atrium interior", span: 2 },
  { src: curvedImg, alt: "Curved glass facade", span: 2 },
  { src: heritageImg, alt: "Heritage Victorian building restoration", span: 1 },
];

export function Projects() {
  return (
    <section className="w-full bg-white py-24">
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
                  fontFamily: "Rajdhani, sans-serif",
                  fontSize: "14px",
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
                fontFamily: "Rajdhani, sans-serif",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
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
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.alt}
              className={`group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 ${
                img.span === 2 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
