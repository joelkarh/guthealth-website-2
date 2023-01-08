/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
let containerScreens = Object.assign({}, defaultTheme.screens)

// Delete the 2xl breakpoint from the object
delete containerScreens['2xl']

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
  
    container: {
      center: true,
      screens: containerScreens,
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
