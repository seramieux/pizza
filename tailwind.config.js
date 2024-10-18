/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        App: "0 14px 20px 0 rgba(0,0,0,0.05)",
        Categories: "0 4px 4px 0 rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
