
import React from "react";
import { Star, Users, ArrowUp, Link as LinkIcon } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 text-white flex flex-col justify-center items-center"
    >
      <h2 className="font-heading text-3xl md:text-5xl mb-4 text-accent font-extrabold text-center">
        Why Choose Us
      </h2>
      <p className="max-w-2xl text-lg text-neutral-300 mb-12 text-center">
        Discover the unique advantages that make our work truly stand out.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-glass border border-accent/20 rounded-2xl p-8 flex flex-col items-center shadow-xl hover:scale-105 transition group">
          <Star className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition" />
          <h3 className="font-heading text-xl mb-2 font-bold">Quality Engineering</h3>
          <p className="text-neutral-400 text-center">
            We use state-of-the-art tools to deliver pixel-perfect, performant solutions.
          </p>
        </div>
        <div className="bg-glass border border-accent/20 rounded-2xl p-8 flex flex-col items-center shadow-xl hover:scale-105 transition group">
          <Users className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition" />
          <h3 className="font-heading text-xl mb-2 font-bold">Client-focused</h3>
          <p className="text-neutral-400 text-center">
            Every project is tailored collaboratively for business goals and real impact.
          </p>
        </div>
        <div className="bg-glass border border-accent/20 rounded-2xl p-8 flex flex-col items-center shadow-xl hover:scale-105 transition group">
          <ArrowUp className="w-10 h-10 text-accent mb-4 rotate-45 group-hover:scale-110 transition" />
          <h3 className="font-heading text-xl mb-2 font-bold">Continuous Growth</h3>
          <p className="text-neutral-400 text-center">
            Future-proof development—always learning, always improving and scaling.
          </p>
        </div>
      </div>
    </section>
  );
}
