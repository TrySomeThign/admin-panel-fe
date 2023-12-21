import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gray-light": "#e5e5e5",
        "gray-dark": "#151313",
        "black-almost": "#051130",
        "blue-royal": "#3a2bba",
        "green-lime": "#e0f954",
      },
    },
  },
  plugins: [],
  content: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
};
