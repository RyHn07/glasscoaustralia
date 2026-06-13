import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";

type ProductItem = {
  label: string;
  description: string;
  to:
    | "/products/clear-float-glass"
    | "/products/clear-laminated-glass"
    | "/products/low-iron-glass"
    | "/products/security-glass-assault-shield"
    | "/products/acoustic-glass"
    | "/products/decorative-glass"
    | "/products/energy-efficient-glass"
    | "/products/automotive-glass";
  children?: { label: string; hash: string }[];
};

const productItems: ProductItem[] = [

  {
    label: "Acoustic Glass",
    description: "Noise reduction for quieter interiors",
    to: "/products/acoustic-glass",
  },
  {
    label: "Decorative Glass",
    description: "Patterned, printed, mirror & ultra clear",
    to: "/products/decorative-glass",
  },
  {
    label: "Energy Efficient Glass",
    description: "Low‑E, IGUs and solar control glazing",
    to: "/products/energy-efficient-glass",
    children: [
      { label: "Low‑E (Hard Coated)", hash: "lowe" },
      { label: "Evantage — Reflective Low‑E", hash: "evantage" },
      { label: "Luxeco (Soft Coat Low‑E)", hash: "luxeco" },
    ],
  },
  {
    label: "Automotive Glass",
    description: "Laminated safety & toughened printed automotive glass",
    to: "/products/automotive-glass",
  },
];

type ServiceItem = {
  label: string;
  description: string;
  to:
    | "/services"
    | "/services/toughening-heat-strengthening"
    | "/services/igu"
    | "/services/glass-processing"
    | "/services/digital-glass-printing";
  hash?: string;
  children?: { label: string; hash: string }[];
};

const serviceItems: ServiceItem[] = [
  {
    label: "Toughening & Heat Strengthening",
    description: "NorthGlass horizontal toughening furnace",
    to: "/services/toughening-heat-strengthening",
  },
  {
    label: "Insulating Glass Units (IGU)",
    description: "LISEC fully automated IGU line with Argon fill",
    to: "/services/igu",
  },
  {
    label: "Glass Processing",
    description: "CNC, waterjet & precision edge processing",
    to: "/services/glass-processing",
    children: [
      { label: "CNC Line — SKILL E-D", hash: "cnc-line" },
      { label: "TECHNI Intec Waterjet", hash: "waterjet" },
      { label: "Bimatech Techno Edge", hash: "bimatech" },
    ],
  },
  {
    label: "Digital Glass Printing",
    description: "Ceramic frit printed glass for design & facades",
    to: "/services/digital-glass-printing",
  },
];

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Our Certification", to: "/certifications" as const },
  { label: "Resources", to: "/resources" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div
        className="w-full text-white"
        style={{ backgroundColor: "#009AAA", fontFamily: '"Rajdhani", sans-serif' }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-2">
          <div className="flex items-center gap-2 text-[13px] font-semibold tracking-wide md:text-sm">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="truncate">370-372 Hammond Rd, Dandenong South VIC 3175</span>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <a
              href="tel:+61397065506"
              className="flex items-center gap-2.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold tracking-wide">(03) 9706 5506</span>
                <span className="block text-[11px] text-white/85">Call us today</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <header
        className="w-full bg-white/95 backdrop-blur transition-shadow"
        style={{
          fontFamily: '"Geist", "Geist Fallback", sans-serif',
          fontSize: "15px",
          fontWeight: 500,
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
        }}
      >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="GlassCo"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-14" : "h-24"}`}
          />
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/" className="text-[15px] font-medium text-black/70 transition-colors hover:text-black">
            Home
          </Link>
          <Link to="/about" className="text-[15px] font-medium text-black/70 transition-colors hover:text-black">
            About Us
          </Link>
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              onClick={() => setServicesOpen(false)}
              className="flex items-center gap-1 text-[15px] font-medium text-black/70 transition-colors hover:text-black"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </Link>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <div
                  className="w-[400px] overflow-hidden rounded-xl border border-neutral-200/80 bg-white p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150"
                >
                  {serviceItems.map((item, idx) => (
                    <div key={item.label}>
                      {idx > 0 && <div className="my-1 h-px bg-neutral-100" />}
                      <Link
                        to={item.to}
                        onClick={() => setServicesOpen(false)}
                        className="group/item block rounded-lg px-3 py-2.5 transition-all hover:bg-[#009AAA]/5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-base font-semibold text-neutral-900 transition-colors group-hover/item:text-[#009AAA]">
                            {item.label}
                          </div>
                          <span className="text-[#009AAA] opacity-0 transition-all -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-base">→</span>
                        </div>
                      </Link>
                      {item.children && (
                        <div className="ml-4 mb-1 mt-0.5 border-l-2 border-[#009AAA]/20 pl-2">
                          {item.children.map((c) => (
                            <Link
                              key={c.hash}
                              to={item.to}
                              hash={c.hash}
                              onClick={() => setServicesOpen(false)}
                              className="block rounded-md px-2.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-[#009AAA]/5 hover:text-[#009AAA]"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              to="/products"
              className="flex items-center gap-1 text-[15px] font-medium text-black/70 transition-colors hover:text-black"
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
              />
            </Link>


            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <div
                  className="w-[360px] overflow-hidden rounded-xl border border-neutral-200/80 bg-white p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150"
                >
                  {productItems.map((item, idx) => (
                    <div key={item.to}>
                      {idx > 0 && <div className="my-1 h-px bg-neutral-100" />}
                      <Link
                        to={item.to}
                        onClick={() => setProductsOpen(false)}
                        className="group/item block rounded-lg px-3 py-2.5 transition-all hover:bg-[#009AAA]/5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-base font-semibold text-neutral-900 transition-colors group-hover/item:text-[#009AAA]">
                            {item.label}
                          </div>
                          <span className="text-[#009AAA] opacity-0 transition-all -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-base">→</span>
                        </div>
                        
                      </Link>
                      {item.children && (
                        <div className="ml-4 mb-1 mt-0.5 border-l-2 border-[#009AAA]/20 pl-2">
                          {item.children.map((c) => (
                            <Link
                              key={c.hash}
                              to={item.to}
                              hash={c.hash}
                              onClick={() => setProductsOpen(false)}
                              className="block rounded-md px-2.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-[#009AAA]/5 hover:text-[#009AAA]"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="my-1 h-px bg-neutral-100" />
                  <Link
                    to="/products"
                    onClick={() => setProductsOpen(false)}
                    className="mt-1 block rounded-lg bg-[#009AAA]/5 px-3 py-2.5 text-sm font-semibold text-[#009AAA] transition-all hover:bg-[#009AAA]/10"
                  >
                    View all products →
                  </Link>

                </div>
              </div>
            )}
          </div>

          {navItems
            .filter((i) => !["Home", "About Us", "Services"].includes(i.label))
            .map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-[15px] font-medium text-black/70 transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            to="/quote"
            className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            Get Quote
          </Link>
        </div>
      </div>
      </header>
    </div>
  );
}

