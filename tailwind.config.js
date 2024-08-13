/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGray: '#252422',
        customDarkGray: '#191918',
        darkBg: '#272724',
        darkTxt: '#F9CDCD',
        footerTxt: '#575757'
      },
    },
  },
  plugins: [],
}