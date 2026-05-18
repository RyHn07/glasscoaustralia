import { Phone, Mail, Clock } from "lucide-react";

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.32.79.74 1.46 1.38 2.13.67.64 1.34 1.06 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

const quickLinks: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products/energy-efficient-glass" },
  { label: "Projects", to: "/gallery" },
  { label: "About Us", to: "/about" },
];
const services: { label: string; to: string }[] = [
  { label: "Glass Processing", to: "/services/glass-processing" },
  { label: "IGU Manufacturing", to: "/services/igu" },
  { label: "Toughening & Heat Strengthening", to: "/services/toughening-heat-strengthening" },
  { label: "Digital Glass Printing", to: "/products/digital-glass-printing" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={logo} alt="GlassCo Australia" className="h-16 w-auto" />
            <p
              className="mt-6 text-white/70"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", lineHeight: 1.7 }}
            >
              Australia's leading glass and glazing solutions provider, delivering excellence
              since 1993.
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
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[18px] w-[18px]"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/70 transition-colors hover:text-white"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-white/70 transition-colors hover:text-white"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-white/70" />
                <div>
                  <div
                    className="text-white"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 500 }}
                  >
                    Call Us
                  </div>
                  <div
                    className="mt-1 text-white/70"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
                  >
                    (03) 9706 5506
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-white/70" />
                <div>
                  <div
                    className="text-white"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 500 }}
                  >
                    Email
                  </div>
                  <div
                    className="mt-1 text-white/70"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
                  >
                    info@glasscoaustralia.com.au
                  </div>
                  <div
                    className="mt-1 text-white/70"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
                  >
                    orders@glasscoaustralia.com.au
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-white/70" />
                <div>
                  <div
                    className="text-white"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 500 }}
                  >
                    Hours
                  </div>
                  <div
                    className="mt-1 text-white/70"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
                  >
                    Mon - Fri: 8AM - 6PM
                  </div>
                </div>
              </li>
            </ul>
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
