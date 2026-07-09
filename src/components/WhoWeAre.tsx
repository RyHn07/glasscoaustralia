import { Calendar, Users, Award, MapPin } from "lucide-react";
import buildingAsset from "@/assets/about-building-new.jpg.asset.json";
const buildingImg = buildingAsset.url;

const stats = [
  { icon: Calendar, value: "Since 1993", label: "Established" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Award, value: "25+", label: "Team Members" },
  { icon: MapPin, value: "2+", label: "Locations" },
];

export function WhoWeAre() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: image */}
          <div className="group relative">
            {/* Top-left corner bracket */}
            <div
              className="absolute -left-4 -top-4 h-16 w-16 rounded-tl-lg border-l-2 border-t-2 transition-all duration-500 group-hover:-left-5 group-hover:-top-5 group-hover:h-20 group-hover:w-20"
              style={{ borderColor: "#009AAA" }}
            />
            <div className="overflow-hidden rounded-lg shadow-lg transition-shadow duration-500 group-hover:shadow-2xl">
              <img
                src={buildingImg}
                alt="GlassCo Australia facility"
                loading="lazy"
                width={1280}
                height={896}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            {/* Stat badge */}
            <div
              className="absolute -bottom-6 -right-6 rounded-lg px-8 py-5 text-center text-white shadow-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
              style={{ backgroundColor: "#009AAA", fontFamily: "Montserrat, sans-serif" }}
            >
              <div className="text-sm font-medium tracking-widest uppercase">Since</div>
              <div className="mt-1 text-4xl font-bold leading-none">1993</div>
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
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#009AAA",
                }}
              >
                WHO WE ARE
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.025rem, 4vw, 3.15rem)",
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
                With over 33 years of experience in the glass industry, we pride ourselves on
                exceptional customer service and top-notch quality. Whether you need glass for
                vehicles, shower screens, or commercial facades — our devoted team ensures we
                have the right products to meet your expectations.
              </p>
              <p className="font-medium text-neutral-800">
                Proudly serving Australia since 1993.
              </p>
            </div>

            {/* Quote */}
            <div
              className="mt-8 pl-4 italic text-neutral-700"
              style={{ borderLeftWidth: "3px", borderLeftStyle: "solid", borderColor: "#009AAA", fontFamily: "Poppins, sans-serif", fontSize: "17px", fontWeight: 400 }}
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
                    style={{ fontFamily: "Montserrat, sans-serif" }}
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
