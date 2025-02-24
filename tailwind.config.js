import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["blocks/**/*.vue"],
  darkMode: ["selector", ".dark-mode"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        heading: ["BricolageGrotesque", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        vs: ["0.8125rem", "1.5"],
        sm: ["0.875rem", "1rem"],
        "post-title": ["2rem", "1.5"],
      },
      screens: {
        lp: { max: "1440px" },
        tl: { max: "1199px" },
        tp: { max: "1023px" },
        ph: { max: "767px" },
      },
      spacing: {
        15: "3.75rem",
        23: "5.75rem",
        95: "23.75rem",
        content: "48.75rem",
      },
    },
  },
  plugins: [],
};
