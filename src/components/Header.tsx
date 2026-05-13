import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/" },
  { label: "Services", to: "/" },
  { label: "Products", to: "/" },
  { label: "Why Us", to: "/" },
  { label: "Projects", to: "/" },
  { label: "Contact", to: "/" },
];

export function Header() {
  return (
    <header
      className="relative z-50 w-full bg-white"
      style={{ fontFamily: '"Geist", "Geist Fallback", sans-serif', fontSize: "14px", fontWeight: 500 }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-widest text-neutral-900">
            LOGO
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-neutral-800 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <a
            href="tel:0397065506"
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#009aaa" }}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(0, 154, 170, 0.12)" }}
            >
              <Phone className="h-4 w-4" />
            </span>
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
