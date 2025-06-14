
import React from "react";
import { Mail, Link as LinkIcon, Github, Twitter, Linkedin } from "lucide-react";

export default function DetailedFooter() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-4 text-neutral-300 mt-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div className="col-span-1 flex flex-col gap-2">
          <div className="font-heading text-2xl font-extrabold text-accent mb-2">
            Dev<span className="text-white">Portfolio</span>
          </div>
          <p className="text-neutral-400 text-sm">
            Cutting-edge developer experiences. Engaging, immersive, and modern digital solutions.
          </p>
        </div>
        {/* Navigation */}
        <div>
          <h4 className="font-heading mb-3 text-lg text-white">Navigate</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-accent">Home</a></li>
            <li><a href="#why" className="hover:text-accent">Why Choose Us</a></li>
            <li><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#pricing" className="hover:text-accent">Pricing</a></li>
            <li><a href="#stats" className="hover:text-accent">Stats</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="font-heading mb-3 text-lg text-white">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:example@email.com" className="hover:text-accent">example@email.com</a>
            </li>
            <li className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-accent" />
              <a href="https://yourwebsite.dev" className="hover:text-accent" rel="noopener noreferrer" target="_blank">
                yourwebsite.dev
              </a>
            </li>
          </ul>
        </div>
        {/* Socials */}
        <div>
          <h4 className="font-heading mb-3 text-lg text-white">Follow</h4>
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-accent transition" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-accent transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-accent transition" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800 mt-8 pt-4 text-xs text-center opacity-70">
        &copy; {new Date().getFullYear()} Dev Portfolio. Crafted with <span className="text-accent">♥</span>
      </div>
    </footer>
  );
}
