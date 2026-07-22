import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteImage } from "@/lib/site-images";

import atriumImg from "@/assets/project-atrium.jpg";
import coastalImg from "@/assets/project-coastal.jpg";
import curvedImg from "@/assets/project-curved.jpg";
import heritageImg from "@/assets/project-heritage.jpg";
import officeImg from "@/assets/project-office.jpg";
import retailImg from "@/assets/project-retail.jpg";
import displayGlassAsset from "@/assets/commercial/display-glass.jpg.asset.json";
import shopfrontsAsset from "@/assets/commercial/shopfronts.jpg.asset.json";
import showerScreenAsset from "@/assets/residential/shower-screen.jpg.asset.json";
import splashbackAsset from "@/assets/residential/splashback.jpg.asset.json";


export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â GlassCo" },
      {
        name: "description",
        content:
          "Explore GlassCo's portfolio of premium glass products, projects and in-house manufacturing capabilities.",
      },
      { property: "og:title", content: "Gallery ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â GlassCo" },
      {
        property: "og:description",
        content:
          "A visual showcase of our glass range, finished projects and processing facility.",
      },
    ],
  }),
  component: GalleryPage,
});

type Tab =
  | "projects"
  | "balustrade"
  | "doors"
  | "facades"
  | "infrastructure-projects"
  | "mirrors"
  | "office-partitions"
  | "pool-fencing"
  | "display-glass"
  | "shopfronts"
  | "shower-screens"
  | "splashbacks"
  | "security-safety-glass";


type GalleryImage = { src: string; alt: string; category: Tab; slot?: string };

// Load all uploaded category assets via Vite's glob import
const categoryAssets = import.meta.glob<{ default: { url: string } }>(
  "../assets/gallery/*/*.asset.json",
  { eager: true },
);
const localCategoryAssets = import.meta.glob<{ default: string }>(
  "../assets/gallery/*/*.jpg",
  { eager: true },
);

function buildCategoryImages(folder: string, altPrefix: string, category: Tab): GalleryImage[] {
  const remoteImages = Object.entries(categoryAssets).map(([path, mod]) => ({
    path,
    src: mod.default.url,
  }));
  const localImages = Object.entries(localCategoryAssets).map(([path, mod]) => ({
    path,
    src: mod.default,
  }));

  return [...remoteImages, ...localImages]
    .filter(({ path }) => path.includes(`/gallery/${folder}/`))
    .map(({ path, src }) => {
      const m = path.match(/-(\d+)\.jpg(?:\.asset\.json)?$/);
      const n = m ? parseInt(m[1], 10) : 0;
      return {
        src,
        alt: `${altPrefix} ${n}`,
        category,
        _n: n,
      } as GalleryImage & { _n: number };
    })
    .sort((a, b) => a._n - b._n)
    .map(({ _n, ...rest }) => rest);
}

const allImages: GalleryImage[] = [
  // Projects
  { src: atriumImg, slot: "gallery-project-atrium", alt: "Glass atrium ceiling installation", category: "projects" },
  { src: coastalImg, slot: "gallery-project-coastal", alt: "Coastal residence with large glass facade", category: "projects" },
  { src: curvedImg, slot: "gallery-project-curved", alt: "Curved glass facade", category: "projects" },
  { src: heritageImg, slot: "gallery-project-heritage", alt: "Heritage building glass restoration", category: "projects" },
  { src: officeImg, slot: "gallery-project-office", alt: "Modern office glass partitions", category: "projects" },
  { src: retailImg, slot: "gallery-project-retail", alt: "Retail storefront glazing", category: "projects" },
  // Uploaded category photos

  ...buildCategoryImages("balustrade", "Balustrade installation", "balustrade"),
  ...buildCategoryImages("doors", "Glass door", "doors"),
  ...buildCategoryImages("facades", "Facade & curtain wall", "facades"),
  ...buildCategoryImages(
    "infrastructure-projects",
    "Infrastructure project",
    "infrastructure-projects",
  ),
  ...buildCategoryImages("mirrors", "Mirror installation", "mirrors"),
  ...buildCategoryImages("office-partitions", "Office partition", "office-partitions"),
  ...buildCategoryImages("pool-fencing", "Pool fencing", "pool-fencing"),
  ...buildCategoryImages("splashbacks", "Kitchen glass splashback", "splashbacks"),
  ...buildCategoryImages(
    "security-safety-glass",
    "Security & Safety Glass",
    "security-safety-glass",
  ),
  ...buildCategoryImages("shower-screens", "Frameless shower screen", "shower-screens"),
  ...buildCategoryImages("display-glass", "Display glass installation", "display-glass"),
  { src: displayGlassAsset.url, slot: "gallery-display-glass-1", alt: "Display glass installation", category: "display-glass" },
  ...buildCategoryImages("shopfronts", "Commercial shopfront glazing", "shopfronts"),
  { src: shopfrontsAsset.url, slot: "gallery-shopfronts-featured", alt: "Commercial shopfront glazing", category: "shopfronts" },
  { src: showerScreenAsset.url, slot: "gallery-shower-screens-featured", alt: "Frameless shower screen", category: "shower-screens" },
  { src: splashbackAsset.url, slot: "gallery-splashbacks-featured", alt: "Kitchen glass splashback", category: "splashbacks" },
];


