/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "'./src/**/*.css'",
    "./src/assets/img/**"
  ],
  theme: {
    extend: {
      fontFamily:{
        outif: ["Outfit", "sans-serif"],
        cinzel: ["Cinzel Decorative", "serif"]
      },
      backgroundImage:{
        "teste": "url('./src/assets/img/teste.gif')",
      }
    },
  },
  plugins: [],
}

