import { Star } from "lucide-react";
import sarahImg from "@/assets/avatar-sarah.jpg";
import jamesImg from "@/assets/avatar-james.jpg";
import emmaImg from "@/assets/avatar-emma.jpg";
import davidImg from "@/assets/avatar-david.jpg";

const testimonials = [
  {
    quote:
      "GlassCo transformed our home with beautiful, energy-efficient windows. The installation was seamless and the team incredibly professional.",
    name: "Sarah Mitchell",
    role: "HOMEOWNER",
    avatar: sarahImg,
  },
  {
    quote:
      "Working with GlassCo on our commercial project was a pleasure. Their expertise and attention to detail are unmatched in the industry.",
    name: "James Chen",
    role: "ARCHITECT",
    avatar: jamesImg,
  },
  {
    quote:
      "Outstanding service from start to finish. The smart glass installation exceeded our expectations and improved our building efficiency significantly.",
    name: "Emma Rodriguez",
    role: "PROPERTY MANAGER",
    avatar: emmaImg,
  },
  {
    quote:
      "I recommend GlassCo to all my clients. Their products are premium quality and their customer service is exceptional every single time.",
    name: "David Thompson",
    role: "BUILDER",
    avatar: davidImg,
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-24" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="block"
                style={{ width: "32px", height: "1px", backgroundColor: "#009AAA" }}
              />
              <span
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#009AAA",
                }}
              >
                CLIENT STORIES
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              What Our <span style={{ color: "#009AAA" }}>Clients</span> Say
            </h2>
          </div>
          <p
            className="text-neutral-600 lg:text-right"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            From homeowners to architects — our clients keep coming back because we deliver what we
            promise, every time.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="testimonial-card group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="#009AAA" stroke="#009AAA" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="mt-5 pb-10 italic text-neutral-700"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
              >
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="mb-10 mt-auto h-px w-full bg-neutral-200" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div>
                  <div
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0a0a0a",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      color: "#737373",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
