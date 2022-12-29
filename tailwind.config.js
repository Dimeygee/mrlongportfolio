/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    borderRadius: {
      default: "50%",
    },
    extend: {
      colors:{
        mrlongblue: "#2F80ED"
      },
      fontFamily: {
        syne: ["Syne"],
        outfit: ["Outfit"]
      },
    },
    screens: {
      "xs":"280px",
      'sm': '541px',
      'md': '550px',
      'lg': '1024px',
      'xl': '1200px',
    },
  },
  plugins: [],
}
