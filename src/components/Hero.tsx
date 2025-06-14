
import React from "react";
import ParallaxBackground from "./ParallaxBackground";
import AnimatedHeadline from "./AnimatedHeadline";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-16 pb-24 md:pt-32 min-h-[420px] select-none">
      <ParallaxBackground />
      <div
        className="z-10 flex flex-col items-center max-w-2xl mx-auto"
        style={{ maskImage: "linear-gradient(to bottom,black 92%,transparent 100%)" }}
      >
        <AnimatedHeadline text="Building Experiences Beyond Code" />
        <div className="mt-5 text-lg md:text-2xl text-white/70 font-body backdrop-blur flex flex-col items-center">
          <p>A passionate developer crafting next-gen digital products.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-5 w-full justify-center">
            <a
              href="#projects"
              className="inline-block rounded-full px-8 py-3 bg-accent text-gray-950 font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-transform duration-200 ring-2 ring-accent-dark animate-fade-in cursor-pointer text-center"
              style={{ boxShadow: "0 0 26px 3px #9A72FF33" }}
            >
              Explore My Work
            </a>
            <a
              href="#pricing"
              className="inline-block rounded-full px-8 py-3 bg-accent-light text-accent-dark font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-transform duration-200 ring-2 ring-accent-dark animate-fade-in cursor-pointer text-center"
              style={{ boxShadow: "0 0 26px 3px #E7D6FF55" }}
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
