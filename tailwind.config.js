/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mb: {
          dark: "#2D2D2D",
          cream: "#FAF9EF",
          gold: "#B89C6A",
          bronze: "#97784C",
          accent: "#E98402",
          softGold: "#EDDCA4",
        },
      },
    },
  },
  plugins: [],
};