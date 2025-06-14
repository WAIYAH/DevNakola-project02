
// Home page for developer portfolio – cutting-edge, immersive.

import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectGrid from "@/components/ProjectGrid";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import SkillsNetwork from "@/components/SkillsNetwork";
import ContactForm from "@/components/ContactForm";
import DetailedFooter from "@/components/DetailedFooter";
import CursorEffects from "@/components/CursorEffects";
import ScrollProgress from "@/components/ScrollProgress";

export default function Index() {
  return (
    <main className="relative bg-neutral-950 text-white font-body overflow-x-hidden min-h-screen">
      <CursorEffects />
      <ScrollProgress />
      {/* Header */}
      <SiteHeader />
      <div className="pt-20 md:pt-28" id="home">
        {/* Hero Section */}
        <Hero />
        {/* Why Choose Us */}
        <WhyChooseUs />
        {/* Projects */}
        <div id="projects">
          <ProjectGrid />
        </div>
        {/* Pricing */}
        <PricingSection />
        {/* Stats */}
        <StatsSection />
        {/* Skills */}
        <SkillsNetwork />
        {/* Contact */}
        <ContactForm />
        {/* Detailed Footer */}
        <DetailedFooter />
      </div>
    </main>
  );
}

