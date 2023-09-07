/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/background-image.jpg')",
        fontFamily: {
          lora: ["var(--font-lora)"],
          sans: ["var(--font-inter)"],
          mont: ["var(--font-montserrat)"],
        },
      },
    },
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [],
};
