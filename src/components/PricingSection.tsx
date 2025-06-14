
import React from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Ideal for exploring our work.",
    features: [
      "Full featured preview",
      "Email support",
      "Responsive design",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "$249",
    description: "Best for growing businesses.",
    features: [
      "Everything in Starter",
      "Priority Slack/email support",
      "Advanced animations",
      "Up to 5 project integrations",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact",
    description: "For large organizations & custom needs.",
    features: [
      "Everything in Pro",
      "Dedicated project manager",
      "Unlimited integrations",
      "Premium support",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 bg-neutral-950 text-white w-full flex flex-col items-center"
    >
      <h2 className="font-heading text-3xl md:text-5xl mb-5 text-accent font-extrabold text-center">
        Pricing Plans
      </h2>
      <p className="max-w-xl text-center text-neutral-400 mb-12">
        Flexible options for every stage, from personal to enterprise.
      </p>
      <div className="flex flex-col md:flex-row gap-7 w-full justify-center items-stretch max-w-5xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col border rounded-2xl px-7 py-9 transition bg-glass shadow-2xl hover:scale-105 ${
              plan.highlight
                ? "border-accent scale-105 ring-2 ring-accent"
                : "border-neutral-800"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              {plan.highlight && <Star className="w-6 h-6 text-accent" />}
              <span className="text-xl font-bold font-heading">{plan.name}</span>
            </div>
            <div className="text-3xl font-black mb-2">{plan.price}</div>
            <div className="mb-4 text-neutral-400">{plan.description}</div>
            <ul className="mb-6 flex-1 space-y-2">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-center gap-1.5 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2.5 rounded-full mt-auto font-semibold text-lg transition
               ${plan.highlight ? "bg-accent text-black" : "bg-neutral-900 text-accent hover:bg-accent hover:text-black"}`}
            >
              {plan.price === "Contact" ? "Contact Us" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
