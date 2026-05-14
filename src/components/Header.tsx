import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="GlassCo" className="h-24 w-auto" />
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
