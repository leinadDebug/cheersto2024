/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      borderRadius: {
        small: "65% 35% 0% 100% / 43% 25% 75% 57%",
        medium: "77% 23% 0% 100% / 0% 29% 71% 100%",
        large: "100% 0% 0% 100% / 100% 29% 71% 0%"

      },
    },
    fontFamily: {
      Mogilte: ["Mogilte", "sans-serif"],
      Goolage: ["Goolage", "sans-serif"],
      Santor: ["Santor", "sans-serif"],
      Goglast: ["Goglast", "sans-serif"],
      Bellefair: ["Bellefair", "sans-serif"],
      TrialRoman: ["TT Livret Trial Roman Variable", "sans-serif"],
      TrialItalic: ["TT Livret Trial Italic Variable", "sans-serif"],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
