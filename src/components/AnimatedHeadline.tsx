
import React, { useState, useEffect } from "react";

type AnimatedHeadlineProps = {
  text: string;
}

const gradientClass =
  "bg-gradient-to-r from-accent via-[#43FFB5] to-accent-light bg-clip-text text-transparent";

export default function AnimatedHeadline({ text }: AnimatedHeadlineProps) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const delay = 44;
    const id = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(id);
    }, delay + Math.random() * 30);
    return () => clearInterval(id);
  }, [text]);

  return (
    <h1
      className={
        `text-[2.3rem] md:text-6xl font-heading font-extrabold tracking-tighter select-none ${gradientClass}
         drop-shadow-neon transition-colors`
      }
      aria-label={text}
    >
      {displayed}
      <span className="opacity-50 animate-pulse">{displayed.length < text.length ? "|" : ""}</span>
    </h1>
  );
}
