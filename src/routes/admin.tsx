import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const slots = [
  ["contact-hero", "Contact page hero"],
  ["quote-hero", "Quote page hero"],
  ["solution-residential-hero", "Residential solution hero"],
  ["solution-commercial-hero", "Commercial solution hero"],
  ["solution-industrial-hero", "Industrial & automotive solution hero"],
] as const;

export const Route = createFileRoute("/admin")({ component: AdminPage });

function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [message, setMessage] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault(); setMessage("");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    if (response.ok) setSignedIn(true); else setMessage("Email or password is incorrect.");
  }
  async function upload(slot: string, file?: File) {
    if (!file) return;
    setMessage("Uploading...");
    const body = new FormData(); body.append("image", file);
    const response = await fetch(`/api/admin/site-images/${slot}`, { method: "POST", body });
    setMessage(response.ok ? "Photo saved. Refresh the public page to see it." : "Upload failed. Use JPG, PNG, WebP or GIF under 12 MB.");
  }
  if (!signedIn) return <main className="min-h-screen bg-slate-950 px-6 py-20 text-white"><form onSubmit={login} className="mx-auto max-w-md rounded-2xl bg-white p-8 text-slate-900"><p className="text-sm font-bold tracking-widest text-cyan-700">GLASSCO ADMIN</p><h1 className="mt-2 text-3xl font-bold">Sign in</h1><input className="mt-7 w-full rounded border p-3" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><input className="mt-3 w-full rounded border p-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><button className="mt-5 w-full rounded bg-cyan-700 p-3 font-bold text-white">Open photo manager</button>{message && <p className="mt-4 text-sm text-red-600">{message}</p>}</form></main>;
  return <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900"><div className="mx-auto max-w-5xl"><p className="font-bold tracking-widest text-cyan-700">GLASSCO ADMIN</p><h1 className="mt-2 text-3xl font-bold">Site photo manager</h1><p className="mt-2 text-slate-600">Upload a new image for a page. JPG, PNG, WebP or GIF; maximum 12 MB.</p><div className="mt-8 grid gap-5 md:grid-cols-2">{slots.map(([slot, label]) => <label key={slot} className="rounded-xl bg-white p-6 shadow-sm"><span className="block text-lg font-bold">{label}</span><span className="mt-1 block text-sm text-slate-500">Choose replacement photo</span><input className="mt-5 block w-full text-sm" type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(e) => upload(slot, e.target.files?.[0])} /></label>)}</div>{message && <p className="mt-6 rounded bg-white p-4">{message}</p>}</div></main>;
}