/** @type {import('tailwindcss').Config} */

const tailwind_theme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    listStyleImage: {
      flake: 'url("../images/nix-snowflake-list.svg")',
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
