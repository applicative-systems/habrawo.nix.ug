/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const themeColor = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        term: {
          bg: themeColor("bg"),
          surface: themeColor("surface"),
          raised: themeColor("raised"),
          fg: themeColor("fg"),
          muted: themeColor("muted"),
          border: themeColor("border"),
          blue: themeColor("blue"),
          cyan: themeColor("cyan"),
          green: themeColor("green"),
          yellow: themeColor("yellow"),
          magenta: themeColor("magenta"),
          red: themeColor("red"),
        },
      },
      fontFamily: {
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          "Iosevka",
          '"Cascadia Code"',
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
    listStyleImage: {
      flake: 'url("../images/nix-snowflake-list.svg")',
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
