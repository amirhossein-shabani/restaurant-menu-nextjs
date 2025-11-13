/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "coffee-gradient": "linear-gradient(to top, #6E2E2F   ,  #E09400)",
      },
      keyframes: {
        riseUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      animation: {
        riseUp: "riseUp 1.5s ease-out forwards ",
      },
    },
  },
  plugins: [],
};
