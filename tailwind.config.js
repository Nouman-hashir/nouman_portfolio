/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#F8FAFC",
        brand: {
          50: "#EEF9FF",
          100: "#D8F1FF",
          200: "#B9E8FF",
          300: "#89DBFF",
          400: "#52C3FF",
          500: "#2AA8FF",
          600: "#1688DF",
          700: "#116CB5",
        },
        slate: {
          850: "#0b1222",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      boxShadow: {
        glow: "0 0 40px rgba(42, 168, 255, 0.25)",
        'glow-lg': "0 0 60px rgba(42, 168, 255, 0.4)",
        card: "0 24px 80px rgba(15, 23, 42, 0.6)",
      },
    },
  },
  plugins: [],
};
