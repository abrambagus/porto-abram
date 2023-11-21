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
        "dark-1": "#222831",
        "dark-2": "#393E46",
        "green-2": "#00ADB5",
        "white-1": "#EEEEEE",
      },
    },
  },
  plugins: [],
};
