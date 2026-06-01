import { useEffect } from "react";

/**
 * Globally apply scroll-triggered reveal animations.
 *
 * Targets every h1/h2/h3 plus any element with [data-reveal].
 * Adds the `.reveal` class on mount and the `.reveal-in` class
 * once the element scrolls into view.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const SELECTOR = [
      "h1",
      "h2",
      "h3",
      "[data-reveal]",
      "section p",
      "section img",
      "section button",
      "section a.btn-animate",
      "section article",
      "section .card",
    ].join(",");

    const prepared = new WeakSet<Element>();

    const prepare = (el: Element) => {
      if (prepared.has(el)) return;
      prepared.add(el);
      // Skip elements that opt-out
      if ((el as HTMLElement).dataset.noReveal !== undefined) return;
      el.classList.add("reveal");
      if (prefersReduced) {
        el.classList.add("reveal-in");
      } else {
        observer.observe(el);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach(prepare);
    };

    scan();

    // Re-scan when route content changes
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
