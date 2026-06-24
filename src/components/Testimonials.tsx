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

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <article
      className="flex shrink-0 flex-col rounded-2xl border border-neutral-200 bg-white p-8"
      style={{ width: 380, minHeight: 360 }}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} className="h-4 w-4" fill="#009AAA" stroke="#009AAA" />
        ))}
      </div>
      <p
        className="mt-5 pb-10 italic text-neutral-700"
        style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
      >
        "{t.quote}"
      </p>
      <div className="mb-8 mt-auto h-px w-full bg-neutral-200" />
      <div className="flex items-center gap-4">
        <img
          src={t.avatar}
          alt={t.name}
          loading="lazy"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              color: "#0a0a0a",
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "9px",
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
  );
}

export function Testimonials() {
  // Duplicate the list so the translate -50% animation loops seamlessly.
  const loop = [...testimonials, ...testimonials];

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
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "10px",
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
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.025rem, 5vw, 3.6rem)",
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
      </div>

      {/* Infinite marquee — full-bleed so the loop seam stays off-screen */}
      <div className="marquee mt-14 w-full overflow-hidden">
        <div className="marquee-track flex w-max gap-6">
          {loop.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonials-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: testimonials-marquee 40s linear infinite;
          will-change: transform;
        }
        .marquee:hover .marquee-track { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
