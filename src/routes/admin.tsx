import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import contactHero from "@/assets/hero-contact.jpg";
import quoteHero from "@/assets/hero-quote.jpg";
import residentialHero from "@/assets/solution-residential.jpg";
import commercialHero from "@/assets/solution-commercial.jpg";
import industrialHero from "@/assets/solution-industrial.jpg";

type PageImage = {
  slot: string;
  label: string;
  path: string;
  fallback: string;
};

const pages: PageImage[] = [
  { slot: "contact-hero", label: "Contact", path: "/contact", fallback: contactHero },
  { slot: "quote-hero", label: "Get a quote", path: "/quote", fallback: quoteHero },
  { slot: "solution-residential-hero", label: "Residential solutions", path: "/solutions/residential", fallback: residentialHero },
  { slot: "solution-commercial-hero", label: "Commercial solutions", path: "/solutions/commercial", fallback: commercialHero },
  { slot: "solution-industrial-hero", label: "Industrial & automotive", path: "/solutions/industrial-automotive", fallback: industrialHero },
];

export const Route = createFileRoute("/admin")({ component: AdminPage });

function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [activeSlot, setActiveSlot] = useState(pages[0].slot);
  const [images, setImages] = useState<Record<string, string>>({});
  const [preview, setPreview] = useState<string>();
  const [message, setMessage] = useState("");
  const activePage = pages.find((page) => page.slot === activeSlot) ?? pages[0];
  const currentImage = preview || images[activePage.slot] || activePage.fallback;

  useEffect(() => {
    if (!signedIn) return;
    fetch("/api/admin/site-images")
      .then((response) => (response.ok ? response.json() : {}))
      .then(setImages)
      .catch(() => setMessage("Could not load the saved image previews."));
  }, [signedIn]);

  async function login(event: React.FormEvent) {
    event.preventDefault();
    setMessage("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) setSignedIn(true);
    else setMessage("Email or password is incorrect.");
  }

  async function upload(file?: File) {
    if (!file) return;
    setMessage("Uploading image...");
    const body = new FormData();
    body.append("image", file);
    const response = await fetch(`/api/admin/site-images/${activePage.slot}`, { method: "POST", body });
    const result = await response.json().catch(() => ({}));
    if (response.ok && result.url) {
      setImages((saved) => ({ ...saved, [activePage.slot]: result.url }));
      setPreview(undefined);
      setMessage("Image saved. It is now live on the public page.");
    } else {
      setMessage("Upload failed. Use JPG, PNG, WebP or GIF under 12 MB.");
    }
  }

  function choosePage(slot: string) {
    setActiveSlot(slot);
    setPreview(undefined);
    setMessage("");
  }

  if (!signedIn) {
    return <main className="min-h-screen bg-slate-950 px-6 py-20 text-white"><form onSubmit={login} className="mx-auto max-w-md rounded-2xl bg-white p-8 text-slate-900 shadow-2xl"><p className="text-sm font-bold tracking-widest text-cyan-700">GLASSCO ADMIN</p><h1 className="mt-2 text-3xl font-bold">Sign in</h1><input className="mt-7 w-full rounded border p-3" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required /><input className="mt-3 w-full rounded border p-3" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required /><button className="mt-5 w-full rounded bg-cyan-700 p-3 font-bold text-white">Open photo manager</button>{message && <p className="mt-4 text-sm text-red-600">{message}</p>}</form></main>;
  }

  return <main className="min-h-screen bg-slate-100 text-slate-900"><div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row"><aside className="w-full shrink-0 bg-slate-950 p-6 text-white md:min-h-screen md:w-72"><p className="text-xs font-bold tracking-[0.2em] text-cyan-400">GLASSCO ADMIN</p><h1 className="mt-2 text-2xl font-bold">Page images</h1><p className="mt-3 text-sm leading-6 text-slate-400">Choose a page to preview and replace its hero image.</p><nav className="mt-8 space-y-2" aria-label="Pages">{pages.map((page) => <button key={page.slot} type="button" onClick={() => choosePage(page.slot)} className={`w-full rounded-lg px-4 py-3 text-left text-sm transition ${page.slot === activePage.slot ? "bg-cyan-600 font-bold text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}><span className="block">{page.label}</span><span className="mt-1 block text-xs font-normal text-slate-400">{page.path}</span></button>)}</nav></aside><section className="flex-1 p-6 md:p-10"><p className="text-sm font-bold tracking-widest text-cyan-700">IMAGE MANAGER</p><h2 className="mt-2 text-3xl font-bold">{activePage.label}</h2><p className="mt-2 text-slate-600">The preview shows the current image. Select a replacement to preview it before saving.</p><div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm"><img src={currentImage} alt={`${activePage.label} image preview`} className="aspect-[16/8] w-full object-cover" /><div className="border-t p-6"><p className="text-sm font-semibold text-slate-700">Current hero image preview</p><label className="mt-4 flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-cyan-300 bg-cyan-50 px-4 py-5 text-center text-sm font-semibold text-cyan-800 hover:bg-cyan-100"><span>Choose replacement image</span><input className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(event) => { const file = event.target.files?.[0]; if (file) setPreview(URL.createObjectURL(file)); }} /></label><div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={() => upload((document.querySelector('input[type=file]') as HTMLInputElement | null)?.files?.[0])} className="rounded-lg bg-cyan-700 px-5 py-3 text-sm font-bold text-white hover:bg-cyan-800">Save image</button>{preview && <button type="button" onClick={() => setPreview(undefined)} className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Discard preview</button>}<a href={activePage.path} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">View public page</a></div>{message && <p className="mt-4 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">{message}</p>}</div></div></section></div></main>;
}
