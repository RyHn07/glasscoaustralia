import { Flame, Layers, Cog, Printer, Quote } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Toughening & Heat Strengthening",
    desc: "NorthGlass horizontal toughening furnace producing premium tempered safety glass with exceptional flatness and clarity.",
  },
  {
    icon: Layers,
    title: "Insulating Glass Units (IGU)",
    desc: "Fully automated LISEC IGU line with Argon gas filling, structural silicone sealing and integrated spacer bending.",
  },
  {
    icon: Cog,
    title: "Glass Processing",
    desc: "CNC machining, waterjet cutting, edgework, and float / laminate cutting lines on advanced Italian machinery.",
  },
  {
    icon: Printer,
    title: "Digital Glass Printing",
    desc: "Ceramic frit digital printing for facades, decorative panels and architectural design — fired into the glass surface.",
  },
];

export function Services() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        {/* Header */}
        <div className="text-center">
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#009AAA",
            }}
          >
            OUR SERVICES
          </span>
          <h2
            className="mt-3"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.925rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#0a0a0a",
              margin: 0,
            }}
          >
            Comprehensive Glass Solutions
          </h2>
          <p
            className="mt-5 text-neutral-600"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            GlassCo Australia Pty provides a wide range of quality glass for individuals, businesses and industries. We manufacture an
            <br />
            extensive selection of glass products for different sectors ranging from transportation and architectural companies to industrial
            <br />
            and technical sectors. As part of our professional services, we also offer decorative glass for mirrors and windows and cut-to-
            <br />
            size glass. Hire us and experience the difference!
          </p>
          <div
            className="mt-6 flex items-center justify-center gap-2 italic text-neutral-900"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", fontWeight: 500 }}
          >
            <Quote className="h-6 w-6" style={{ color: "#009AAA" }} />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(transparent 60%, rgba(0, 154, 170, 0.35) 60%, rgba(0, 154, 170, 0.35) 92%, transparent 92%)",
                padding: "0 4px",
              }}
            >
              A wide range of quality glass
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-200 hover:shadow-lg"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ backgroundColor: "rgba(0, 154, 170, 0.12)" }}
              >
                <Icon className="h-5 w-5" style={{ color: "#009AAA" }} />
              </div>
              <h3
                className="mt-5 text-neutral-900"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", fontWeight: 700 }}
              >
                {title}
              </h3>
              <p
                className="mt-3 text-neutral-600"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", lineHeight: 1.7 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
