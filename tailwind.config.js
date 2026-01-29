/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./dev/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "serif"],
        mono: ["Space Mono", "monospace"],
        sans: ["Fraunces", "serif"],
        "serif-research": ["Spectral", "Georgia", "serif"],
        "mono-research": ["JetBrains Mono", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
        },
        secondary: {
          DEFAULT: "#4f46e5",
        },
        background: {
          light: "#fdfbf7",
          dark: "#0f172a",
        },
        research: {
          accent: "#2C5F87",
          "accent-dark": "#1E4263",
          secondary: "#8B6914",
          "secondary-dark": "#6B5010",
          "bg-light": "#FAFAF8",
          "bg-dark": "#111318",
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
