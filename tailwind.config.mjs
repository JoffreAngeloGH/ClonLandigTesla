import animations from "@midudev/tailwind-animations";
import typography from "@tailwindcss/typography;";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [animations, require("@tailwindcss/typography")],
};
