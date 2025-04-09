/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAF9F7",
        secondary: "#36454F",
        secondaryBold: "#374151",
        secondaryLight: "#6B7280",
      },
    },
  },
  plugins: [],
};
