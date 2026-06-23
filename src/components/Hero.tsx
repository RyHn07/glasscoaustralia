import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Home, Building2, Factory } from "lucide-react";
import heroImage from "@/assets/hero-glass.jpg";
import heroImage2 from "@/assets/hero-glass-2.jpg";
import heroImage3 from "@/assets/hero-glass-3.jpg";

const rotatingWords = [
  "GLASS WHOLESALER",
  "GLASS PRECISION CUTTER",
  "GLASS MANUFACTURER",
  "GLASS PRECISION CUTTER",
  "GLASS SUPPLIER",
  "GLASS SUPPLIER",
];

const heroSlides = [heroImage, heroImage2, heroImage3];

type Segment = {
  to: "/solutions/residential" | "/solutions/commercial" | "/solutions/industrial-automotive";
  title: string;
  subtitle: string;
  Icon: typeof Home;
  color: string;
};

const segments: Segment[] = [
  { to: "/solutions/residential", title: "RESIDENTIAL", subtitle: "Home Glass Solutions", Icon: Home, color: "#F59E0B" },
  { to: "/solutions/commercial", title: "COMMERCIAL", subtitle: "Offices, Retail & Hospitality", Icon: Building2, color: "#C026D3" },
  { to: "/solutions/industrial-automotive", title: "INDUSTRIAL & AUTOMOTIVE", subtitle: "Engineered Performance", Icon: Factory, color: "#009AAA" },
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-full w-full overflow-hidden bg-background">
      {/* Background image slider with Ken Burns zoom */}
      <div className="absolute inset-0">
        {heroSlides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden={i !== slideIndex}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === slideIndex ? "opacity-100 hero-zoom" : "opacity-0"
            }`}
          />
        ))}
        <style>{`
          @keyframes heroKenBurns {
            0% { transform: scale(1.05); }
            100% { transform: scale(1.18); }
          }
          .hero-zoom { animation: heroKenBurns 7s ease-out forwards; }
        `}</style>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center px-6 pb-[140px] text-center">
        <div className="flex w-full max-w-3xl flex-col items-center">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="block" style={{ width: "32px", height: "1px", backgroundColor: "rgb(0, 154, 170)" }} />
            <span
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 700,
                color: "#007A87",
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                height: "24px",
                minWidth: "220px",
              }}
            >
              {rotatingWords.map((word, i) => (
                <span
                  key={i}
                  style={{
                    position: i === wordIndex ? "relative" : "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    animation:
                      i === wordIndex
                        ? "rotateInUp 0.6s ease-out forwards"
                        : i === (wordIndex - 1 + rotatingWords.length) % rotatingWords.length
                          ? "rotateOutUp 0.6s ease-out forwards"
                          : "none",
                    opacity:
                      i === wordIndex || i === (wordIndex - 1 + rotatingWords.length) % rotatingWords.length ? 1 : 0,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="block" style={{ width: "32px", height: "1px", backgroundColor: "rgb(0, 154, 170)" }} />
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#0a0a0a",
              margin: 0,
            }}
          >
            GlassCo <span style={{ color: "rgb(0, 154, 170)" }}>Australia</span>
          </h1>

          {/* Tagline */}
          <p
            className="mt-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
              color: "#0a0a0a",
              letterSpacing: "0.01em",
            }}
          >
            Your Vision <span style={{ color: "rgb(0, 154, 170)" }}>–</span> Our Glass Solution{" "}
            <span style={{ color: "rgb(0, 154, 170)" }}>–</span> Exceptional Quality
          </p>

          {/* Description */}
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400, maxWidth: "640px", color: "#262626" }}
          >
            From homes to businesses, industries to vehicles — premium glass solutions tailored to your needs.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="btn-animate rounded-md px-7 py-4 text-sm font-semibold text-white hover:opacity-95"
              style={{ backgroundColor: "#009AAA", fontFamily: "Rajdhani, sans-serif" }}
            >
              Get a Free Quote ›
            </Link>
            <Link
              to="/products"
              className="btn-animate rounded-md border px-7 py-4 text-sm font-semibold backdrop-blur hover:bg-white"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                borderColor: "rgba(10,10,10,0.3)",
                backgroundColor: "rgba(255,255,255,0.6)",
                color: "#0a0a0a",
              }}
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom segment menu — full width, aligned with hero image */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {segments.map(({ to, title, subtitle, Icon, color }) => (
            <Link
              key={to}
              to={to}
              className="group relative flex items-center gap-3 overflow-hidden rounded-lg border border-white/40 bg-white/85 px-5 py-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
              style={{ ["--seg-color" as any]: color }}
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white transition-transform group-hover:scale-105"
                style={{ backgroundColor: color }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span
                  className="block truncate text-[15px] font-bold tracking-wide transition-colors"
                  style={{ fontFamily: "Rajdhani, sans-serif", color }}
                >
                  {title}
                </span>
                <span
                  className="block truncate text-[12px] text-neutral-600"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {subtitle}
                </span>
              </span>
              <span
                className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: color }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
