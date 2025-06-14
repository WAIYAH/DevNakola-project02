
import React from "react";
import { Users, Star, Check, Link } from "lucide-react";

const stats = [
  {
    label: "Projects Delivered",
    value: "52+",
    icon: <Check className="w-7 h-7 text-accent" />
  },
  {
    label: "Happy Clients",
    value: "32",
    icon: <Users className="w-7 h-7 text-accent" />
  },
  {
    label: "Average Rating",
    value: "4.96",
    icon: <Star className="w-7 h-7 text-accent" />
  },
  {
    label: "Integrations",
    value: "24",
    icon: <Link className="w-7 h-7 text-accent" />
  }
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white flex justify-center items-center"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {stats.map(({ label, value, icon }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center bg-glass border border-accent/10 rounded-2xl px-7 py-8 shadow-lg"
          >
            <div className="mb-2">
              {icon}
            </div>
            <span className="font-heading text-3xl font-extrabold text-accent mb-1">{value}</span>
            <span className="text-neutral-300 font-medium text-lg text-center">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
