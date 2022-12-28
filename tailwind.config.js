/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
  
    container: {
      center: true,
    },
    extend: {
      colors:{
       'darkcream': "#E4E2D3",
       'lightcream':"#EFEEE8",
       'blackbg':"#333333",
      }
    },
  },
  plugins: [],
}
