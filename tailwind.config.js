/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "coffee-gradient":
          "linear-gradient(to top, #6E2E2F   , #894900 , #A46000)",
      },
    },
  },
  plugins: [],
};
