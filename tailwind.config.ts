
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#9A72FF", // Violet accent
          light: "#E7D6FF",
          dark: "#4227A0",
        },
        glass: "rgba(23,23,30,0.6)", // Glassmorphic
      },
      dropShadow: {
        neon: "0 2px 8px #9A72FF",
      },
      backgroundImage: {
        'radial-dots': "radial-gradient(circle at 60% 10%, #9a72ff33 0, transparent 60%)",
      },
      keyframes: {
        'float': {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        'float': "float 6s ease-in-out infinite",
        'fadein-up': "fade-in-up 0.5s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
