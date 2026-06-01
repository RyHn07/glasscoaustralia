import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import floatImg from "@/assets/range-float.jpg";
import temperedImg from "@/assets/range-tempered.jpg";
import laminatedImg from "@/assets/range-laminated.jpg";
import lowEImg from "@/assets/range-lowe.jpg";
import mirrorsImg from "@/assets/range-mirrors.jpg";
import acousticImg from "@/assets/product-acoustic.jpg";
import decorativeImg from "@/assets/product-decorative.jpg";
import energyImg from "@/assets/product-energy.jpg";
import printingImg from "@/assets/product-printing.jpg";
import atriumImg from "@/assets/project-atrium.jpg";
import coastalImg from "@/assets/project-coastal.jpg";
import curvedImg from "@/assets/project-curved.jpg";
import heritageImg from "@/assets/project-heritage.jpg";
import officeImg from "@/assets/project-office.jpg";
import retailImg from "@/assets/project-retail.jpg";

import waterjetImg from "@/assets/glass-waterjet.jpg";
import bimatechImg from "@/assets/glass-bimatech.jpg";
import furnaceImg from "@/assets/northglass-furnace.jpg";
import aboutManu from "@/assets/about-manufacturing.jpg";
import aboutBuilding from "@/assets/about-building.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — GlassCo" },
      {
        name: "description",
        content:
          "Explore GlassCo's portfolio of premium glass products, projects and in-house manufacturing capabilities.",
      },
      { property: "og:title", content: "Gallery — GlassCo" },
      {
        property: "og:description",
        content:
          "A visual showcase of our glass range, finished projects and processing facility.",
      },
    ],
  }),
  component: GalleryPage,
});

type GalleryImage = { src: string; alt: string; category: "projects" | "products" };

const allImages: GalleryImage[] = [
  // Projects
  { src: atriumImg, alt: "Glass atrium ceiling installation", category: "projects" },
  { src: coastalImg, alt: "Coastal residence with large glass facade", category: "projects" },
  { src: curvedImg, alt: "Curved glass facade", category: "projects" },
  { src: heritageImg, alt: "Heritage building glass restoration", category: "projects" },
  { src: officeImg, alt: "Modern office glass partitions", category: "projects" },
  { src: retailImg, alt: "Retail storefront glazing", category: "projects" },
  // Products & Machinery
  { src: floatImg, alt: "Stack of clear float glass sheets", category: "products" },
  { src: temperedImg, alt: "Toughened safety glass panels", category: "products" },
  { src: laminatedImg, alt: "Laminated safety glass cross-section", category: "products" },
  { src: lowEImg, alt: "Low-E coated glass facade", category: "products" },
  { src: mirrorsImg, alt: "Custom silvered mirror panels", category: "products" },
  { src: acousticImg, alt: "Acoustic glass interior", category: "products" },
  { src: decorativeImg, alt: "Decorative patterned glass", category: "products" },
  { src: energyImg, alt: "Energy efficient glazing", category: "products" },
  { src: printingImg, alt: "Digital ceramic printed glass", category: "products" },
  { src: furnaceImg, alt: "NorthGlass toughening furnace", category: "products" },
  { src: bimatechImg, alt: "Bimatech Techno edge processing", category: "products" },
  { src: aboutManu, alt: "Manufacturing facility floor", category: "products" },
  { src: aboutBuilding, alt: "GlassCo headquarters building", category: "products" },
];

type Tab = "projects" | "products";

function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

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
  }, [isOpen]);

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
                    fontFamily: "Rajdhani, sans-serif",
                    fontSize: "14px",
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
                  fontFamily: "Rajdhani, sans-serif",
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "#0a0a0a",
                  margin: 0,
                }}
              >
                Projects, <span style={{ color: "#009AAA" }}>Products</span> & Facility
              </h1>
            </div>
            <p
              className="text-neutral-600 lg:text-right"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: 1.7 }}
            >
              Click any image to view it full-screen. Use arrow keys to browse.
            </p>
          </div>

          {/* Image grid: 2 + 3 repeating */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-6">
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
                  <img
                    src={it.src}
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
          <img
            key={activeIndex}
            src={images[activeIndex].src}
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
