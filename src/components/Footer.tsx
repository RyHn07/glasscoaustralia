import { Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.svg";

const quickLinks = ["Home", "Services", "Products", "Projects", "About Us"];
const services = [
  "Residential Glass",
  "Commercial Solutions",
  "Safety Glass",
"Glass Repairs",
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
            <div className="mt-8 flex items-center gap-5 text-white/70">
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="transition-colors hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
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
                <li key={l}>
                  <a
                    href="#"
                    className="text-white/70 transition-colors hover:text-white"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
                  >
                    {l}
                  </a>
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
                <li key={s}>
                  <a
                    href="#"
                    className="text-white/70 transition-colors hover:text-white"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
                  >
                    {s}
                  </a>
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
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
