
import React, { useRef, useEffect } from "react";
const tags = [
  { name: "React", color: "#43ffb5" },
  { name: "TypeScript", color: "#44c6ff" },
  { name: "Tailwind", color: "#9A72FF" },
  { name: "Node.js", color: "#4eae52" },
  { name: "Supabase", color: "#3ecf8e" },
  { name: "Vite", color: "#F683FF" },
  { name: "Framer Motion", color: "#e295ff" },
  { name: "Recharts", color: "#ffb16e" },
  { name: "MDX", color: "#ff6e9a" },
  { name: "Shadcn UI", color: "#fff" },
  { name: "Zod", color: "#e0e0ed" },
];

export default function SkillsNetwork() {
  // Network canvas animated
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate nodes with radius and animation params
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const size = c.width = c.height = Math.floor(window.innerWidth < 640 ? 340 : 460);
    const N = tags.length;
    const nodes = tags.map((t, i) => {
      const angle = (2 * Math.PI * i) / N;
      const baseX = size/2 + Math.cos(angle) * (size * 0.35);
      const baseY = size/2 + Math.sin(angle) * (size * 0.35);
      return {
        ...t,
        baseX, baseY,
        x: baseX,
        y: baseY,
        r: 34,
        tx: baseX,
        ty: baseY,
      };
    });

    function animate() {
      ctx.clearRect(0, 0, size, size);

      // draw connections
      ctx.save();
      ctx.globalAlpha = 0.17;
      for (let i = 0; i < N; ++i) for (let j = i+1; j < N; ++j) {
        const n1 = nodes[i], n2 = nodes[j];
        ctx.strokeStyle = "#9A72FF";
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      }
      ctx.restore();

      // Animate & draw nodes
      nodes.forEach((node, i) => {
        // Float nodes gently
        const t = +new Date()/1000 + i;
        node.tx = node.baseX + Math.cos(t*0.7+i) * 7;
        node.ty = node.baseY + Math.sin(t*0.6-i) * 7;
        node.x += (node.tx - node.x)*0.18;
        node.y += (node.ty - node.y)*0.18;

        // Node
        ctx.save();
        ctx.globalAlpha = 0.95;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, 2*Math.PI);
        ctx.fillStyle = "#17171e";
        ctx.shadowColor = "#9A72FF44";
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.restore();

        // Label
        ctx.font = "700 18px Montserrat,Inter,sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = node.color ?? "#fff";
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 4.5;
        ctx.strokeText(node.name, node.x, node.y);
        ctx.fillText(node.name, node.x, node.y);
      });

      requestAnimationFrame(animate);
    }
    animate();

    // Clean up
    return () => {
      ctx.clearRect(0, 0, c.width, c.height);
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24 flex flex-col items-center" id="skills">
      <h2 className="font-heading text-3xl md:text-4xl text-white mb-8 animate-fade-in-up">Skills &amp; Technologies</h2>
      <div className="mx-auto">
        <canvas
          ref={canvasRef}
          width={window.innerWidth < 640 ? 340 : 460}
          height={window.innerWidth < 640 ? 340 : 460}
          className="rounded-xl block mx-auto border border-glass shadow-xl bg-glass ring-accent/5"
          style={{ maxWidth: "96vw" }}
        ></canvas>
      </div>
    </section>
  );
}
