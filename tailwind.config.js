import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        finansteori: {
          primary: "#000dff"
        }
      },
      fontFamily: {
        yrsa: ["Yrsa Variable", fontFamily.serif]
      }
    },
  },
  plugins: [],
}

