/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  important: ["#app"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-red": "#FD1717",
        "main-dark": "#000000",
        "main-light": "#ffffff",
        // "main-dark": "#102D43",
      },
    },
    fontFamily:{
      'inter':['inter'],
      'jura':['jura'],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};