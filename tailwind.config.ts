import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C8A45D",
          light: "#D4B878",
          dark: "#A8843D",
          muted: "#C8A45D33",
        },
        luxury: {
          black: "#0B0B0B",
          dark: "#121212",
          card: "#1A1A1A",
          border: "#2B2B2B",
          surface: "#1E1E1E",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(200,164,93,0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(200,164,93,0.7)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C8A45D 0%, #D4B878 50%, #A8843D 100%)",
        "gold-subtle":
          "linear-gradient(135deg, rgba(200,164,93,0.1) 0%, rgba(200,164,93,0.05) 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #0B0B0B 0%, #121212 50%, #0B0B0B 100%)",
        "hero-overlay":
          "linear-gradient(to bottom, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.6) 60%, rgba(11,11,11,0.95) 100%)",
        "card-gradient":
          "linear-gradient(145deg, #1A1A1A 0%, #121212 100%)",
        "gold-border":
          "linear-gradient(135deg, #C8A45D, #D4B878, #A8843D)",
      },
      boxShadow: {
        gold: "0 0 30px rgba(200, 164, 93, 0.25)",
        "gold-lg": "0 0 60px rgba(200, 164, 93, 0.3)",
        luxury: "0 25px 50px rgba(0, 0, 0, 0.5)",
        card: "0 10px 40px rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
