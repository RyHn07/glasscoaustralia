import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.141 0-3.504.012-4.74.068-.929.042-1.434.198-1.77.331-.444.173-.762.379-1.095.712-.333.333-.539.651-.712 1.095-.133.336-.289.841-.331 1.77-.056 1.236-.068 1.599-.068 4.74s.012 3.504.068 4.74c.042.929.198 1.434.331 1.77.173.444.379.762.712 1.095.333.333.651.539 1.095.712.336.133.841.289 1.77.331 1.236.056 1.599.068 4.74.068s3.504-.012 4.74-.068c.929-.042 1.434-.198 1.77-.331.444-.173.762-.379 1.095-.712.333-.333.539-.651.712-1.095.133-.336.289-.841.331-1.77.056-1.236.068-1.599.068-4.74s-.012-3.504-.068-4.74c-.042-.929-.198-1.434-.331-1.77-.173-.444-.379-.762-.712-1.095-.333-.333-.651-.539-1.095-.712-.336-.133-.841-.289-1.77-.331-1.236-.056-1.599-.068-4.74-.068zm0 3.064A4.971 4.971 0 1 1 12 16.97 4.971 4.971 0 0 1 12 7.029zm0 8.2a3.229 3.229 0 1 0 0-6.458 3.229 3.229 0 0 0 0 6.458zm6.538-8.39a1.162 1.162 0 1 1-2.324 0 1.162 1.162 0 0 1 2.324 0z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const contactItems = [
  {
    Icon: Phone,
    label: "Call Us",
    lines: ["(03) 9706 5506"],
  },
  {
    Icon: Mail,
    label: "Email",
    lines: ["info@glasscoaustralia.com.au", "orders@glasscoaustralia.com.au"],
  },
  {
    Icon: MapPin,
    label: "Visit",
    lines: ["Melbourne, Victoria, Australia"],
  },
  {
    Icon: Clock,
    label: "Hours",
    lines: ["Mon - Fri: 8AM - 6PM"],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-20">
        {/* Top: Brand + Contact grid */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1.4fr] lg:gap-20">
          {/* Brand */}
          <div>
            <img src={logo} alt="GlassCo Australia" className="h-16 w-auto" />
            <p
              className="mt-6 max-w-md text-white/70"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.8 }}
            >
              Australia's leading glass and glazing solutions provider, delivering excellence
              since 1993. Trusted by builders, architects and homeowners across the country.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:-translate-y-0.5 hover:bg-[#009AAA] hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact grid */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span
                className="block"
                style={{ width: "32px", height: "1px", backgroundColor: "#009AAA" }}
              />
              <span
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#009AAA",
                }}
              >
                GET IN TOUCH
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {contactItems.map(({ Icon, label, lines }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#009AAA]/40 hover:bg-white/[0.05]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#009AAA]/15 text-[#009AAA]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {label.toUpperCase()}
                    </div>
                    <div className="mt-1.5 space-y-0.5">
                      {lines.map((line) => (
                        <div
                          key={line}
                          className="break-words text-white"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                            lineHeight: 1.55,
                          }}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div
            className="flex flex-col items-center justify-between gap-4 md:flex-row"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "13px" }}
          >
            <p className="text-white/60">
              © {new Date().getFullYear()} GlassCo Australia. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-white/70">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <Link to="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
