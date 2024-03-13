/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        autodesktop: "repeat(auto-fit, minmax(410px, 1fr))",
        automobile: "repeat(auto-fit, minmax(174px, 1fr))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          sm: "0",
          lg: "0",
          xl: "0",
          "2xl": "0",
        },
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1260px",
        },
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        "2xl": "1440px",
      },

      colors: {
        grey: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
          6: "#959595",
          7: "#D9D9D9",
        },
        primary: "#2D324B",
        secondary: "#C1AF6F",
        normal: "#121737",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
