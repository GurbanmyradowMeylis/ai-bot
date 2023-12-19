/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark-color": "#0b0b0c",
        "primary-dark-color-hover-state": "#2d2d34",
        "primary-dark-color-active-state": "#404041",
      },
    },
  },
  plugins: [],
};
