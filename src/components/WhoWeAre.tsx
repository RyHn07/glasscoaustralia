import { Calendar, Users, Award, MapPin } from "lucide-react";
import buildingImg from "@/assets/about-building.jpg";

const stats = [
  { icon: Calendar, value: "27+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Team Members" },
  { icon: MapPin, value: "10+", label: "Locations" },
];

export function WhoWeAre() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: image */}
          <div className="relative">
            {/* Top-left corner bracket */}
            <div
              className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2"
              style={{ borderColor: "#009AAA" }}
            />
            <img
              src={buildingImg}
              alt="GlassCo Australia facility"
              loading="lazy"
              width={1280}
              height={896}
              className="h-auto w-full rounded-lg object-cover shadow-lg"
            />
            {/* Stat badge */}
            <div
              className="absolute -bottom-6 -right-6 rounded-lg px-8 py-5 text-center text-white shadow-xl"
              style={{ backgroundColor: "#009AAA", fontFamily: "Rajdhani, sans-serif" }}
            >
              <div className="text-4xl font-bold leading-none">27+</div>
              <div className="mt-1 text-sm font-medium">Years in Glass</div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            {/* Eyebrow */}
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
                  letterSpacing: "0.15em",
                  color: "#009AAA",
                }}
              >
                WHO WE ARE
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Australia's Most
              <br />
              <span style={{ color: "#009AAA" }}>Trusted</span> Glass Partner
            </h2>

            {/* Body */}
            <div
              className="mt-6 space-y-4 text-neutral-600"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
            >
              <p>
                Based in Dandenong, VIC, GlassCo Australia Pty is a renowned manufacturer,
                supplier, wholesaler, importer and precision cutter of glass for both commercial
                and residential clients.
              </p>
              <p>
                With over 27 years of experience in the glass industry, we pride ourselves on
                exceptional customer service and top-notch quality. Whether you need glass for
                vehicles, shower screens, or commercial facades — our devoted team ensures we
                have the right products to meet your expectations.
              </p>
            </div>

            {/* Quote */}
            <div
              className="mt-8 pl-4 italic text-neutral-700"
              style={{ borderLeftWidth: "3px", borderLeftStyle: "solid", borderColor: "#009AAA", fontFamily: "Poppins, sans-serif", fontSize: "17px" }}
            >
              "Exceptional service and top-notch quality work — every time."
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="mx-auto h-6 w-6" style={{ color: "#009AAA" }} />
                  <div
                    className="mt-3 text-3xl font-bold text-neutral-900"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {value}
                  </div>
                  <div
                    className="mt-1 text-sm text-neutral-500"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
