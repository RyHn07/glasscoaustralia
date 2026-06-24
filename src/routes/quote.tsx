import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { z } from "zod";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  FileUp,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Trash2,
  Truck,
  Upload,
  User,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-quote.jpg";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote — GlassCo Australia" },
      {
        name: "description",
        content:
          "Request a fast, no-obligation glass quote from GlassCo. Share project details, specs and timeline — our team responds within 1 business day.",
      },
      { property: "og:title", content: "Get a Quote — GlassCo Australia" },
      {
        property: "og:description",
        content:
          "Request a fast, no-obligation glass quote from GlassCo Australia.",
      },
    ],
  }),
  component: QuotePage,
});

const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Architectural",
  "Retail / Shopfront",
  "Industrial",
  "Other",
] as const;

const TIMELINES = ["ASAP", "2–4 weeks", "1–3 months", "Planning stage"] as const;

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB
const ACCEPTED_EXT = [".pdf", ".dwg", ".dxf", ".jpg", ".jpeg", ".png", ".doc", ".docx"];
const ACCEPT_ATTR = ACCEPTED_EXT.join(",");

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Enter a phone").max(30),
  company: z.string().trim().max(120).optional(),
  projectType: z.enum(PROJECT_TYPES),
  timeline: z.enum(TIMELINES),
  suburb: z.string().trim().max(120).optional(),
  delivery: z.boolean(),
  message: z.string().trim().max(1500).optional(),
});

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

