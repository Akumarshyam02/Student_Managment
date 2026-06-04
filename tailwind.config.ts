import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#080B0F",
          subtle: "#0E1117",
          muted: "#141820",
          card: "#111419",
          elevated: "#181D26",
        },
        accent: {
          cyan: "#00D4FF",
          violet: "#7B5EA7",
          emerald: "#00E5A0",
          amber: "#FFB347",
          rose: "#FF6B8A",
        },
        border: {
          subtle: "#1E2530",
          muted: "#252D3A",
          accent: "#2A3545",
        },
        text: {
          primary: "#E8EDF5",
          secondary: "#8892A4",
          muted: "#4A5568",
        },
      },
      fontFamily: {
        display: ["'Space Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "glow-cyan": "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)",
        "glow-violet": "radial-gradient(ellipse at center, rgba(123,94,167,0.15) 0%, transparent 70%)",
        "glow-emerald": "radial-gradient(ellipse at center, rgba(0,229,160,0.15) 0%, transparent 70%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(0,212,255,0.1)",
        "glow-md": "0 0 40px rgba(0,212,255,0.15)",
        "card": "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      gridTemplateColumns: {
        "bento": "repeat(12, 1fr)",
      },
    },
  },
  plugins: [],
};

export default config;
