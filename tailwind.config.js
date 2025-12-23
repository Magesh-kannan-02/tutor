/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors"); // for theme switching

module.exports = {
  darkMode: ["class", "class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        small: "2px",
        medium: "0.5rem",
        large: "6px",
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
      fontSize: {
        body3: [
          "1.5rem",
          {
            lineHeight: "1",
            letterSpacing: "0%",
            fontWeight: "500",
          },
        ],
        body4: [
          "1.375rem",
          {
            lineHeight: "1",
            letterSpacing: "0%",
            fontWeight: "500",
          },
        ],
        body5: [
          "1.125rem",
          {
            lineHeight: "1",
            letterSpacing: "0%",
            fontWeight: "500",
          },
        ],
        body: [
          "0.875rem",
          {
            lineHeight: "1",
            letterSpacing: "0%",
            fontWeight: "500",
          },
        ],
        h5: [
          "1rem",
          {
            lineHeight: "1",
            letterSpacing: "0%",
            fontWeight: "500",
          },
        ],
        h6: [
          "0.75rem",
          {
            lineHeight: "1",
            letterSpacing: "0%",
            fontWeight: "500",
          },
        ],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
          50: "#73CD03",
          100: "#C6FF7F",
          200: "#b8ff5f",
          250: "#052D14",
        },
        secondary: {
          DEFAULT: "#414141",

          50: "#A0A0A0",
          100: "#121212",
          150: "#C0C0C0",
          200: "#0A0A0B",
          250: "#1C1C1E",
        },
        warning: {
          DEFAULT: "#FF9437",
        },
        success: {
          DEFAULT: "#51BC51",
          100: "#DDE7EE",
          200: "#effedd",
        },
        content1: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
          50: "#78787833",
          100: "#565656",
          150: "#05152D",
          200: "#233147",
        },
        content2: {
          DEFAULT: "#565656",
          50: "#2D2305",
          100: "#2D052A",
        },

        background: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
          50: "#EEEEEE",
          100: "#262626",
          200: "#010101",
        },
      },
      dark: {},
    }),
  ],
};
