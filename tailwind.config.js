/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        mono: ['Space Mono', 'monospace'],
        sans: ['Fraunces', 'serif'], // Defaulting sans to serif for that specific campaign feel if needed, or use Space Mono for body
      },
      colors: {
        primary: {
          DEFAULT: '#8b5cf6', // Violet-500
          dark: '#7c3aed',    // Violet-600
        },
        secondary: {
          DEFAULT: '#4f46e5', // Indigo-600
        },
        background: {
            light: '#fdfbf7', // Warm white/cream for nostalgia
            dark: '#0f172a',  // Slate-900
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
