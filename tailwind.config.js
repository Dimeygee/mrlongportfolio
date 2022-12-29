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
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
