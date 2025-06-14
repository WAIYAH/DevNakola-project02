
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-neutral-950/85 backdrop-blur border-b border-neutral-900 shadow-sm">
      <div className="container flex items-center justify-between py-3 px-3 md:px-7 max-w-6xl mx-auto">
        <Link
          to="/"
          className="font-heading text-2xl md:text-3xl font-extrabold tracking-widest text-accent flex items-center gap-2"
        >
          Dev<span className="text-white ml-1">Portfolio</span>
        </Link>
        <nav className="hidden md:flex space-x-6 font-medium text-lg">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#why" className="hover:text-accent transition-colors">Why Choose Us</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
          <a href="#stats" className="hover:text-accent transition-colors">Stats</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <div className="md:hidden flex items-center">
          <Menu className="w-7 h-7 text-accent" />
        </div>
      </div>
    </header>
  );
}
