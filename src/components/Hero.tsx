import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
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
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src="/hero-bg.mov"
          poster={heroImage}
          autoPlay
          muted
          loop
          playsInline
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
                position: "relative",
                overflow: "hidden",
                height: "24px",
                verticalAlign: "bottom",
                minWidth: "200px",
              }}
            >
              {rotatingWords.map((word, i) => (
                <span
                  key={i}
                  style={{
                    position: i === wordIndex ? "relative" : "absolute",
                    left: 0,
                    top: 0,
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    animation:
                      i === wordIndex
                        ? "rotateInUp 0.6s ease-out forwards"
                        : i === (wordIndex - 1 + rotatingWords.length) % rotatingWords.length
                          ? "rotateOutUp 0.6s ease-out forwards"
                          : "none",
                    opacity: i === wordIndex || i === (wordIndex - 1 + rotatingWords.length) % rotatingWords.length ? 1 : 0,
                  }}
                >
                  {word}
                </span>
              ))}
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
                  <span style={{ color: "rgb(0, 154, 170)", fontSize: "12px", lineHeight: 1 }}>✦</span>
                )}
              </div>
            ))}
          </div>

          {/* Address */}
          <div
            className="mt-6 flex items-center gap-2 text-sm text-foreground/70"
            style={{ fontFamily: "Poppins, sans-serif", fontStyle: "normal", fontWeight: 400 }}
          >
            <MapPin className="h-4 w-4" style={{ color: "rgb(0, 154, 170)" }} />
            370-372 Hammond Rd, Dandenong South VIC 3175
          </div>
        </div>
      </div>

    </section>
  );
}
