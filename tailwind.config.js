/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        "dark-1": "#0F172A",
        "blue-1": "#0a1b46",
        "blue-2": "#43a3ea",
        "white-1": "#8997AC",
        "white-2": "#e2e8f0",
      },
    },
  },
  plugins: [],
};
