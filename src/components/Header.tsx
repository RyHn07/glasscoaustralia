import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";

const productItems = [
  {
    label: "Acoustic Glass",
    description: "Noise reduction for quieter interiors",
    to: "/products/acoustic-glass" as const,
  },
  {
    label: "Decorative Glass",
    description: "Patterned, printed, mirror & ultra clear",
    to: "/products/decorative-glass" as const,
  },
  {
    label: "Energy Efficient Glass",
    description: "Low‑E, IGUs and solar control glazing",
    to: "/products/energy-efficient-glass" as const,
  },
  {
    label: "Digital Glass Printing",
    description: "High-resolution ceramic printing on glass",
    to: "/products/digital-glass-printing" as const,
  },
];

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Services", to: "/" as const },
  { label: "Why Us", to: "/" as const },
  { label: "Projects", to: "/" as const },
  { label: "Contact", to: "/" as const },
];

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header
      className="relative z-50 w-full bg-white"
      style={{ fontFamily: '"Geist", "Geist Fallback", sans-serif', fontSize: "15px", fontWeight: 500 }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="GlassCo" className="h-24 w-auto" />
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/" className="text-[15px] font-medium text-black/70 transition-colors hover:text-black">
            Home
          </Link>
          <Link to="/about" className="text-[15px] font-medium text-black/70 transition-colors hover:text-black">
            About Us
          </Link>
          <Link to="/" className="text-[15px] font-medium text-black/70 transition-colors hover:text-black">
            Services
          </Link>

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
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setProductsOpen(false)}
                      className="block rounded-md px-3 py-3 transition-colors hover:bg-neutral-50"
                    >
                      <div className="text-sm font-semibold text-neutral-900">{item.label}</div>
                      <div className="mt-0.5 text-xs text-neutral-500">{item.description}</div>
                    </Link>
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
        <div className="flex items-center gap-6">
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
