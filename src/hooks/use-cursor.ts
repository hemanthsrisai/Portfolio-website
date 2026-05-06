import { useEffect } from "react";

/** Floating glow cursor dot that trails the mouse. Disabled on touch. */
export function useCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);

    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button']")) {
        dot.style.width = "44px";
        dot.style.height = "44px";
      } else {
        dot.style.width = "28px";
        dot.style.height = "28px";
      }
    };
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      dot.remove();
    };
  }, []);
}
