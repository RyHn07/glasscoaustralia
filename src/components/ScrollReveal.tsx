import { useEffect } from "react";

/**
 * Global scroll-triggered animations.
 *
 *  - Headings (h1/h2/h3) → typewriter effect on first view.
 *  - Other content (paragraphs, images, buttons, cards) → fade + rise.
 *
 * Add `data-no-reveal` to opt an element out entirely.
 * Add `data-no-typewriter` to a heading to skip the typewriter
 * (it will still get the fade reveal).
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const FADE_SELECTOR = [
      "[data-reveal]",
      "section p",
      "section img",
      "section button",
      "section a.btn-animate",
      "section article",
      "section .card",
    ].join(",");
    const TYPE_SELECTOR = "h1, h2, h3";

    const seen = new WeakSet<Element>();

    /* ---------- Typewriter ---------- */
    const typewrite = (el: HTMLElement, speed = 28) => {
      // Collect every text node in order, preserve their parents (keeps colored spans intact)
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      const parts: { node: Text; text: string }[] = [];
      let n: Node | null = walker.nextNode();
      while (n) {
        const t = n as Text;
        if (t.data.length > 0) parts.push({ node: t, text: t.data });
        n = walker.nextNode();
      }
      if (parts.length === 0) return;

      // Lock height to prevent layout jump while typing
      const h = el.getBoundingClientRect().height;
      el.style.minHeight = `${h}px`;

      // Empty all text
      parts.forEach((p) => (p.node.data = ""));
      el.classList.add("typewriter-active");

      let idx = 0;
      const tick = () => {
        if (idx >= parts.length) {
          el.classList.remove("typewriter-active");
          el.style.minHeight = "";
          return;
        }
        const cur = parts[idx];
        if (cur.node.data.length < cur.text.length) {
          cur.node.data = cur.text.slice(0, cur.node.data.length + 1);
          window.setTimeout(tick, speed);
        } else {
          idx++;
          tick();
        }
      };
      tick();
    };

    /* ---------- Observers ---------- */
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            fadeObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const typeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            typewrite(e.target as HTMLElement);
            typeObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );

    const prepareFade = (el: Element) => {
      if (seen.has(el)) return;
      seen.add(el);
      if ((el as HTMLElement).dataset.noReveal !== undefined) return;
      el.classList.add("reveal");
      if (prefersReduced) el.classList.add("reveal-in");
      else fadeObserver.observe(el);
    };

    const prepareType = (el: Element) => {
      if (seen.has(el)) return;
      seen.add(el);
      const h = el as HTMLElement;
      if (h.dataset.noReveal !== undefined) return;
      if (h.dataset.noTypewriter !== undefined) {
        // Fall back to fade reveal
        h.classList.add("reveal");
        if (prefersReduced) h.classList.add("reveal-in");
        else fadeObserver.observe(h);
        return;
      }
      if (prefersReduced) return; // leave text as-is
      typeObserver.observe(h);
    };

    const scan = () => {
      document.querySelectorAll(TYPE_SELECTOR).forEach(prepareType);
      document.querySelectorAll(FADE_SELECTOR).forEach(prepareFade);
    };

    scan();

    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      fadeObserver.disconnect();
      typeObserver.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
