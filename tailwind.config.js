import animations from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        tomaso: ["Tomaso", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
      colors: {
        primary: "rgb(253 224 71);",
        "dark-white": "#ffffffd9"
      },
    },
  },
  plugins: [
    animations, require('tailwind-scrollbar-hide'),
    ({ addComponents }) => {
      addComponents({
        ".cp-v": {
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 50% 100%, 0 85%)",
        },
      });
    },
  ],
};
