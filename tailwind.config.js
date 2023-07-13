/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        600: "600px",
        814: "814px",
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
