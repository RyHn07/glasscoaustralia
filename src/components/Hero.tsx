import { Phone, Store, MapPin, Diamond } from "lucide-react";
import heroImage from "@/assets/hero-glass.jpg";

const tags = ["MANUFACTURER", "SUPPLIER", "WHOLESALER", "PRECISION CUTTER", "IMPORTER"];

export function Hero() {
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

      {/* Floating left phone tab */}
      <div className="absolute left-0 top-8 z-10 flex items-center gap-2 rounded-r-md bg-background/90 px-4 py-3 backdrop-blur">
        <Phone className="h-4 w-4 text-brand" />
        <span className="text-sm font-semibold text-foreground">(03) 9034 6146</span>
      </div>

      {/* Floating right hours tab */}
      <div className="absolute right-0 top-8 z-10 flex items-center gap-2 rounded-l-md bg-background/90 px-4 py-3 backdrop-blur">
        <Store className="h-4 w-4 text-brand" />
        <span className="text-sm font-semibold text-foreground">
          Mon - Fri  8am - 5pm
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 py-12">
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
                letterSpacing: "0.2em",
                color: "rgb(0, 154, 170)",
              }}
            >
              GLASS IMPORTER
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontSize: "96px",
              fontWeight: 700,
              lineHeight: "100.8px",
              color: "rgb(0, 154, 170)",
              margin: 0,
            }}
          >
            Engineered
            <br />
            From Raw
            <br />
            Glass.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/80">
            We manufacture premium glass from source — supplying builders,
            architects & retailers across Australia.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-md bg-brand px-7 py-4 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90">
              Get a Free Quote  ›
            </button>
            <button className="rounded-md border border-foreground/30 bg-background/40 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-background/60">
              View Products
            </button>
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
            {tags.map((tag, i) => (
              <div key={tag} className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-widest text-foreground/70">
                  {tag}
                </span>
                {i < tags.length - 1 && (
                  <Diamond className="h-2 w-2 fill-brand text-brand" />
                )}
              </div>
            ))}
          </div>

          {/* Address */}
          <div className="mt-6 flex items-center gap-2 text-sm text-foreground/70">
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
