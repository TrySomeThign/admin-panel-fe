import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  prefix: "tw-",
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        supply: ["supply"],
        integralCF: ["IntegralCF"],
        flexible: ["flexible"],
      },
      colors: {
        "gray-light": "#e5e5e5",
        "gray-dark": "#151313",
        "black-almost": "#051130",
        "blue-royal": "#3a2bba",
        "green-lime": "#e0f954",
        "cod-gray": "#0A0A0A",
        silver: "#C7C7C7",
        scorpion: "#565656",
        "green-suckle": "#DCFF7D",
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
  corePlugins: {
    preflight: false,
  },
};
