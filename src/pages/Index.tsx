
// Home page for developer portfolio – cutting-edge, immersive.

import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import SkillsNetwork from "@/components/SkillsNetwork";
import ContactForm from "@/components/ContactForm";
import CursorEffects from "@/components/CursorEffects";
import ScrollProgress from "@/components/ScrollProgress";

export default function Index() {
  return (
    <main className="relative bg-neutral-950 text-white font-body overflow-x-hidden min-h-screen">
      <CursorEffects />
      <ScrollProgress />
      {/* Hero Section */}
      <Hero />
      {/* Projects */}
      <ProjectGrid />
      {/* Skills */}
      <SkillsNetwork />
      {/* Contact */}
      <ContactForm />
      <footer className="py-7 text-center text-neutral-500 text-xs opacity-60 select-none">
        &copy; {new Date().getFullYear()} Dev Portfolio. Made with{" "}
        <span className="text-accent">♥</span>
      </footer>
    </main>
  );
}
