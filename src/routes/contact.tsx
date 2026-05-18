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
  Facebook,
  Instagram,
  Linkedin,
  Building2,
} from "lucide-react";
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

  const update = (k: keyof FormState, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-[#0b1f24] text-white">
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
        <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:py-28">
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
              fontFamily: "Rajdhani, sans-serif",
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
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
            { icon: Clock, label: "HOURS", value: "Mon–Fri · 8AM–6PM", href: undefined },
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
                      fontFamily: "Rajdhani, sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    className="mt-0.5 truncate text-neutral-900 transition-colors group-hover:text-[#009AAA]"
                    style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 17, fontWeight: 700 }}
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
                fontFamily: "Rajdhani, sans-serif",
                fontSize: 13,
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
                fontFamily: "Rajdhani, sans-serif",
                fontSize: 36,
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
                  style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 26, fontWeight: 700 }}
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

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-white transition-opacity hover:opacity-90 md:w-auto"
                  style={{
                    backgroundColor: ACCENT,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  <Send className="h-4 w-4" />
                  Send Message
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
                    fontFamily: "Rajdhani, sans-serif",
                    fontSize: 13,
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
                style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 24, fontWeight: 700, lineHeight: 1.2 }}
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
                  fontFamily: "Rajdhani, sans-serif",
                  fontSize: 13,
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
                      style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 16, fontWeight: 600 }}
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
                  fontFamily: "Rajdhani, sans-serif",
                  fontSize: 13,
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
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/10 text-white transition-colors hover:bg-white hover:text-[#009AAA]"
                  >
                    <Icon className="h-4 w-4" />
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
                  fontFamily: "Rajdhani, sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: ACCENT,
                }}
              >
                FIND US
              </div>
              <h2
                className="mt-2 text-neutral-900"
                style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 36, fontWeight: 700 }}
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
