import { MessageSquare, Phone, Mail, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Contact() {
  return (
    <section className="w-full bg-neutral-100 py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div
          className="relative overflow-hidden rounded-3xl px-10 py-16 md:px-16 md:py-20"
          style={{ backgroundColor: "#009AAA" }}
        >
          {/* Subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            {/* Left */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="block"
                  style={{ width: "32px", height: "1px", backgroundColor: "#ffffff" }}
                />
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "11.2px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "#ffffff",
                  }}
                >
                  GET IN TOUCH
                </span>
              </div>
              <h2
                className="text-white"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                Ready to Start Your
                <br />
                Glass Project?
              </h2>
              <p
                className="mt-6 max-w-xl text-white/90"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
              >
                Whether you need a single cut or a full commercial supply — our team is ready. Get
                a free quote in 24 hours.
              </p>
            </div>

            {/* Right buttons */}
            <div className="flex flex-col gap-4 lg:w-[240px]">
              <Link
                to="/quote"
                className="btn-animate inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold hover:opacity-95"
                style={{ color: "#009AAA", fontFamily: "Montserrat, sans-serif" }}
              >
                <MessageSquare className="h-4 w-4" />
                Request a Free Quote
                <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+61397065506"
                className="btn-animate inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <Phone className="h-4 w-4" />
                (03) 9706 5506
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mt-12 h-px w-full bg-white/25" />

          {/* Contact info row */}
          <div className="relative mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white/15 text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div
                  className="text-white/80"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "9.6px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                  }}
                >
                  CALL US
                </div>
                <div
                  className="mt-1 text-white"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14.4px",
                    fontWeight: 700,
                  }}
                >
                  (03) 9706 5506
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white/15 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div
                  className="text-white/80"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "9.6px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                  }}
                >
                  EMAIL US
                </div>
                <div
                  className="mt-1 text-white"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14.4px",
                    fontWeight: 700,
                  }}
                >
                  info@glasscoaustralia.com.au
                </div>
                <div
                  className="text-white/90"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12.8px",
                    fontWeight: 600,
                  }}
                >
                  orders@glasscoaustralia.com.au
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