function QuotePage() {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: PROJECT_TYPES[0] as (typeof PROJECT_TYPES)[number],
    timeline: TIMELINES[0] as (typeof TIMELINES)[number],
    suburb: "",
    delivery: true,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const addFiles = (incoming: FileList | File[]) => {
    const list = Array.from(incoming);
    const errs: string[] = [];
    const accepted: File[] = [];
    for (const f of list) {
      const ext = "." + (f.name.split(".").pop() || "").toLowerCase();
      if (!ACCEPTED_EXT.includes(ext)) {
        errs.push(`${f.name}: unsupported file type`);
        continue;
      }
      if (f.size > MAX_FILE_BYTES) {
        errs.push(`${f.name}: exceeds 10MB limit`);
        continue;
      }
      accepted.push(f);
    }
    setFiles((prev) => {
      const merged = [...prev];
      for (const f of accepted) {
        if (merged.length >= MAX_FILES) {
          errs.push(`Max ${MAX_FILES} files allowed`);
          break;
        }
        if (!merged.some((x) => x.name === f.name && x.size === f.size)) {
          merged.push(f);
        }
      }
      return merged;
    });
    setFileError(errs.join(" · "));
  };

  const removeFile = (idx: number) =>
    setFiles((arr) => arr.filter((_, i) => i !== idx));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path.join(".")] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  if (submitted) {
    return (
      <main className="flex min-h-screen flex-col bg-white">
        <Header />
        <section className="flex flex-1 items-center justify-center bg-[#f7fafa] px-4 py-24">
          <div className="max-w-xl rounded-2xl border border-[#009AAA]/20 bg-white p-10 text-center shadow-[0_30px_60px_-30px_rgba(0,154,170,0.4)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#009AAA]/10">
              <CheckCircle2 className="h-9 w-9 text-[#009AAA]" />
            </div>
            <h1
              className="mt-6 text-3xl font-bold text-neutral-900"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              Quote request received
            </h1>
            <p
              className="mt-3 text-neutral-600"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Thanks {form.name.split(" ")[0]}. Our estimating team will review your
              request{files.length > 0 ? ` and ${files.length} attached file${files.length > 1 ? "s" : ""}` : ""} and respond within 1 business day at{" "}
              <span className="font-semibold text-neutral-900">{form.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFiles([]);
                setFileError("");
                setForm({
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  projectType: PROJECT_TYPES[0],
                  timeline: TIMELINES[0],
                  suburb: "",
                  delivery: true,
                  message: "",
                });
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#009AAA] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              Submit another <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />


      {/* Trust strip */}
      <section className="border-b border-neutral-200 bg-[#0b1f24] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: "1 business day", desc: "Typical response time" },
            { icon: ShieldCheck, title: "AS/NZS certified", desc: "Australian standards compliant" },
            { icon: Truck, title: "VIC-wide delivery", desc: "From our Dandenong South facility" },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
            >
              <b.icon className="h-5 w-5 text-[#00DEF7]" />
              <div
                className="mt-2 text-base font-semibold"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                {b.title}
              </div>
              <div
                className="text-sm text-white/65"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#f7fafa] px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_340px]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            {/* Contact */}
            <Card
              icon={User}
              title="Your details"
              subtitle="So we can send your quote back to you"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name *" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputCls}
                    placeholder="Jane Smith"
                  />
                </Field>
                <Field label="Company" error={errors.company}>
                  <input
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    className={inputCls}
                    placeholder="Optional"
                  />
                </Field>
                <Field label="Email *" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputCls}
                    placeholder="jane@example.com"
                  />
                </Field>
                <Field label="Phone *" error={errors.phone}>
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputCls}
                    placeholder="04xx xxx xxx"
                  />
                </Field>
              </div>
            </Card>

            {/* Project */}
            <Card
              icon={Building2}
              title="Project overview"
              subtitle="Helps us route your quote to the right team"
            >
              <div className="space-y-5">
                <div>
                  <Label>Project type</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((t) => (
                      <Chip
                        key={t}
                        active={form.projectType === t}
                        onClick={() => update("projectType", t)}
                      >
                        {t}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Timeline</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {TIMELINES.map((t) => (
                      <Chip
                        key={t}
                        active={form.timeline === t}
                        onClick={() => update("timeline", t)}
                      >
                        {t}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Site suburb / postcode">
                    <input
                      value={form.suburb}
                      onChange={(e) => update("suburb", e.target.value)}
                      className={inputCls}
                      placeholder="e.g. Richmond 3121"
                    />
                  </Field>
                  <Field label="Delivery">
                    <label className="flex h-11 items-center gap-3 rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900">
                      <input
                        type="checkbox"
                        checked={form.delivery}
                        onChange={(e) => update("delivery", e.target.checked)}
                        className="h-4 w-4 accent-[#009AAA]"
                      />
                      Include delivery in quote
                    </label>
                  </Field>
                </div>
              </div>
            </Card>

            {/* File upload */}
            <Card
              icon={FileUp}
              title="Drawings & specifications"
              subtitle="Upload PDFs, drawings (DWG/DXF), or photos — we'll quote from your files"
              right={
                files.length > 0 ? (
                  <span className="rounded-full bg-[#009AAA]/10 px-3 py-1 text-xs font-semibold text-[#009AAA]">
                    {files.length}/{MAX_FILES} file{files.length > 1 ? "s" : ""}
                  </span>
                ) : undefined
              }
            >
              <div className="space-y-4">
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      fileInputRef.current?.click();
                    }
                  }}
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
                    dragOver
                      ? "border-[#009AAA] bg-[#009AAA]/5"
                      : "border-neutral-300 bg-neutral-50 hover:border-[#009AAA]/60 hover:bg-[#009AAA]/[0.03]"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#009AAA]/10 text-[#009AAA]">
                    <Upload className="h-6 w-6" />
                  </div>
                  <p
                    className="mt-3 text-base font-semibold text-neutral-800"
                    style={{ fontFamily: '"Montserrat", sans-serif' }}
                  >
                    Drag & drop files here, or click to browse
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    PDF, DWG, DXF, JPG, PNG, DOC · up to 10MB each · max {MAX_FILES} files
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept={ACCEPT_ATTR}
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.length) addFiles(e.target.files);
                      e.target.value = "";
                    }}
                  />
                </div>

                {fileError && (
                  <p className="text-xs font-medium text-red-600">{fileError}</p>
                )}

                {files.length > 0 && (
                  <ul className="space-y-2">
                    {files.map((f, i) => (
                      <li
                        key={`${f.name}-${i}`}
                        className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <FileUp className="h-4 w-4 shrink-0 text-[#009AAA]" />
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium text-neutral-800">
                              {f.name}
                            </div>
                            <div className="text-xs text-neutral-500">
                              {formatBytes(f.size)}
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                          aria-label={`Remove ${f.name}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                <Field label="Additional notes (optional)">
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={4}
                    maxLength={1500}
                    className={`${inputCls} h-auto py-3`}
                    placeholder="Anything else we should know — install timing, site access, finishes..."
                  />
                  <div className="mt-1 text-right text-xs text-neutral-400">
                    {form.message.length}/1500
                  </div>
                </Field>
              </div>
            </Card>


            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-neutral-500">
                By submitting you agree to our{" "}
                <a href="/terms" className="text-[#009AAA] hover:underline">
                  Terms of Service
                </a>
                . We never share your details.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#009AAA] px-7 py-3.5 text-base font-bold text-white shadow-[0_10px_30px_-10px_rgba(0,154,170,0.7)] transition-transform hover:-translate-y-0.5 hover:opacity-95"
                style={{ fontFamily: '"Montserrat", sans-serif', letterSpacing: "0.04em" }}
              >
                Send quote request <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Aside */}
          <aside className="space-y-5">
            <div className="rounded-2xl bg-[#0b1f24] p-6 text-white">
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                Prefer to talk?
              </h3>
              <p
                className="mt-1 text-sm text-white/65"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Our estimating team is in Monday–Friday, 7am–4pm.
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href="tel:+61397065506"
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08]"
                >
                  <Phone className="h-4 w-4 text-[#00DEF7]" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">
                      Phone
                    </div>
                    <div className="font-semibold">(03) 9706 5506</div>
                  </div>
                </a>
                <a
                  href="mailto:quotes@glassco.com.au"
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08]"
                >
                  <Mail className="h-4 w-4 text-[#00DEF7]" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">
                      Email
                    </div>
                    <div className="font-semibold">quotes@glassco.com.au</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3
                className="text-lg font-bold text-neutral-900"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                What happens next
              </h3>
              <ol
                className="mt-4 space-y-4 text-sm text-neutral-600"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {[
                  "We review your specifications & confirm requirements.",
                  "Our team prepares pricing and lead time.",
                  "You receive a detailed written quote — usually within 24 hours.",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#009AAA]/10 text-xs font-bold text-[#009AAA]"
                      style={{ fontFamily: '"Montserrat", sans-serif' }}
                    >
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-[#009AAA]/20 bg-[#009AAA]/[0.06] p-6">
              <ShieldCheck className="h-6 w-6 text-[#009AAA]" />
              <h3
                className="mt-3 text-lg font-bold text-neutral-900"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                Certified & compliant
              </h3>
              <p
                className="mt-1 text-sm text-neutral-600"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                All glass supplied to AS/NZS 2208, AS 1288 & AS 2080 standards. ISO
                9001, 14001 & 45001 certified facility.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------------- helpers ---------------- */

const inputCls =
  "flex h-11 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-[#009AAA] focus:ring-2 focus:ring-[#009AAA]/15";

function Card({
  icon: Icon,
  title,
  subtitle,
  right,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.08)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#009AAA]/10 text-[#009AAA]">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h2
              className="text-xl font-bold text-neutral-900"
              style={{ fontFamily: '"Montserrat", sans-serif' }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-neutral-500">{subtitle}</p>
            )}
          </div>
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <div className={label ? "mt-1.5" : ""}>{children}</div>
      {error && <p className="mt-1 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

function Label({
  children,
  small,
}: {
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <label
      className={`block font-semibold text-neutral-700 ${
        small ? "text-[11px] uppercase tracking-wider text-neutral-500" : "text-sm"
      }`}
    >
      {children}
    </label>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
        active
          ? "border-[#009AAA] bg-[#009AAA] text-white shadow-[0_6px_16px_-6px_rgba(0,154,170,0.6)]"
          : "border-neutral-200 bg-white text-neutral-700 hover:border-[#009AAA]/50 hover:text-[#009AAA]"
      }`}
    >
      {children}
    </button>
  );
}
