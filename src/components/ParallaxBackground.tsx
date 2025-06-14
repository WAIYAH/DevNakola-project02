
import React, { useRef, useEffect } from "react";

const blobs = [
  { cx: 90,  cy: 120, r: 86, color: "#9A72FF", duration: 12, delay: 0.1, opacity: 0.18 },
  { cx: 320, cy: 60,  r: 48, color: "#43FFB5", duration: 16, delay: 0.6, opacity: 0.18 },
  { cx: 260, cy: 185, r: 70, color: "#F683FF", duration: 18, delay: 0.3, opacity: 0.13 },
  { cx: 470, cy: 130, r: 56, color: "#7bfffd", duration: 14, delay: 0.2, opacity: 0.13 }
];

// Subtle parallax effect for SVG blobs, moves blobs based on scroll and mouse.
export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const { innerWidth: iw, innerHeight: ih } = window;
      const mx = (e.clientX - iw / 2) / iw;
      const my = (e.clientY - ih / 2) / ih;
      el.querySelectorAll<SVGCircleElement>(".parallax-blob").forEach((circle, idx) => {
        circle.style.transform = `translate(${mx * 40 * (1 + idx * 0.2)}px, ${my * 30 * (1 + idx * 0.23)}px) scale(1)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none -z-10"
      aria-hidden
    >
      <svg width="100%" height="340" style={{ position: "absolute", width: "100%", left: 0, top: 0 }}>
        {blobs.map((b, i) => (
          <circle
            className="parallax-blob"
            key={i}
            cx={b.cx}
            cy={b.cy}
            r={b.r}
            fill={b.color}
            fillOpacity={b.opacity}
            style={{
              filter: "blur(12px)",
              transition: "transform 0.7s cubic-bezier(.77,.17,.28,.89)",
              willChange: "transform",
              animation: `float ${b.duration}s ease-in-out ${b.delay}s infinite alternate`
            }}
          />
        ))}
      </svg>
      <div className="w-full h-[340px]" />
    </div>
  );
}
