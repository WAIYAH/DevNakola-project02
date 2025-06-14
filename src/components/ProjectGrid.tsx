
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import ProjectModal from "./ProjectModal";

const dummyProjects = [
  {
    name: "NeonDash Dashboard",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=640&q=80",
    desc: "Analytics interface with live updating charts and dazzling UI transitions.",
    tech: ["React", "Recharts", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    name: "Verse.ly Blog Engine",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80",
    desc: "Headless CMS powering content at scale with real-time markdown preview editing.",
    tech: ["Next.js", "Supabase", "MDX", "Zod"],
    link: "#",
  },
  {
    name: "Enigma Vault",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&q=80",
    desc: "Secure file vault with end-to-end encryption and smooth drag-and-drop.",
    tech: ["TypeScript", "CryptoJS", "Tailwind", "Shadcn UI"],
    link: "#",
  },
  {
    name: "Mobius Gallery",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=640&q=80",
    desc: "Image portfolio with infinite scroll, animated tags, and vibrant image pop.",
    tech: ["React", "Unsplash API", "Framer Motion"],
    link: "#",
  },
  {
    name: "Hermes Chat",
    img: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=640&q=80",
    desc: "Privacy-first chat app with themeable, blazing-fast UI.",
    tech: ["React", "Socket.io", "Express", "Prisma"],
    link: "#",
  },
  {
    name: "Polaris Weather",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=640&q=80",
    desc: "Real-time weather explorer with mesmerizing animated icons.",
    tech: ["Vite", "WeatherAPI", "Tailwind", "SWR"],
    link: "#",
  },
];

type Project = typeof dummyProjects[0];

function randomWithin(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function ProjectGrid() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full py-10 md:py-20">
      <h2 className="font-heading text-4xl md:text-5xl text-white text-center mb-12 tracking-tight animate-fade-in-up">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-1">
        {dummyProjects.map((proj, idx) => (
          <div
            key={proj.name}
            tabIndex={0}
            role="button"
            className={`
              group relative cursor-pointer outline-none
              bg-glass rounded-2xl shadow-2xl border border-accent/20 overflow-hidden
              transition transform-gpu hover:z-20 focus:z-20
              hover:scale-[1.03] hover:-translate-y-2 focus:scale-[1.03] focus:-translate-y-2
              before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/10 before:to-accent/0
              ring-1 ring-accent/10
              `
            }
            style={{
              boxShadow: `0 0 44px 0 #9A72FF30`,
              transformStyle: "preserve-3d",
              animation: `fadein-up 0.7s ${0.12 * idx + 0.12}s both`,
            }}
            onClick={() => setModalProject(proj)}
            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setModalProject(proj); }}
          >
            <div
              className="
                aspect-[16/9] overflow-hidden
                transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 group-focus:scale-105 group-focus:rotate-2
                "
            >
              <img
                src={proj.img}
                alt={proj.name}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-[2px] group-focus:blur-[2px]"
                style={{ transition: "filter 0.2s" }}
              />
              <div
                className="
                  absolute inset-0 rounded-2xl flex items-center justify-center
                  opacity-0 group-hover:opacity-100 group-focus:opacity-100
                  transition duration-300 bg-black/50"
              >
                <span className="text-white font-heading font-bold text-xl tracking-wider">View Details</span>
              </div>
            </div>
            <div className="p-5 pb-4">
              <h3 className="font-heading text-lg md:text-xl text-accent group-hover:text-accent-light mb-1 truncate">
                {proj.name}
              </h3>
              <p className="text-sm text-neutral-300 mb-2 line-clamp-2">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.slice(0, 3).map(t => (
                  <span className="px-2 py-0.5 bg-accent/30 rounded-sm text-xs font-bold text-accent" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        project={modalProject}
        open={!!modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
