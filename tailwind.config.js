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
  plugins: [],
}
