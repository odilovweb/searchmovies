/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: "100px",
      // => @media (min-width: 640px) { ... }

      laptop: "780px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1175px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
