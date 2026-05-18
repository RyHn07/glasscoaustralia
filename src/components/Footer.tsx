import { Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "YouTube", href: "#", Icon: Youtube },
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
