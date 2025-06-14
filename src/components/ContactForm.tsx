
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      formRef.current?.reset();
      toast({
        title: "Thank you!",
        description: "Your message was sent (well, not really; this is a placeholder!).",
      });
    }, 950);
  }

  return (
    <section id="contact" className="py-16 md:py-24 flex flex-col items-center">
      <h2 className="font-heading text-3xl md:text-4xl text-white mb-7">Contact</h2>
      <form
        ref={formRef}
        className="w-full max-w-md glass-card px-6 py-7 rounded-2xl shadow-2xl border border-accent/25 glass mx-auto flex flex-col gap-6 backdrop-blur-md transition-all"
        style={{ background: "rgba(21,21,26,0.78)" }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="relative">
          <Input id="name" name="name" type="text" className="!bg-transparent peer" required autoComplete="off" />
          <label htmlFor="name" className="absolute left-3.5 top-2 text-neutral-400 pointer-events-none transition-all duration-200 peer-focus:top-[-18px] peer-focus:text-accent peer-valid:top-[-18px] peer-valid:text-accent bg-transparent">
            Name
          </label>
        </div>
        <div className="relative">
          <Input id="email" name="email" type="email" className="!bg-transparent peer" required autoComplete="off" />
          <label htmlFor="email" className="absolute left-3.5 top-2 text-neutral-400 pointer-events-none transition-all duration-200 peer-focus:top-[-18px] peer-focus:text-accent peer-valid:top-[-18px] peer-valid:text-accent bg-transparent">
            Email
          </label>
        </div>
        <div className="relative">
          <textarea id="message" name="message" rows={4} required
            className="w-full bg-transparent text-white border border-accent/15 rounded-lg focus:outline-accent focus:border-accent/80 transition peer p-3 resize-none"
          />
          <label htmlFor="message" className="absolute left-3.5 top-2 text-neutral-400 pointer-events-none transition-all duration-200 peer-focus:top-[-18px] peer-focus:text-accent peer-valid:top-[-18px] peer-valid:text-accent bg-transparent">
            Message
          </label>
        </div>
        <Button
          type="submit"
          className="mt-2 rounded-full w-full py-2.5 bg-accent text-black font-bold text-lg shadow-lg hover:bg-accent-light hover:scale-105 transition-all duration-150"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
      <p className="text-sm text-neutral-400 mt-3 text-center w-full max-w-xs">Or connect via email: example@email.com</p>
    </section>
  );
}
