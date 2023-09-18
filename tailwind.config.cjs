/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        Mateblack: {
          100: "#cdcccc",
          200: "#9a9a99",
          300: "#686766",
          400: "#353533",
          500: "#030200",
          600: "#020200",
          700: "#020100",
          800: "#010100",
          900: "#010000",
        },
      },
    },
  },
  plugins: [],
};
