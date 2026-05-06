import { useEffect } from "react";

/**
 * Adds `is-visible` class to elements with `.reveal`, `.reveal-up`,
 * `.reveal-left`, `.reveal-right`, `.spine` when they scroll into view.
 * Uses Intersection Observer for performance.
 */
export function useReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-up, .reveal-left, .reveal-right, .spine";
    const els = document.querySelectorAll<HTMLElement>(selectors);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
