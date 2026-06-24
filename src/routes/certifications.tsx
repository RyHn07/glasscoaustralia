import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Award, ShieldCheck, FileCheck2, Download, ExternalLink, X, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-certifications.jpg";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Our Certifications — GlassCo Australia" },
      {
        name: "description",
        content:
          "GlassCo Australia is certified to ISO 9001, ISO 14001, ISO 45001 and Australian Standards AS 2208, AS 2080 and AS 4666 for quality, safety and environmental compliance.",
      },
      { property: "og:title", content: "Our Certifications — GlassCo Australia" },
      {
        property: "og:description",
        content:
          "Independently audited certifications confirming GlassCo Australia's commitment to quality, safety and sustainability.",
      },
    ],
  }),
  component: CertificationsPage,
});

type Category = "ISO" | "Product Compliance" | "Compliance Schedule";

type Certificate = {
  id: string;
  title: string;
  standard: string;
  category: Category;
  issuer: string;
  scope: string;
  issued: string;
  expiry: string;
  number: string;
  thumb: string;
  pdf: string;
};

const certificates: Certificate[] = [
  {
    id: "iso-9001",
    title: "Quality Management System",
    standard: "ISO 9001:2015",
    category: "ISO",
    issuer: "Equal Assurance (JAS-ANZ Accredited)",
    scope:
      "Supply of glass and manufacturing of value-added glass products — IGUs, laminated, toughened, mirrors, balustrades and more.",
    issued: "9 January 2026",
    expiry: "17 October 2028",
    number: "GCAQ01-CCCQ04",
    thumb: "/certificates/thumbs/iso-9001.jpg",
    pdf: "/certificates/iso-9001-quality.pdf",
  },
  {
    id: "iso-14001",
    title: "Environmental Management System",
    standard: "ISO 14001:2015",
    category: "ISO",
    issuer: "Equal Assurance (JAS-ANZ Accredited)",
    scope:
      "Environmental management across all glass supply and manufacturing operations, including IGUs, laminated and toughened glass.",
    issued: "9 January 2026",
    expiry: "17 October 2028",
    number: "GCAQ01-CCEE04",
    thumb: "/certificates/thumbs/iso-14001.jpg",
    pdf: "/certificates/iso-14001-environmental.pdf",
  },
  {
    id: "iso-45001",
    title: "Occupational Health & Safety",
    standard: "ISO 45001:2018",
    category: "ISO",
    issuer: "Equal Assurance (JAS-ANZ Accredited)",
    scope:
      "OH&S management system covering glass supply and manufacturing for industrial, commercial, residential and transport applications.",
    issued: "9 January 2026",
    expiry: "17 October 2028",
    number: "GCAQ01-CCWW02",
    thumb: "/certificates/thumbs/iso-45001.jpg",
    pdf: "/certificates/iso-45001-ohs.pdf",
  },
  {
    id: "as-2208-conf",
    title: "Safety Glazing Materials in Buildings",
    standard: "AS 2208:2023",
    category: "Product Compliance",
    issuer: "CSi — Certification Solutions International",
    scope:
      "Certificate of Conformance — Grade A toughened safety glazing manufactured under the PAS-Mark Scheme.",
    issued: "13 September 2024",
    expiry: "19 July 2028",
    number: "CSi Lic No. 7171 – 2024 – 09 – C1-R0",
    thumb: "/certificates/thumbs/as-2208-conformance.jpg",
    pdf: "/certificates/as-2208-conformance.pdf",
  },
  {
    id: "as-2080-conf",
    title: "Safety Glazing for Land Vehicles",
    standard: "AS 2080:2019",
    category: "Product Compliance",
    issuer: "CSi — Certification Solutions International",
    scope:
      "Certificate of Conformance — heat-treated toughened safety glazing for side and rear windows in land vehicles.",
    issued: "13 September 2024",
    expiry: "19 July 2028",
    number: "CSi Lic No. 7171 – 2024 – 09 – C2-R0",
    thumb: "/certificates/thumbs/as-2080-conformance.jpg",
    pdf: "/certificates/as-2080-conformance.pdf",
  },
  {
    id: "as-4666-conf",
    title: "Insulating Glass Units (IGU)",
    standard: "AS 4666:2012",
    category: "Product Compliance",
    issuer: "CSi — Certification Solutions International",
    scope:
      "Certificate of Conformance — IGUs manufactured under the PAS-Mark Scheme (incl. Amendment No.1:2018).",
    issued: "13 September 2024",
    expiry: "19 July 2028",
    number: "CSi Lic No. 7171 – 2024 – 09 – C3-R0",
    thumb: "/certificates/thumbs/as-4666-conformance.jpg",
    pdf: "/certificates/as-4666-conformance.pdf",
  },
  {
    id: "as-2208-sched",
    title: "AS 2208 — Product Compliance Schedule",
    standard: "AS 2208:2023",
    category: "Compliance Schedule",
    issuer: "CSi — Certification Solutions International",
    scope:
      "Detailed scope of certification — plain float & patterned toughened safety glazing, 4–19 mm, Grade A.",
    issued: "13 September 2024",
    expiry: "19 July 2028",
    number: "CSi Lic No. 7171 – 2024 – 09 – S1-R0",
    thumb: "/certificates/thumbs/as-2208-schedule.jpg",
    pdf: "/certificates/as-2208-schedule.pdf",
  },
  {
    id: "as-2080-sched",
    title: "AS 2080 — Product Compliance Schedule",
    standard: "AS 2080:2019",
    category: "Compliance Schedule",
    issuer: "CSi — Certification Solutions International",
    scope:
      "Scope schedule — Type T toughened safety glazing, 4–12 mm float, up to 2400 × 4200 mm furnace size.",
    issued: "13 September 2024",
    expiry: "19 July 2028",
    number: "CSi Lic No. 7171 – 2024 – 09 – S2-R0",
    thumb: "/certificates/thumbs/as-2080-schedule.jpg",
    pdf: "/certificates/as-2080-schedule.pdf",
  },
  {
    id: "as-4666-sched",
    title: "AS 4666 — Product Compliance Schedule",
    standard: "AS 4666:2012",
    category: "Compliance Schedule",
    issuer: "CSi — Certification Solutions International",
    scope:
      "IGU schedule — substrates, sealants, spacer bars (5.5–19.5 mm), desiccant and fabrication details.",
    issued: "13 September 2024",
    expiry: "19 July 2028",
    number: "CSi Lic No. 7171 – 2024 – 09 – S3-R0",
    thumb: "/certificates/thumbs/as-4666-schedule.jpg",
    pdf: "/certificates/as-4666-schedule.pdf",
  },
];

