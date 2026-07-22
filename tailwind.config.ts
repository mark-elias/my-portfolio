import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // customNoche: "#151515",
        customPrimary: "#1E90FF",
        customSecondary: "#3B429F",
        customAccent: "#04F06A",
        customGhostWhite: "#F8F7FF",
      },
      animation: {
        "shimmer": "shimmer 6s ease-in-out infinite",
      },
      keyframes: {
        "shimmer": {
          "0%, 10%, 100%": { 
            boxShadow: "0 0 0px transparent",
            transform: "rotate(0deg)"
          },
          "1%": { 
            boxShadow: "0 0 8px var(--glow-color, rgba(30, 144, 255, 0.5))",
            transform: "rotate(-8deg)"
          },
          "2.5%": { 
            boxShadow: "0 0 15px var(--glow-color, rgba(30, 144, 255, 0.8))",
            transform: "rotate(8deg)"
          },
          "4%": { 
            boxShadow: "0 0 8px var(--glow-color, rgba(30, 144, 255, 0.5))",
            transform: "rotate(-4deg)"
          },
          "5%": {
            boxShadow: "0 0 0px transparent",
            transform: "rotate(0deg)"
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
