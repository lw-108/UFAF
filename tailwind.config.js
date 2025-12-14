/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garet: ["var(--font-garet)"],
        league: ["var(--font-league)"],
        nsec: ["var(--font-nsec)"],
      },
    },
  },
  plugins: [],
};
