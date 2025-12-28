/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        softBg: "#FFF8F1",
        yellowBg: "#FFC21C",
      },
       fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        chillax: ["Chillax", "sans-serif"],
        synonym: ["'SK Synonym Grotesk Trial'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