const galleryTabs: { id: Tab; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "display-glass", label: "Display Glass" },
  { id: "shopfronts", label: "Shopfronts" },
  { id: "doors", label: "Windows & Doors" },
  { id: "shower-screens", label: "Shower Screens" },
  { id: "splashbacks", label: "Splashbacks" },
  { id: "security-safety-glass", label: "Security & Safety Glass" },
  { id: "balustrade", label: "Balustrade" },
  { id: "facades", label: "Facades & Curtain Walls" },
  { id: "infrastructure-projects", label: "Infrastructure Projects" },
  { id: "mirrors", label: "Mirrors" },
  { id: "office-partitions", label: "Office Partitions" },
  { id: "pool-fencing", label: "Pool Fencing" },
];

function GalleryPage() {
  const [tab, setTab] = useState<Tab>(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    return category && galleryTabs.some((item) => item.id === category)
      ? (category as Tab)
      : "projects";
  });
  const images = useMemo(() => allImages.filter((i) => i.category === tab), [tab]);
  const tabLabel = galleryTabs.find((item) => item.id === tab)?.label ?? "Gallery";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    setActiveIndex(null);
  }, [tab]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + images.length) % images.length,
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, images.length]);

  const next = () =>
    setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? i : (i - 1 + images.length) % images.length,
    );


  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="w-full bg-white pb-16 pt-14">
        <div className="mx-auto max-w-[1280px] px-6">
          {/* Header */}
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
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "#009AAA",
                  }}
                >
                  OUR GALLERY
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2.025rem, 5vw, 3.6rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "#0a0a0a",
                  margin: 0,
                  textTransform: "capitalize",
                }}
              >
                {tab === "projects" && (<>Our <span style={{ color: "#009AAA" }}>Projects</span></>)}
                
                {tab === "balustrade" && (<><span style={{ color: "#009AAA" }}>Balustrade</span></>)}
                {tab === "doors" && (<><span style={{ color: "#009AAA" }}>Doors</span></>)}
                {tab === "facades" && (<><span style={{ color: "#009AAA" }}>Facades</span> & Curtain Walls</>)}
                {tab === "infrastructure-projects" && (<>Infrastructure <span style={{ color: "#009AAA" }}>Projects</span></>)}
                {tab === "mirrors" && (<><span style={{ color: "#009AAA" }}>Mirrors</span></>)}
                {tab === "office-partitions" && (<>Office <span style={{ color: "#009AAA" }}>Partitions</span></>)}
                {tab === "pool-fencing" && (<>Pool <span style={{ color: "#009AAA" }}>Fencing</span></>)}
                {tab === "display-glass" && (<>Display <span style={{ color: "#009AAA" }}>Glass</span></>)}
                {tab === "shopfronts" && (<>Commercial <span style={{ color: "#009AAA" }}>Shopfronts</span></>)}
                {tab === "shower-screens" && (<>Shower <span style={{ color: "#009AAA" }}>Screens</span></>)}
                {tab === "splashbacks" && (<>Kitchen <span style={{ color: "#009AAA" }}>Splashbacks</span></>)}
                {tab === "security-safety-glass" && (<>Security & <span style={{ color: "#009AAA" }}>Safety Glass</span></>)}
              </h1>
            </div>
            <p
              className="text-neutral-600 lg:text-right"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
            >
              Click any image to view it full-screen. Use arrow keys to browse.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="mt-10 flex flex-wrap gap-2 overflow-x-auto">
            {galleryTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                  tab === t.id
                    ? "border-[#009AAA] bg-[#009AAA] text-white shadow-[0_6px_16px_-6px_rgba(0,154,170,0.6)]"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-[#009AAA]/50 hover:text-[#009AAA]"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "0.04em" }}
              >
                {t.label}
              </button>
            ))}
          </div>


          {/* Image grid: 2 + 3 repeating */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-6">
            {images.map((it, i) => {
              const posInGroup = i % 5;
              const span = posInGroup < 2 ? "md:col-span-3" : "md:col-span-2";
              return (
                <button
                  key={`${it.alt}-${i}`}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`group relative h-[380px] overflow-hidden rounded-xl bg-neutral-200 ${span} cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#009AAA] focus:ring-offset-2`}
                  aria-label={`View ${it.alt}`}
                >
                  <SiteImage
                    slot={it.slot ?? `gallery-${it.category}-${i + 1}`}
                    fallback={it.src}
                    alt={it.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Hover overlay tint */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
                  {/* Theme color corner accent on hover */}
                  <div className="pointer-events-none absolute inset-0 ring-0 ring-[#009AAA] transition-all duration-300 group-hover:ring-4 rounded-xl" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-black"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <SiteImage
            key={activeIndex}
            slot={images[activeIndex].slot ?? `gallery-${images[activeIndex].category}-${activeIndex + 1}`}
            fallback={images[activeIndex].src}
            alt={images[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] object-contain animate-scale-in"
          />

          {/* Counter */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
