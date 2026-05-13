import { CheckCircle2, Users, Coins, Zap, Leaf, Star } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Every product meets strict Australian standards with comprehensive quality checks",
  },
  {
    icon: Users,
    title: "Expertises",
    desc: "We boast years of experience in the glass industry.",
  },
  {
    icon: Coins,
    title: "Affordable Price",
    desc: "Professional glass manufacturing services at reasonable prices.",
  },
  {
    icon: Zap,
    title: "Fast Installation",
    desc: "Efficient service delivery without compromising on quality or attention to detail",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Sustainable practices and energy-efficient solutions for environmental responsibility",
  },
  {
    icon: Star,
    title: "Unparalleled Service",
    desc: "Highly responsive to customer needs and demands.",
  },
];

const trustStats = [
  { value: "1000+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "10+", label: "Locations" },
];

export function WhyUs() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center">
          <span
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#009AAA",
            }}
          >
            WHY CHOOSE GLASSCO
          </span>
          <h2
            className="mt-3"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#0a0a0a",
              margin: 0,
            }}
          >
            Why We're Different
          </h2>
          <p
            className="mt-4 text-neutral-600"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px" }}
          >
            Discover what sets us apart in the glass and glazing industry
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="mt-0.5 h-6 w-6 flex-shrink-0" style={{ color: "#009AAA" }} />
              <div>
                <h3
                  className="text-neutral-900"
                  style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "20px", fontWeight: 700 }}
                >
                  {title}
                </h3>
                <p
                  className="mt-2 text-neutral-600"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", lineHeight: 1.7 }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust panel */}
        <div className="mt-14 rounded-2xl border px-8 py-12 text-center" style={{ backgroundColor: "#F7F6F6", borderColor: "#E6E4E4" }}>
          <h3
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 700,
              color: "#0a0a0a",
              margin: 0,
            }}
          >
            Trusted by Thousands
          </h3>
          <p
            className="mx-auto mt-4 max-w-2xl text-neutral-600"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
          >
            From residential renovations to large-scale commercial projects, our clients trust us
            to deliver excellence every time. Your satisfaction is our priority.
          </p>
          <div className="mt-8 flex flex-wrap items-start justify-center gap-x-12 gap-y-6">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#009AAA",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-2 text-neutral-500"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
