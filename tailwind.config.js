/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first': '#86469C',
        'second': '#BC7FCD  ',
        'third': '#FB9AD1',
        'fourth': '#FFCDEA'
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/hero-bg.jpg')"
      }
    },
  },
  plugins: [],
}