const filters: Array<"All" | Category> = ["All", "ISO", "Product Compliance", "Compliance Schedule"];

const ACCENT = "#009AAA";

function CertificationsPage() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [preview, setPreview] = useState<Certificate | null>(null);

  const visible =
    active === "All" ? certificates : certificates.filter((c) => c.category === active);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [preview]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative flex h-[52vh] min-h-[380px] items-center overflow-hidden border-b border-neutral-200 bg-[#0b1f24] text-white">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1f24]/85 via-[#0b1f24]/75 to-[#0b1f24]/95" />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 10%, rgba(0,222,247,0.25), transparent 60%), radial-gradient(40% 40% at 10% 90%, rgba(0,154,170,0.35), transparent 60%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: 12, letterSpacing: "0.2em" }}
          >
            <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#00DEF7" }} />
            INDEPENDENTLY AUDITED & CERTIFIED
          </div>
          <h1
            className="mt-6 max-w-3xl"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2.25rem, 5.5vw, 4.05rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Our{" "}
            <span style={{ color: "#00DEF7" }}>Certifications</span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-white/75"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.7 }}
          >
            Every GlassCo Australia product is backed by accredited certification — covering
            quality, safety, environmental responsibility and full Australian Standards
            compliance for buildings, vehicles and insulated glass units.
          </p>

          {/* stat strip */}
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { k: "3", v: "ISO Standards" },
              { k: "3", v: "AS Conformances" },
              { k: "JAS-ANZ", v: "Accredited" },
              { k: "100%", v: "Compliant" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 backdrop-blur"
              >
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 22.4,
                    fontWeight: 700,
                    color: "#00DEF7",
                    lineHeight: 1,
                  }}
                >
                  {s.k}
                </div>
                <div
                  className="mt-1 text-white/70"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: 12 }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-[72px] z-30 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-3 px-6 py-4">
          <div
            className="flex items-center gap-2 text-neutral-500"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: 12, letterSpacing: "0.15em" }}
          >
            <Filter className="h-3.5 w-3.5" />
            FILTER
          </div>
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="rounded-full border px-4 py-1.5 transition-all"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  borderColor: isActive ? ACCENT : "#e5e5e5",
                  backgroundColor: isActive ? ACCENT : "transparent",
                  color: isActive ? "white" : "#404040",
                }}
              >
                {f}
              </button>
            );
          })}
          <div
            className="ml-auto text-neutral-500"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: 13 }}
          >
            Showing <span className="font-semibold text-neutral-900">{visible.length}</span>{" "}
            certificate{visible.length === 1 ? "" : "s"}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
            >
              {/* preview */}
              <button
                onClick={() => setPreview(c)}
                className="relative block aspect-[1/1.25] w-full overflow-hidden bg-neutral-100"
                aria-label={`Preview ${c.standard}`}
              >
                <img
                  src={c.thumb}
                  alt={`${c.standard} certificate preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-center gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-neutral-900 shadow-md"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: 12, fontWeight: 600 }}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    View certificate
                  </span>
                </div>
                {/* category chip */}
                <div
                  className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 backdrop-blur"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    color: ACCENT,
                  }}
                >
                  {c.category === "ISO" ? (
                    <Award className="h-3 w-3" />
                  ) : (
                    <FileCheck2 className="h-3 w-3" />
                  )}
                  {c.category.toUpperCase()}
                </div>
              </button>

              {/* body */}
              <div className="flex flex-1 flex-col p-6">
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 10.4,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: ACCENT,
                  }}
                >
                  {c.standard}
                </div>
                <h3
                  className="mt-1 text-neutral-900"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 17.6,
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="mt-3 text-neutral-600"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, lineHeight: 1.6 }}
                >
                  {c.scope}
                </p>

                <div className="my-5 h-px bg-neutral-200" />

                <dl
                  className="grid grid-cols-2 gap-x-4 gap-y-2"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: 12 }}
                >
                  <div>
                    <dt className="text-neutral-400">Issued</dt>
                    <dd className="text-neutral-800">{c.issued}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-400">Valid until</dt>
                    <dd className="text-neutral-800">{c.expiry}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-neutral-400">Issuer</dt>
                    <dd className="text-neutral-800">{c.issuer}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-2">
                  <button
                    onClick={() => setPreview(c)}
                    className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 500 }}
                  >
                    Preview
                  </button>
                  <a
                    href={c.pdf}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-white transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: ACCENT,
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    <Download className="h-4 w-4" />
                    PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRUST FOOTNOTE */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Accredited Bodies",
                body: "Certified by Equal Assurance and Certification Solutions International — both JAS-ANZ accredited.",
              },
              {
                icon: ShieldCheck,
                title: "Australian Standards",
                body: "Full compliance with AS 2208, AS 2080 and AS 4666 for building, vehicle and insulated glass.",
              },
              {
                icon: FileCheck2,
                title: "Independently Audited",
                body: "Annual surveillance audits ensure our manufacturing consistently meets every certified scope.",
              },
            ].map((b) => (
              <div key={b.title} className="flex gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(0,154,170,0.1)", color: ACCENT }}
                >
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4
                    className="text-neutral-900"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: 16, fontWeight: 700 }}
                  >
                    {b.title}
                  </h4>
                  <p
                    className="mt-1 text-neutral-600"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, lineHeight: 1.65 }}
                  >
                    {b.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* PREVIEW MODAL */}
      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setPreview(null)}
        >
          <button
            onClick={() => setPreview(null)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* preview img */}
            <div className="flex-1 overflow-auto bg-neutral-100">
              <img
                src={preview.thumb}
                alt={`${preview.standard} certificate`}
                className="block h-auto w-full"
              />
            </div>
            {/* side panel */}
            <aside className="flex w-full shrink-0 flex-col gap-4 border-t border-neutral-200 p-6 md:w-[340px] md:border-l md:border-t-0">
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 10.4,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: ACCENT,
                }}
              >
                {preview.standard}
              </div>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 20.8,
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#171717",
                }}
              >
                {preview.title}
              </h3>
              <p
                className="text-neutral-600"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, lineHeight: 1.65 }}
              >
                {preview.scope}
              </p>
              <div
                className="space-y-2 rounded-lg bg-neutral-50 p-4"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 12 }}
              >
                <Row label="Issuer" value={preview.issuer} />
                <Row label="Certificate No." value={preview.number} />
                <Row label="Issued" value={preview.issued} />
                <Row label="Expiry" value={preview.expiry} />
              </div>
              <a
                href={preview.pdf}
                download
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: ACCENT,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href={preview.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-5 py-2.5 text-neutral-800 transition-colors hover:bg-neutral-50"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 500 }}
              >
                <ExternalLink className="h-4 w-4" />
                Open in new tab
              </a>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-neutral-500">{label}</span>
      <span className="text-right font-medium text-neutral-800">{value}</span>
    </div>
  );
}
