import { useEffect, useState } from "react";
import { MapPin, Diamond } from "lucide-react";
import heroImage from "@/assets/hero-glass.jpg";

const tags = ["MANUFACTURER", "SUPPLIER", "WHOLESALER", "PRECISION CUTTER", "IMPORTER"];

const rotatingWords = [
  "GLASS WHOLESALER",
  "GLASS PRECISION CUTTER",
  "GLASS MANUFACTURER",
  "GLASS PRECISION CUTTER",
  "GLASS SUPPLIER",
  "GLASS SUPPLIER",
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-full w-full overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Glass manufacturing warehouse"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
      </div>



      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pt-12" style={{ paddingBottom: "34px" }}>
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span
              className="block"
              style={{ width: "32px", height: "1px", backgroundColor: "rgb(0, 154, 170)" }}
            />
            <span
              style={{
                fontFamily: 'Geist, "Geist Fallback"',
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 700,
                letterSpacing: "normal",
                color: "rgb(0, 154, 170)",
                display: "inline-block",
                overflow: "hidden",
                height: "24px",
                verticalAlign: "bottom",
              }}
            >
              <span
                key={wordIndex}
                style={{
                  display: "inline-block",
                  animation: "rotateUp 0.6s ease-out",
                }}
              >
                {rotatingWords[wordIndex]}
              </span>
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Engineered
            <br />
            <span style={{ color: "rgb(0, 154, 170)" }}>From Raw</span>
            <br />
            Glass.
          </h1>

          {/* Description */}
          <p
            className="mt-8 text-base leading-relaxed text-foreground/80"
            style={{ fontFamily: "Poppins, sans-serif", fontStyle: "normal", fontWeight: 400, maxWidth: "640px" }}
          >
            We manufacture premium glass from source — supplying builders,
            <br />
            architects & retailers across Australia.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="rounded-md px-7 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#009AAA", fontFamily: "Rajdhani, sans-serif" }}
            >
              Get a Free Quote  ›
            </button>
            <button
              className="rounded-md border border-foreground/30 bg-background/40 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-background/60"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              View Products
            </button>
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
            {tags.map((tag, i) => (
              <div key={tag} className="flex items-center gap-4">
                <span
                  className="text-xs tracking-widest text-foreground/70"
                  style={{ fontFamily: "Poppins, sans-serif", fontStyle: "normal", fontWeight: 400 }}
                >
                  {tag}
                </span>
                {i < tags.length - 1 && (
                  <Diamond className="h-2 w-2 fill-brand text-brand" />
                )}
              </div>
            ))}
          </div>

          {/* Address */}
          <div
            className="mt-6 flex items-center gap-2 text-sm text-foreground/70"
            style={{ fontFamily: "Poppins, sans-serif", fontStyle: "normal", fontWeight: 400 }}
          >
            <MapPin className="h-4 w-4 text-brand" />
            370-372 Hammond Rd, Dandenong South VIC 3175
          </div>
        </div>
      </div>

      {/* Bottom hazard tape */}
      <div
        className="absolute bottom-32 left-0 right-0 h-6 opacity-90"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #1a1a1a 0 20px, #f5c518 20px 40px)",
        }}
      />
    </section>
  );
}
