import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";

type ProductItem = {
  label: string;
  description: string;
  to:
    | "/products/acoustic-glass"
    | "/products/decorative-glass"
    | "/products/energy-efficient-glass"
    | "/products/digital-glass-printing";
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
    label: "Digital Glass Printing",
    description: "High-resolution ceramic printing on glass",
    to: "/products/digital-glass-printing",
  },
];

type ServiceItem = {
  label: string;
  description: string;
  to: "/services/toughening-heat-strengthening" | "/services/igu" | "/services/glass-processing";
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
];

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Services", to: "/" as const },
  { label: "Gallery", to: "/" as const },
  { label: "Our Certification", to: "/" as const },
  { label: "Contact", to: "/" as const },
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
    <header
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow"
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
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 text-[15px] font-medium text-black/70 transition-colors hover:text-black"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <div className="w-[380px] rounded-lg border border-neutral-200 bg-white p-2 shadow-xl">
                  {serviceItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        to={item.to}
                        onClick={() => setServicesOpen(false)}
                        className="block rounded-md px-3 py-3 transition-colors hover:bg-neutral-50"
                      >
                        <div className="text-sm font-semibold text-neutral-900">{item.label}</div>
                        <div className="mt-0.5 text-xs text-neutral-500">{item.description}</div>
                      </Link>
                      {item.children && (
                        <div className="ml-3 mb-1 border-l border-neutral-200 pl-3">
                          {item.children.map((c) => (
                            <Link
                              key={c.hash}
                              to={item.to}
                              hash={c.hash}
                              onClick={() => setServicesOpen(false)}
                              className="block rounded-md px-2 py-1.5 text-xs text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                            >
                              › {c.label}
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
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              className="flex items-center gap-1 text-[15px] font-medium text-black/70 transition-colors hover:text-black"
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <div className="w-[340px] rounded-lg border border-neutral-200 bg-white p-2 shadow-xl">
                  {productItems.map((item) => (
                    <div key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setProductsOpen(false)}
                        className="block rounded-md px-3 py-3 transition-colors hover:bg-neutral-50"
                      >
                        <div className="text-sm font-semibold text-neutral-900">{item.label}</div>
                        <div className="mt-0.5 text-xs text-neutral-500">{item.description}</div>
                      </Link>
                      {item.children && (
                        <div className="ml-3 mb-1 border-l border-neutral-200 pl-3">
                          {item.children.map((c) => (
                            <Link
                              key={c.hash}
                              to={item.to}
                              hash={c.hash}
                              onClick={() => setProductsOpen(false)}
                              className="block rounded-md px-2 py-1.5 text-xs text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                            >
                              › {c.label}
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
          <a
            href="tel:+61397065506"
            className="hidden items-center gap-2 text-sm font-semibold text-neutral-900 transition-opacity hover:opacity-80 md:inline-flex"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            <Phone className="h-4 w-4" />
            (03) 9706 5506
          </a>
          <button
            className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
}
