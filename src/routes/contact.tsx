import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

const socialIcons = [
  {
    label: "Facebook",
    icon: (
      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
    ),
  },
  {
    label: "Instagram",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11C3 7.229 3 5.343 4.172 4.172C5.344 3.001 7.229 3 11 3H13C16.771 3 18.657 3 19.828 4.172C20.999 5.344 21 7.229 21 11V13C21 16.771 21 18.657 19.828 19.828C18.656 20.999 16.771 21 13 21H11C7.229 21 5.343 21 4.172 19.828C3.001 18.656 3 16.771 3 13V11ZM18 7.5C18 7.89782 17.842 8.27936 17.5607 8.56066C17.2794 8.84196 16.8978 9 16.5 9C16.1022 9 15.7206 8.84196 15.4393 8.56066C15.158 8.27936 15 7.89782 15 7.5C15 7.10218 15.158 6.72064 15.4393 6.43934C15.7206 6.15804 16.1022 6 16.5 6C16.8978 6 17.2794 6.15804 17.5607 6.43934C17.842 6.72064 18 7.10218 18 7.5ZM14 13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15C11.4696 15 10.9609 14.7893 10.5858 14.4142C10.2107 14.0391 10 13.5304 10 13C10 12.4696 10.2107 11.9609 10.5858 11.5858C10.9609 11.2107 11.4696 11 12 11C12.5304 11 13.0391 11.2107 13.4142 11.5858C13.7893 11.9609 14 12.4696 14 13ZM16 13C16 14.0609 15.5786 15.0783 14.8284 15.8284C14.0783 16.5786 13.0609 17 12 17C10.9391 17 9.92172 16.5786 9.17157 15.8284C8.42143 15.0783 8 14.0609 8 13C8 11.9391 8.42143 10.9217 9.17157 10.1716C9.92172 9.42143 10.9391 9 12 9C13.0609 9 14.0783 9.42143 14.8284 10.1716C15.5786 10.9217 16 11.9391 16 13Z"
      />
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
    ),
  },
];
import { z } from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — GlassCo Australia" },
      {
        name: "description",
        content:
          "Talk to GlassCo Australia — Melbourne-based glass manufacturer. Request a quote, visit our Dandenong South facility, or call (03) 9706 5506.",
      },
      { property: "og:title", content: "Contact Us — GlassCo Australia" },
      {
        property: "og:description",
        content:
          "Get in touch for quotes, technical advice or facility tours. Servicing residential, commercial and architectural projects Australia-wide.",
      },
    ],
  }),
  component: ContactPage,
});

const ACCENT = "#009AAA";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().min(1, "Select a subject"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1500),
});

type FormState = z.infer<typeof contactSchema>;

const subjects = [
  "Request a Quote",
  "Project Enquiry",
  "Product Information",
  "Facility Tour",
  "Trade / Wholesale",
  "Other",
];

