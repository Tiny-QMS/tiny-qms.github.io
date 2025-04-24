/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  important: false,
  content: ["**/*.{html, jsx, js}", "**/*.js", "**/*.html", "!./node_modules"],
  theme: {
    extend: {
      colors: {
        primary: "#4f55c1",
      },
    },
  },
  plugins: [],
};
