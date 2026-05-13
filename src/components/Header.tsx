import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock } from "lucide-react";

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
      {/* Top bar */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-8 px-6 py-2.5 text-sm text-neutral-700">
          <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-black">
            <Mail className="h-4 w-4" style={{ color: "#009aaa" }} />
            info@example.com
          </a>
          <a href="tel:0397065506" className="flex items-center gap-2 hover:text-black">
            <Phone className="h-4 w-4" style={{ color: "#009aaa" }} />
            (03) 9706 5506
          </a>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" style={{ color: "#009aaa" }} />
            Mon - Fri: 8:00 AM - 5:00 PM
          </span>
        </div>
      </div>

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
              className="text-sm font-medium text-black/70 transition-colors hover:text-black"
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
