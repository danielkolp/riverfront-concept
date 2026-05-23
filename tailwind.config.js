/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#0E3B2E",
        "deep-forest": "#08251D",
        cream: "#F7F2E8",
        gold: "#D8B56D",
        sage: "#6F8A76",
        ink: "#1F2A24",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Alegreya Sans"', "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 70px rgba(8, 37, 29, 0.15)",
        card: "0 16px 45px rgba(8, 37, 29, 0.12)",
        gold: "0 14px 38px rgba(216, 181, 109, 0.24)",
      },
    },
  },
  plugins: [],
};
