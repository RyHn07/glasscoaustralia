import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Home, Building2, Factory } from "lucide-react";
import heroResidential from "@/assets/hero/hero-residential.jpg.asset.json";
import heroCommercial from "@/assets/hero/hero-commercial.jpg.asset.json";
import heroIndustrial from "@/assets/hero/hero-industrial.jpg.asset.json";

const heroSlides = [heroResidential.url, heroCommercial.url, heroIndustrial.url];

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
  const [slideIndex, setSlideIndex] = useState(0);

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

          {/* Heading */}
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2.7rem, 7vw, 5.4rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#0a0a0a",
              margin: 0,
              whiteSpace: "nowrap",
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
              style={{ backgroundColor: "#009AAA", fontFamily: "Montserrat, sans-serif" }}
            >
              Get a Free Quote ›
            </Link>
            <Link
              to="/products"
              className="btn-animate rounded-md border px-7 py-4 text-sm font-semibold backdrop-blur hover:bg-white"
              style={{
                fontFamily: "Montserrat, sans-serif",
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
          {segments.map(({ to, title, subtitle, Icon, color }, idx) => (
            <Link
              key={to}
              to={to}
              onMouseEnter={() => setSlideIndex(idx)}
              onFocus={() => setSlideIndex(idx)}
              onClick={() => setSlideIndex(idx)}
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
                  style={{ fontFamily: "Montserrat, sans-serif", color }}
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
