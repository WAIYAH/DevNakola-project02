
import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function handler() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h ? window.scrollY / h : 0);
    }
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full z-40 pointer-events-none">
      <div
        style={{ width: `${progress * 100}%` }}
        className="h-1 bg-gradient-to-r from-accent via-[#43FFB5] to-accent-light rounded-full shadow-lg transition-all duration-100"
      />
    </div>
  );
}
