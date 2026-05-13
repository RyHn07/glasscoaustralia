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
    <header className="absolute top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="relative flex h-14 w-20 rotate-45 items-center justify-center border-2 border-brand">
            <span className="-rotate-45 text-xs font-bold tracking-wider text-brand">
              GlassCo
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-foreground/90 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <a
            href="tel:0397065506"
            className="hidden items-center gap-2 text-sm font-semibold text-brand md:flex"
          >
            <Phone className="h-4 w-4" />
            (03) 9706 5506
          </a>
          <button className="rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
}
