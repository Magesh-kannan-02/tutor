/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors"); // for theme switching

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "1rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      borderRadius: {
        small: "2px", // rounded-small
        medium: "0.5rem", // rounded-medium
        large: "6px", // rounded-large
      },
      fontSize: {
        body5: [
          "1.25rem",
          { lineHeight: "1", letterSpacing: "0%", fontWeight: "500" },
        ],
        body: [
          "1rem",
          { lineHeight: "1", letterSpacing: "0%", fontWeight: "700" },
        ],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    createThemes({
      light: {
        primary: {
          DEFAULT: "#90FF07",
          foreground: "#274600",
          '50':'#73CD03',
          '100':"#C6FF7F",
        },
        secondary: {
          DEFAULT: "#414141",
          
          '50':"#A0A0A0",
          '100':"#121212",
          '150':"#C0C0C0"
          
        },
        warning: {
          DEFAULT: "#FF9437",
        },
        content1:{
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
          '50':"#78787833"
        },



        background: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
          '50':"#EEEEEE",
          '100':"#262626"
        },
      },
      dark: {},
    }),
  ],
};
