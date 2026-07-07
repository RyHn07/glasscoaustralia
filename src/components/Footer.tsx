import type { ReactNode } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11C3 7.229 3 5.343 4.172 4.172C5.344 3.001 7.229 3 11 3H13C16.771 3 18.657 3 19.828 4.172C20.999 5.344 21 7.229 21 11V13C21 16.771 21 18.657 19.828 19.828C18.656 20.999 16.771 21 13 21H11C7.229 21 5.343 21 4.172 19.828C3.001 18.656 3 16.771 3 13V11ZM18 7.5C18 7.89782 17.842 8.27936 17.5607 8.56066C17.2794 8.84196 16.8978 9 16.5 9C16.1022 9 15.7206 8.84196 15.4393 8.56066C15.158 8.27936 15 7.89782 15 7.5C15 7.10218 15.158 6.72064 15.4393 6.43934C15.7206 6.15804 16.1022 6 16.5 6C16.8978 6 17.2794 6.15804 17.5607 6.43934C17.842 6.72064 18 7.10218 18 7.5ZM14 13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15C11.4696 15 10.9609 14.7893 10.5858 14.4142C10.2107 14.0391 10 13.5304 10 13C10 12.4696 10.2107 11.9609 10.5858 11.5858C10.9609 11.2107 11.4696 11 12 11C12.5304 11 13.0391 11.2107 13.4142 11.5858C13.7893 11.9609 14 12.4696 14 13ZM16 13C16 14.0609 15.5786 15.0783 14.8284 15.8284C14.0783 16.5786 13.0609 17 12 17C10.9391 17 9.92172 16.5786 9.17157 15.8284C8.42143 15.0783 8 14.0609 8 13C8 11.9391 8.42143 10.9217 9.17157 10.1716C9.92172 9.42143 10.9391 9 12 9C13.0609 9 14.0783 9.42143 14.8284 10.1716C15.5786 10.9217 16 11.9391 16 13Z"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
    ),
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
    lines: ["370–372 Hammond Road, Dandenong"],
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
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[40fr_60fr] lg:gap-20">
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
                    {s.icon}
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
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
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
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "9px",
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
