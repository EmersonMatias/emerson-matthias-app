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
        'desktop': "url('./src/assets/img/background.png')",
        "mobile": "url('./src/assets/img/background2.png')",
        "section3": "url('./src/assets/img/backgroundSection3.png')",
        "teste": "url('./src/assets/img/teste.gif')",
        "section6": "url('./src/assets/img/backgroundSection6.jpg')",
        "section2": "url('./src/assets/img/diamond.png')"
      }
    },
  },
  plugins: [],
}

