import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import contactHero from "@/assets/hero-contact.jpg";
import quoteHero from "@/assets/hero-quote.jpg";
import residentialHero from "@/assets/solution-residential.jpg";
import commercialHero from "@/assets/solution-commercial.jpg";
import industrialHero from "@/assets/solution-industrial.jpg";
import clearFloatHero from "@/assets/range-float.jpg";
import laminatedHero from "@/assets/range-laminated.jpg";
import lowIronHero from "@/assets/product-low-iron.png";
import acousticHero from "@/assets/product-acoustic.jpg";
import decorativeHero from "@/assets/product-decorative.jpg";
import automotiveHero from "@/assets/product-automotive.jpg";
import securityHero from "@/assets/product-security.jpg";
import printingHero from "@/assets/product-printing.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import certificationsHero from "@/assets/hero-certifications.jpg";
import resourcesHero from "@/assets/resources-hero.jpg";
import homeFacilityAsset from "@/assets/about-building-new.jpg.asset.json";
import productsHero from "@/assets/hero-glass-2.jpg";
import energyHero from "@/assets/hero-glass-3.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectCoastal from "@/assets/project-coastal.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectHeritage from "@/assets/project-heritage.jpg";
import projectAtrium from "@/assets/project-atrium.jpg";
import projectCurved from "@/assets/project-curved.jpg";
import serviceToughening from "@/assets/service-toughening.jpg";
import serviceIgu from "@/assets/service-igu.jpg";
import serviceProcessing from "@/assets/service-glass-processing.jpg";
import aboutCompany from "@/assets/about-panel-discussion.png";
import aboutManufacturingAsset from "@/assets/gallery/facades/facades-1.jpg.asset.json";
import aboutPrintingAsset from "@/assets/gallery/facades/facades-3.jpg.asset.json";
import aboutEnvironment from "@/assets/about-environment.jpg";
import shopfrontsAsset from "@/assets/commercial/shopfronts.jpg.asset.json";
import displayGlassAsset from "@/assets/commercial/display-glass.jpg.asset.json";
import showerScreenAsset from "@/assets/residential/shower-screen.jpg.asset.json";
import splashbackAsset from "@/assets/residential/splashback.jpg.asset.json";
import cncAsset from "@/assets/machinery/skill.jpg.asset.json";
import waterjetImage from "@/assets/machinery/techni-waterjet.png";
import bimatechImage from "@/assets/machinery/bimatech-techno-edge.png";
import floatCuttingImage from "@/assets/machinery/float-cutting-line.png";
import laminateCuttingImage from "@/assets/machinery/bottero-laminate-cutting.png";
import iguLineImage from "@/assets/machinery/lisec-toughening-line.png";
import furnaceAsset from "@/assets/machinery/northglass.jpg.asset.json";
import sectionImg1 from "@/assets/about-manufacturing.jpg";
import sectionImg2 from "@/assets/about-printing.jpg";
import sectionImg3 from "@/assets/about-environment.jpg";
import doorsAsset from "@/assets/gallery/doors/doors-1.jpg.asset.json";
import mirrorsAsset from "@/assets/gallery/mirrors/mirrors-1.jpg.asset.json";
import balustradeAsset from "@/assets/gallery/balustrade/balustrade-1.jpg.asset.json";
import poolFencingAsset from "@/assets/gallery/pool-fencing/pool-fencing-1.jpg.asset.json";
import officePartitionAsset from "@/assets/commercial/office-partition.jpg.asset.json";
import facadesAsset from "@/assets/commercial/facades.jpg.asset.json";
import glazingAsset from "@/assets/commercial/glazing.jpg.asset.json";
import commercialSecurityAsset from "@/assets/commercial/security.jpg.asset.json";
import industrialAutomotiveAsset from "@/assets/industrial/automotive.jpg.asset.json";
import industrialTransportAsset from "@/assets/industrial/transport.jpg.asset.json";
import industrialManufacturingAsset from "@/assets/industrial/manufacturing.jpg.asset.json";
import industrialWarehousesAsset from "@/assets/industrial/warehouses.jpg.asset.json";
import industrialInfrastructureAsset from "@/assets/industrial/infrastructure.jpg.asset.json";
import industrialSafetyAsset from "@/assets/industrial/safety.jpg.asset.json";
import pAqualite from "@/assets/patterns/aqualite.png.asset.json";
import pChinchilla from "@/assets/patterns/chinchilla.png.asset.json";
import pDiamond from "@/assets/patterns/diamond.png.asset.json";
import pAfricana from "@/assets/patterns/africana.png.asset.json";
import pFlor from "@/assets/patterns/flor.png.asset.json";
import pKasumi from "@/assets/patterns/kasumi.png.asset.json";
import pMillennium from "@/assets/patterns/millennium.png.asset.json";
import pNarrowReed from "@/assets/patterns/narrow-reed.png.asset.json";
import pRain from "@/assets/patterns/rain.png.asset.json";
import pReticulate from "@/assets/patterns/reticulate.png.asset.json";
import pDrop from "@/assets/patterns/drop.png.asset.json";
import pSatinlite from "@/assets/patterns/satinlite.png.asset.json";
import pSpotswood from "@/assets/patterns/spotswood.png.asset.json";

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
  { slot: "hero-products-clear-float-glass", label: "Clear float glass", path: "/products/clear-float-glass", fallback: clearFloatHero },
  { slot: "hero-products-clear-laminated-glass", label: "Clear laminated glass", path: "/products/clear-laminated-glass", fallback: laminatedHero },
  { slot: "hero-products-low-iron-glass", label: "Low iron glass", path: "/products/low-iron-glass", fallback: lowIronHero },
  { slot: "hero-products-acoustic-glass", label: "Acoustic glass", path: "/products/acoustic-glass", fallback: acousticHero },
  { slot: "hero-products-decorative-glass", label: "Decorative glass", path: "/products/decorative-glass", fallback: decorativeHero },
  { slot: "hero-products-automotive-glass", label: "Automotive glass", path: "/products/automotive-glass", fallback: automotiveHero },
  { slot: "hero-products-security-glass-assault-shield", label: "Security glass", path: "/products/security-glass-assault-shield", fallback: securityHero },
  { slot: "hero-services-digital-glass-printing", label: "Digital glass printing", path: "/services/digital-glass-printing", fallback: printingHero },
  { slot: "hero-about", label: "About", path: "/about", fallback: aboutHero },
  { slot: "hero-certifications", label: "Certifications", path: "/certifications", fallback: certificationsHero },
  { slot: "hero-resources", label: "Resources", path: "/resources", fallback: resourcesHero },
  { slot: "hero-products", label: "Products index hero", path: "/products", fallback: productsHero },
  { slot: "hero-services", label: "Services index hero", path: "/services", fallback: serviceProcessing },
  { slot: "hero-services-toughening-heat-strengthening", label: "Toughening service hero", path: "/services/toughening-heat-strengthening", fallback: serviceToughening },
  { slot: "hero-services-igu", label: "IGU service hero", path: "/services/igu", fallback: iguLineImage },
  { slot: "hero-services-glass-processing", label: "Glass processing hero", path: "/services/glass-processing", fallback: serviceProcessing },
  { slot: "home-who-we-are-facility", label: "Home section: Who we are facility", path: "/", fallback: homeFacilityAsset.url },
  { slot: "home-range-clear-float-glass", label: "Home range: Clear Float", path: "/", fallback: clearFloatHero },
  { slot: "home-range-clear-laminated-glass", label: "Home range: Clear Laminated", path: "/", fallback: laminatedHero },
  { slot: "home-range-energy-efficient-glass", label: "Home range: Energy Efficient", path: "/", fallback: energyHero },
  { slot: "home-range-security-glass", label: "Home range: Security Glass", path: "/", fallback: securityHero },
  { slot: "home-range-acoustic-glass", label: "Home range: Acoustic Glass", path: "/", fallback: acousticHero },
  { slot: "home-range-decorative-glass", label: "Home range: Decorative Glass", path: "/", fallback: decorativeHero },
  { slot: "home-project-office", label: "Home project: Office", path: "/", fallback: projectOffice },
  { slot: "home-project-retail", label: "Home project: Retail", path: "/", fallback: projectRetail },
  { slot: "home-project-coastal", label: "Home project: Coastal", path: "/", fallback: projectCoastal },
  { slot: "home-project-atrium", label: "Home project: Atrium", path: "/", fallback: projectAtrium },
  { slot: "home-project-curved", label: "Home project: Curved", path: "/", fallback: projectCurved },
  { slot: "home-project-heritage", label: "Home project: Heritage", path: "/", fallback: projectHeritage },
  { slot: "products-index-card-clear-float-glass", label: "Products card: Clear Float", path: "/products", fallback: clearFloatHero },
  { slot: "products-index-card-clear-laminated-glass", label: "Products card: Clear Laminated", path: "/products", fallback: laminatedHero },
  { slot: "products-index-card-low-iron-glass", label: "Products card: Low Iron", path: "/products", fallback: lowIronHero },
  { slot: "products-index-card-security-glass", label: "Products card: Security Glass", path: "/products", fallback: securityHero },
  { slot: "products-index-card-acoustic-glass", label: "Products card: Acoustic Glass", path: "/products", fallback: acousticHero },
  { slot: "products-index-card-decorative-glass", label: "Products card: Decorative Glass", path: "/products", fallback: decorativeHero },
  { slot: "products-index-card-energy-efficient-glass", label: "Products card: Energy Efficient", path: "/products", fallback: energyHero },
  { slot: "products-index-card-automotive-glass", label: "Products card: Automotive Glass", path: "/products", fallback: automotiveHero },
  { slot: "services-index-card-toughening", label: "Services card: Toughening", path: "/services", fallback: serviceToughening },
  { slot: "services-index-card-igu", label: "Services card: IGU", path: "/services", fallback: serviceIgu },
  { slot: "services-index-card-glass-processing", label: "Services card: Glass Processing", path: "/services", fallback: serviceProcessing },
  { slot: "services-index-card-digital-glass-printing", label: "Services card: Digital Printing", path: "/services", fallback: printingHero },
  { slot: "about-company-panel", label: "About section: Company panel", path: "/about", fallback: aboutCompany },
  { slot: "about-digital-ceramic-printing", label: "About section: Digital ceramic printing", path: "/about", fallback: aboutPrintingAsset.url },
  { slot: "about-manufacturing-capability", label: "About section: Manufacturing capability", path: "/about", fallback: aboutManufacturingAsset.url },
  { slot: "about-environmental-policy", label: "About section: Environmental policy", path: "/about", fallback: aboutEnvironment },
  { slot: "services-toughening-northglass-furnace", label: "Toughening section: NorthGlass furnace", path: "/services/toughening-heat-strengthening", fallback: furnaceAsset.url },
  { slot: "services-igu-overview-line", label: "IGU section: Overview line image", path: "/services/igu", fallback: iguLineImage },
  { slot: "services-glass-processing-cnc-line", label: "Glass processing section: CNC line", path: "/services/glass-processing", fallback: cncAsset.url },
  { slot: "services-glass-processing-waterjet", label: "Glass processing section: Waterjet", path: "/services/glass-processing", fallback: waterjetImage },
  { slot: "services-glass-processing-bimatech", label: "Glass processing section: Bimatech", path: "/services/glass-processing", fallback: bimatechImage },
  { slot: "services-glass-processing-float-cutting", label: "Glass processing section: Float cutting", path: "/services/glass-processing", fallback: floatCuttingImage },
  { slot: "services-glass-processing-laminate-cutting", label: "Glass processing section: Laminate cutting", path: "/services/glass-processing", fallback: laminateCuttingImage },
  { slot: "products-clear-float-glass-section-1-key-features", label: "Clear Float section: Key features", path: "/products/clear-float-glass", fallback: sectionImg1 },
  { slot: "products-clear-float-glass-section-2-applications", label: "Clear Float section: Applications", path: "/products/clear-float-glass", fallback: sectionImg2 },
  { slot: "products-clear-laminated-glass-section-1-key-features", label: "Clear Laminated section: Key features", path: "/products/clear-laminated-glass", fallback: sectionImg1 },
  { slot: "products-clear-laminated-glass-section-2-applications", label: "Clear Laminated section: Applications", path: "/products/clear-laminated-glass", fallback: sectionImg2 },
  { slot: "products-low-iron-glass-section-1-key-features", label: "Low Iron section: Key features", path: "/products/low-iron-glass", fallback: sectionImg1 },
  { slot: "products-low-iron-glass-section-2-applications", label: "Low Iron section: Applications", path: "/products/low-iron-glass", fallback: sectionImg2 },
  { slot: "products-acoustic-glass-section-1-what-is-acoustic-glass", label: "Acoustic section: What is acoustic glass", path: "/products/acoustic-glass", fallback: sectionImg1 },
  { slot: "products-acoustic-glass-section-2-why-noise-reduction-matters", label: "Acoustic section: Noise reduction", path: "/products/acoustic-glass", fallback: sectionImg2 },
  { slot: "products-acoustic-glass-section-3-how-acoustic-performance-works", label: "Acoustic section: Performance works", path: "/products/acoustic-glass", fallback: sectionImg3 },
  { slot: "products-decorative-glass-section-1-what-is-decorative-glass", label: "Decorative section: What is decorative glass", path: "/products/decorative-glass", fallback: sectionImg1 },
  { slot: "products-decorative-glass-section-2-patterned-and-privacy-glass", label: "Decorative section: Patterned privacy", path: "/products/decorative-glass", fallback: sectionImg2 },
  { slot: "products-security-glass-assault-shield-section-1-key-features", label: "Security section: Key features", path: "/products/security-glass-assault-shield", fallback: sectionImg1 },
  { slot: "products-security-glass-assault-shield-section-2-applications", label: "Security section: Applications", path: "/products/security-glass-assault-shield", fallback: sectionImg2 },
  { slot: "products-security-glass-assault-shield-section-3-performance", label: "Security section: Performance", path: "/products/security-glass-assault-shield", fallback: sectionImg3 },
  { slot: "services-digital-glass-printing-section-1-about-the-machine", label: "Digital printing section: About machine", path: "/services/digital-glass-printing", fallback: sectionImg1 },
  { slot: "services-digital-glass-printing-section-2-premium-digital-ceramic-printing", label: "Digital printing section: Premium printing", path: "/services/digital-glass-printing", fallback: sectionImg2 },
  { slot: "services-digital-glass-printing-section-3-advanced-production-environment", label: "Digital printing section: Production", path: "/services/digital-glass-printing", fallback: sectionImg3 },
  { slot: "gallery-project-atrium", label: "Gallery: Atrium project", path: "/gallery", fallback: projectAtrium },
  { slot: "gallery-project-coastal", label: "Gallery: Coastal project", path: "/gallery", fallback: projectCoastal },
  { slot: "gallery-project-curved", label: "Gallery: Curved project", path: "/gallery", fallback: projectCurved },
  { slot: "gallery-project-heritage", label: "Gallery: Heritage project", path: "/gallery", fallback: projectHeritage },
  { slot: "gallery-project-office", label: "Gallery: Office project", path: "/gallery", fallback: projectOffice },
  { slot: "gallery-project-retail", label: "Gallery: Retail project", path: "/gallery", fallback: projectRetail },
  { slot: "gallery-display-glass-1", label: "Gallery: Display glass", path: "/gallery?category=display-glass", fallback: displayGlassAsset.url },
  { slot: "gallery-shopfronts-featured", label: "Gallery: Shopfronts featured", path: "/gallery?category=shopfronts", fallback: shopfrontsAsset.url },
  { slot: "gallery-shower-screens-featured", label: "Gallery: Shower screens featured", path: "/gallery?category=shower-screens", fallback: showerScreenAsset.url },
  { slot: "gallery-splashbacks-featured", label: "Gallery: Splashbacks featured", path: "/gallery?category=splashbacks", fallback: splashbackAsset.url },];

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

  return <main className="min-h-screen bg-slate-100 text-slate-900"><div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row"><aside className="w-full shrink-0 bg-slate-950 p-6 text-white md:min-h-screen md:w-72"><p className="text-xs font-bold tracking-[0.2em] text-cyan-400">GLASSCO ADMIN</p><h1 className="mt-2 text-2xl font-bold">Page images</h1><p className="mt-3 text-sm leading-6 text-slate-400">Choose a page or section to preview and replace its image.</p><nav className="mt-8 space-y-2" aria-label="Pages">{pages.map((page) => <button key={page.slot} type="button" onClick={() => choosePage(page.slot)} className={`w-full rounded-lg px-4 py-3 text-left text-sm transition ${page.slot === activePage.slot ? "bg-cyan-600 font-bold text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}><span className="block">{page.label}</span><span className="mt-1 block text-xs font-normal text-slate-400">{page.path}</span></button>)}</nav></aside><section className="flex-1 p-6 md:p-10"><p className="text-sm font-bold tracking-widest text-cyan-700">IMAGE MANAGER</p><h2 className="mt-2 text-3xl font-bold">{activePage.label}</h2><p className="mt-2 text-slate-600">The preview shows the current image. Select a replacement to preview it before saving.</p><div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm"><img src={currentImage} alt={`${activePage.label} image preview`} className="aspect-[16/8] w-full object-cover" /><div className="border-t p-6"><p className="text-sm font-semibold text-slate-700">Current image preview</p><label className="mt-4 flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-cyan-300 bg-cyan-50 px-4 py-5 text-center text-sm font-semibold text-cyan-800 hover:bg-cyan-100"><span>Choose replacement image</span><input className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(event) => { const file = event.target.files?.[0]; if (file) setPreview(URL.createObjectURL(file)); }} /></label><div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={() => upload((document.querySelector('input[type=file]') as HTMLInputElement | null)?.files?.[0])} className="rounded-lg bg-cyan-700 px-5 py-3 text-sm font-bold text-white hover:bg-cyan-800">Save image</button>{preview && <button type="button" onClick={() => setPreview(undefined)} className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Discard preview</button>}<a href={activePage.path} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">View public page</a></div>{message && <p className="mt-4 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">{message}</p>}</div></div></section></div></main>;
}



