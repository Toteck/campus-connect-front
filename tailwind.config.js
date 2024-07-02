import { colors } from "./src/styles/colors";
import { fontFamily } from "./src/styles/font-family";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/screens/**/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
};
