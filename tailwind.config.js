import { colors } from "./src/styles/colors";
import { fontFamily } from "./src/styles/font-family";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/screens/**/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily,
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra leve
        "card-lg": "0 10px 15px rgba(0, 0, 0, 0.1)", // Sombra mais intensa
      },
    },
  },
  plugins: [],
};
