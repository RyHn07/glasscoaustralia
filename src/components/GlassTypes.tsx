import { Download, FileText } from "lucide-react";

type GlassRow = {
  product: string;
  thickness: string;
  uValue: string;
  shgc: string;
  vlt: string;
  uvBlock: string;
  notes: string;
};

const glassTypes: GlassRow[] = [
  {
    product: "Clear Float 3 mm",
    thickness: "3",
    uValue: "5.9",
    shgc: "0.86",
    vlt: "90%",
    uvBlock: "23%",
    notes: "Thinnest annealed float — picture framing, cabinets, light glazing.",
  },
  {
    product: "Clear Float 4 mm",
    thickness: "4",
    uValue: "5.8",
    shgc: "0.85",
    vlt: "89%",
    uvBlock: "24%",
    notes: "General-purpose annealed glass for residential glazing.",
  },
  {
    product: "Clear Float 5 mm",
    thickness: "5",
    uValue: "5.8",
    shgc: "0.83",
    vlt: "89%",
    uvBlock: "25%",
    notes: "Mid-weight float — windows, shelving, decorative panels.",
  },
  {
    product: "Clear Float 6 mm",
    thickness: "6",
    uValue: "5.7",
    shgc: "0.81",
    vlt: "88%",
    uvBlock: "27%",
    notes: "Most common architectural thickness. Base for toughening & laminating.",
  },
  {
    product: "Clear Float 8 mm",
    thickness: "8",
    uValue: "5.7",
    shgc: "0.79",
    vlt: "87%",
    uvBlock: "30%",
    notes: "Heavy-duty glazing, shopfronts, tabletops.",
  },
  {
    product: "Clear Float 10 mm",
    thickness: "10",
    uValue: "5.6",
    shgc: "0.77",
    vlt: "86%",
    uvBlock: "32%",
    notes: "Frameless balustrades, partitions, large-span glazing.",
  },
  {
    product: "Clear Float 12 mm",
    thickness: "12",
    uValue: "5.6",
    shgc: "0.75",
    vlt: "85%",
    uvBlock: "35%",
    notes: "Structural glazing, pool fencing, heavy doors.",
  },
  {
    product: "Clear Float 15 mm",
    thickness: "15",
    uValue: "5.5",
    shgc: "0.73",
    vlt: "84%",
    uvBlock: "38%",
    notes: "Large-format frameless applications, architectural features.",
  },
  {
    product: "Clear Float 19 mm",
    thickness: "19",
    uValue: "5.4",
    shgc: "0.70",
    vlt: "82%",
    uvBlock: "42%",
    notes: "Maximum-strength annealed float for structural use.",
  },
  {
    product: "Low-Iron (Ultra Clear) 6 mm",
    thickness: "6",
    uValue: "5.7",
    shgc: "0.87",
    vlt: "91%",
    uvBlock: "25%",
    notes: "Maximum clarity, no green tint. Ideal for displays and balustrades.",
  },
  {
    product: "Toughened (Tempered)",
    thickness: "4–19",
    uValue: "5.8",
    shgc: "0.82",
    vlt: "89%",
    uvBlock: "25%",
    notes: "AS/NZS 2208 Grade A safety glass. 5× stronger than annealed.",
  },
  {
    product: "Laminated 6.38 mm",
    thickness: "6.38",
    uValue: "5.7",
    shgc: "0.78",
    vlt: "87%",
    uvBlock: "99%",
    notes: "Two 3 mm plies + PVB interlayer. Acoustic & UV control.",
  },
  {
    product: "Low-E Soft Coat (EnergyTech SuperGreen)",
    thickness: "6",
    uValue: "3.7",
    shgc: "0.41",
    vlt: "61%",
    uvBlock: "Confirm",
    notes: "Soft-coat Low-E for strong thermal and solar control. Must be used within an IGU or laminated unit.",
  },
  {
    product: "Low-E Hard Coat (EVantage SuperGreen)",
    thickness: "6",
    uValue: "3.8",
    shgc: "0.38",
    vlt: "49%",
    uvBlock: "Confirm",
    notes: "Pyrolytic hard-coat Low-E with durable solar control; suitable for single glazing, laminated glass or IGUs.",
  },
  {
    product: "Silver Mirror",
    thickness: "3–6",
    uValue: "—",
    shgc: "—",
    vlt: "—",
    uvBlock: "—",
    notes: "Copper-free silvered mirror. Polished or bevelled edges.",
  },
];