function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const update = (k: keyof FormState, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError("");
    const res = contactSchema.safeParse(form);
    if (!res.success) {
      const out: Partial<Record<keyof FormState, string>> = {};
      res.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormState;
        if (!out[key]) out[key] = i.message;
      });
      setErrors(out);
      return;
    }
    setSending(true);
    try {
      const r = await fetch("/api/send-contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!r.ok || !data.ok) {
        throw new Error(data.error || "Could not send. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setSendError(err instanceof Error ? err.message : "Network error");
    } finally {
      setSending(false);
    }
  };

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
            <MessageSquare className="h-3.5 w-3.5" style={{ color: "#00DEF7" }} />
            GET IN TOUCH
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
            Let's build your next <span style={{ color: "#00DEF7" }}>glass project</span>.
          </h1>
          <p
            className="mt-6 max-w-2xl text-white/75"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.7 }}
          >
            From a single custom panel to a full architectural facade — our Melbourne team
            replies within one business day. Send us the details, or give us a call.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT STRIP */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-px bg-neutral-200 md:grid-cols-4">
          {[
            { icon: Phone, label: "CALL", value: "(03) 9706 5506", href: "tel:+61397065506" },
            {
              icon: Mail,
              label: "EMAIL",
              value: "info@glasscoaustralia.com.au",
              href: "mailto:info@glasscoaustralia.com.au",
            },
            {
              icon: MapPin,
              label: "VISIT",
              value: "Dandenong South, VIC",
              href: "#location",
            },
            { icon: Clock, label: "HOURS", value: "Mon–Fri · 8:00 AM – 4:30 PM", href: undefined },
          ].map((c) => {
            const Inner = (
              <div className="group flex items-center gap-4 bg-white px-6 py-7 transition-colors hover:bg-neutral-50">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors"
                  style={{ backgroundColor: "rgba(0,154,170,0.1)", color: ACCENT }}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div
                    className="text-neutral-400"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: 8.8,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    className="mt-0.5 truncate text-neutral-900 transition-colors group-hover:text-[#009AAA]"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: 13.6, fontWeight: 700 }}
                  >
                    {c.value}
                  </div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href}>
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* FORM */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: ACCENT,
              }}
            >
              SEND A MESSAGE
            </div>
            <h2
              className="mt-2 text-neutral-900"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: 28.8,
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Request a free quote
            </h2>
            <p
              className="mt-3 text-neutral-600"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, lineHeight: 1.65 }}
            >
              Fill in the form below and our team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-[#009AAA]/20 bg-[#009AAA]/5 px-6 py-14 text-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: ACCENT, color: "white" }}
                >
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3
                  className="mt-5 text-neutral-900"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: 20.8, fontWeight: 700 }}
                >
                  Thanks, {form.name.split(" ")[0]}!
                </h3>
                <p
                  className="mt-2 max-w-sm text-neutral-600"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, lineHeight: 1.6 }}
                >
                  Your enquiry is on its way to our team. We'll be in touch within one business
                  day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-2.5 text-neutral-800 transition-colors hover:bg-white"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 500 }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field
                    label="Full Name *"
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    placeholder="John Smith"
                    error={errors.name}
                    maxLength={100}
                  />
                  <Field
                    label="Email *"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    placeholder="john@company.com.au"
                    error={errors.email}
                    maxLength={255}
                  />
                  <Field
                    label="Phone"
                    type="tel"
                    value={form.phone ?? ""}
                    onChange={(v) => update("phone", v)}
                    placeholder="04xx xxx xxx"
                    error={errors.phone}
                    maxLength={30}
                  />
                  <Field
                    label="Company"
                    value={form.company ?? ""}
                    onChange={(v) => update("company", v)}
                    placeholder="Optional"
                    error={errors.company}
                    maxLength={120}
                  />
                </div>

                {/* Subject */}
                <div>
                  <Label>Subject *</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {subjects.map((s) => {
                      const active = form.subject === s;
                      return (
                        <button
                          type="button"
                          key={s}
                          onClick={() => update("subject", s)}
                          className="rounded-full border px-4 py-1.5 transition-all"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: 13,
                            fontWeight: 500,
                            borderColor: active ? ACCENT : "#e5e5e5",
                            backgroundColor: active ? ACCENT : "white",
                            color: active ? "white" : "#404040",
                          }}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                  {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
                </div>

                {/* Message */}
                <div>
                  <Label>Message *</Label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={6}
                    maxLength={1500}
                    placeholder="Tell us about your project — type of glass, dimensions, quantities, timeline..."
                    className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-[#009AAA] focus:outline-none focus:ring-2 focus:ring-[#009AAA]/20"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, lineHeight: 1.6 }}
                  />
                  <div className="mt-1 flex items-center justify-between">
                    {errors.message ? (
                      <ErrorText>{errors.message}</ErrorText>
                    ) : (
                      <span />
                    )}
                    <span
                      className="text-neutral-400"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: 11 }}
                    >
                      {form.message.length} / 1500
                    </span>
                  </div>
                </div>

                {sendError && (
                  <p className="text-sm font-medium text-red-600">{sendError}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                  style={{
                    backgroundColor: ACCENT,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  <Send className="h-4 w-4" />
                  {sending ? "Sending…" : "Send Message"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* INFO SIDE */}
          <div className="space-y-6">
            {/* HQ card */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: ACCENT, color: "white" }}
                >
                  <Building2 className="h-5 w-5" />
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 10.4,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: ACCENT,
                  }}
                >
                  HEAD OFFICE & FACILITY
                </div>
              </div>
              <h3
                className="mt-5 text-neutral-900"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: 19.2, fontWeight: 700, lineHeight: 1.2 }}
              >
                GlassCo Australia Pty Ltd
              </h3>
              <p
                className="mt-2 text-neutral-600"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, lineHeight: 1.7 }}
              >
                370–372 Hammond Road
                <br />
                Dandenong South, VIC 3175
                <br />
                Australia
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=370+Hammond+Road+Dandenong+South+VIC"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[#009AAA] transition-opacity hover:opacity-80"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 600 }}
              >
                Get directions
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Departments */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8">
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 10.4,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: ACCENT,
                }}
              >
                DEPARTMENTS
              </div>
              <ul className="mt-5 divide-y divide-neutral-100">
                {[
                  { label: "General Enquiries", email: "info@glasscoaustralia.com.au" },
                  { label: "Orders & Sales", email: "orders@glasscoaustralia.com.au" },
                  { label: "Trade / Wholesale", email: "info@glasscoaustralia.com.au" },
                ].map((d) => (
                  <li key={d.label} className="py-3">
                    <div
                      className="text-neutral-500"
                      style={{ fontFamily: "Poppins, sans-serif", fontSize: 12 }}
                    >
                      {d.label}
                    </div>
                    <a
                      href={`mailto:${d.email}`}
                      className="mt-0.5 block text-neutral-900 transition-colors hover:text-[#009AAA]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontSize: 12.8, fontWeight: 600 }}
                    >
                      {d.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="rounded-2xl border border-white/10 bg-[#009AAA] p-8 text-white">
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 10.4,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#ffffff",
                }}
              >
                FOLLOW US
              </div>
              <p
                className="mt-3 text-white/85"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, lineHeight: 1.65 }}
              >
                See our latest projects, products and facility updates.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {socialIcons.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/10 text-white transition-colors hover:bg-white hover:text-[#009AAA]"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="location" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 10.4,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: ACCENT,
                }}
              >
                FIND US
              </div>
              <h2
                className="mt-2 text-neutral-900"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: 28.8, fontWeight: 700 }}
              >
                Visit our Melbourne facility
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=370+Hammond+Road+Dandenong+South+VIC"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: ACCENT,
                fontFamily: "Poppins, sans-serif",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
            <iframe
              title="GlassCo Australia location"
              src="https://www.google.com/maps?q=370+Hammond+Road+Dandenong+South+VIC+3175&output=embed"
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- Small UI helpers ---------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="block text-neutral-700"
      style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 500 }}
    >
      {children}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="mt-1 block text-red-600"
      style={{ fontFamily: "Poppins, sans-serif", fontSize: 12 }}
    >
      {children}
    </span>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-[#009AAA] focus:outline-none focus:ring-2 focus:ring-[#009AAA]/20"
        style={{ fontFamily: "Poppins, sans-serif", fontSize: 14 }}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
