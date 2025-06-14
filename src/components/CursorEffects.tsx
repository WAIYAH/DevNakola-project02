
import React, { useEffect } from "react";

// Custom cursor—a dot trailing slightly behind mouse and a ring that scales on section hovers
export default function CursorEffects() {
  useEffect(() => {
    if (window.innerWidth < 900) return; // No cursor for mobile
    const dot = document.createElement("div");
    dot.style.position = "fixed";
    dot.style.left = "0"; dot.style.top = "0";
    dot.style.width = "12px"; dot.style.height = "12px";
    dot.style.background = "#9A72FF";
    dot.style.borderRadius = "50%";
    dot.style.pointerEvents = "none";
    dot.style.zIndex = "9999";
    dot.style.boxShadow = "0 0 14px #9A72FFcc";
    dot.style.transition = "background 0.2s";
    document.body.appendChild(dot);

    const ring = document.createElement("div");
    ring.style.position = "fixed";
    ring.style.left = "0"; ring.style.top = "0";
    ring.style.width = "40px"; ring.style.height = "40px";
    ring.style.border = "2.5px solid #A18DF6";
    ring.style.borderRadius = "50%";
    ring.style.pointerEvents = "none";
    ring.style.zIndex = "9998";
    ring.style.transition = "transform 0.18s cubic-bezier(.38,.84,.68,1.13), border 0.15s";
    document.body.appendChild(ring);

    let tx = 0, ty = 0, dx = 0, dy = 0;
    const update = (e: MouseEvent) => {
      tx += (e.clientX - tx) * 0.25;
      ty += (e.clientY - ty) * 0.25;
      dx = e.clientX;
      dy = e.clientY;
      dot.style.transform = `translate(${tx - 6}px,${ty - 6}px)`;
      ring.style.transform = `translate(${dx - 20}px,${dy - 20}px)`;
      requestAnimationFrame(() => {});
    };
    document.addEventListener("mousemove", update);

    const scaleOnHover = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("button, a, .glass-card")) {
        ring.style.transform += " scale(1.4)";
        ring.style.borderColor = "#43FFB5";
        dot.style.background = "#43FFB5";
      } else {
        ring.style.transform = ring.style.transform.replace(/scale\(.*?\)/, "").trim();
        ring.style.borderColor = "#A18DF6";
        dot.style.background = "#9A72FF";
      }
    };
    document.addEventListener("mousemove", scaleOnHover);

    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = "";
      document.body.removeChild(dot);
      document.body.removeChild(ring);
      document.removeEventListener("mousemove", update);
      document.removeEventListener("mousemove", scaleOnHover);
    };
  }, []);
  return null;
}