const COLS: { key: keyof GlassRow; label: string }[] = [
  { key: "product", label: "Product" },
  { key: "thickness", label: "Thickness (mm)" },
  { key: "uValue", label: "U-value (W/m²K)" },
  { key: "shgc", label: "SHGC" },
  { key: "vlt", label: "VLT" },
  { key: "uvBlock", label: "UV Block" },
  { key: "notes", label: "Notes" },
];

async function downloadPdf() {
  const [{ jsPDF }, autoTableModule] = await Promise.all([
    import("jspdf"),
    import("jspdf-autotable"),
  ]);
  const autoTable = autoTableModule.default;
  const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header band
  doc.setFillColor(0, 154, 170);
  doc.rect(0, 0, pageWidth, 60, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("GlassCo Australia", 40, 28);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Glass Types & Technical Reference", 40, 46);

  // Contact (right)
  doc.setFontSize(9);
  doc.text("(03) 9706 5506", pageWidth - 40, 28, { align: "right" });
  doc.text("info@glasscoaustralia.com.au", pageWidth - 40, 42, { align: "right" });
  doc.text("orders@glasscoaustralia.com.au", pageWidth - 40, 54, { align: "right" });

  // Intro
  doc.setTextColor(40, 40, 40);
  doc.setFontSize(10);
  doc.text(
    "Indicative performance data for our standard glass range. Final values vary by manufacturer, coating and configuration — please confirm at quotation.",
    40,
    85,
    { maxWidth: pageWidth - 80 },
  );

  // Table
  autoTable(doc, {
    startY: 110,
    head: [COLS.map((c) => c.label)],
    body: glassTypes.map((row) => COLS.map((c) => row[c.key])),
    styles: { font: "helvetica", fontSize: 9, cellPadding: 6 },
    headStyles: { fillColor: [0, 154, 170], textColor: 255, fontStyle: "bold" },
    alternateRowStyles: { fillColor: [245, 248, 249] },
    margin: { left: 40, right: 40 },
  });

  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const h = doc.internal.pageSize.getHeight();
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(
      `© ${new Date().getFullYear()} GlassCo Australia · Serving Australia since 1993 · Page ${i} of ${pageCount}`,
      pageWidth / 2,
      h - 18,
      { align: "center" },
    );
  }

  doc.save("GlassCo-Australia-Glass-Types.pdf");
}

export function GlassTypes() {
  return (
    <section className="w-full bg-neutral-50 py-24">
      <div className="mx-auto max-w-[1280px] px-6">
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
                TECHNICAL REFERENCE
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
              Glass Types & <span style={{ color: "#009AAA" }}>UV Values</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <p
              className="text-neutral-600 lg:text-right"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
            >
              Indicative performance figures for our standard range. Download the full reference
              sheet for your project files.
            </p>
            <button
              onClick={downloadPdf}
              className="btn-animate inline-flex items-center gap-2 rounded-md px-5 py-3 text-white hover:opacity-95"
              style={{
                backgroundColor: "#009AAA",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-12 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ fontFamily: "Poppins, sans-serif" }}>
              <thead style={{ backgroundColor: "#009AAA" }}>
                <tr>
                  {COLS.map((c) => (
                      <th
                      key={c.key}
                      className="whitespace-nowrap px-5 py-5 text-white"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {c.label.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {glassTypes.map((row, i) => (
                  <tr
                    key={row.product}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-neutral-50"} group cursor-pointer transition-colors duration-200 hover:bg-[#009AAA]/10`}
                  >
                    {COLS.map((c) => (
                      <td
                        key={c.key}
                        className="px-5 py-5 align-top text-neutral-700"
                        style={{
                          fontSize: "13.5px",
                          lineHeight: 1.55,
                          fontWeight: c.key === "product" ? 600 : 400,
                          color: c.key === "product" ? "#0a0a0a" : undefined,
                          whiteSpace: c.key === "notes" ? "normal" : "nowrap",
                          minWidth: c.key === "notes" ? "260px" : undefined,
                        }}
                      >
                        {row[c.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="mt-5 flex items-start gap-2 text-neutral-500"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "12.5px", lineHeight: 1.6 }}
        >
          <FileText className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>
            Values are indicative and based on standard 4–6 mm configurations. Actual performance
            varies by coating, interlayer and assembly — confirm at quotation.
          </span>
        </div>
      </div>
    </section>
  );
}
