const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          "900" : "#0A093D"
        },
        darkBlue: {
          '800' : "#2B2B39",
          '900' : "#2B2B39"
        },
        tosca: {
          "300" : "#E5F0FD"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(({ addUtilities}) => {
      const utilities = {
        '.community-gradient' : {
          'background': `linear-gradient(0deg, rgba(241, 246, 253, 0) 1.63%, #F1F6FD 20.5%, #F1F6FD 58.57%, #FFFFFF 100%)`
        }
      }
      addUtilities(utilities)
    })
  ],
}
