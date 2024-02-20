/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      jost: ['"Jost"'],
    },
    screens: {
      md: "900px",
      lg: "1200px",
    },
  },

  plugins: [],
};
