/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // <-- CRITICAL: Enables manual dark mode class switching
  theme: {
    extend: {},
  },
  plugins: [],
}