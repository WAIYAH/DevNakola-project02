
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

type Project = {
  name: string;
  img: string;
  desc: string;
  tech: string[];
  link?: string;
};

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={v => { if (!v) onClose(); }}>
      <DialogContent className="sm:max-w-xl bg-neutral-950/90 rounded-xl ring-1 ring-accent">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading pb-2 bg-gradient-to-r from-accent via-[#43FFB5] to-accent-light bg-clip-text text-transparent">{project.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <img
            src={project.img}
            alt={project.name}
            className="w-full rounded-md aspect-video object-cover border border-accent/30"
            loading="lazy"
          />
          <Card className="bg-neutral-900/70 border-accent/20 shadow-lg">
            <CardHeader className="p-2 pb-0 text-accent/90 uppercase text-xs tracking-wider">About Project</CardHeader>
            <CardContent className="p-2 pt-1 text-base">{project.desc}</CardContent>
          </Card>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map(t => (
              <Badge className="bg-accent text-black font-bold shadow hover:scale-105 cursor-pointer" key={t}>
                {t}
              </Badge>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block px-6 py-2 rounded bg-accent text-black text-base font-bold shadow hover:bg-accent-dark transition"
            >
              View Live
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
