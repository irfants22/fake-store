/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jaro': ['Jaro', 'sans-serif'],
      },
      colors: {
        'first': '#86469C',
        'second': '#BC7FCD  ',
        'third': '#FB9AD1',
        'fourth': '#FFCDEA'
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/hero-bg.jpg')",
        'men': "url('/src/assets/images/men-cat.png')",
        'women': "url('/src/assets/images/women-cat.png')",
        'jewelry': "url('/src/assets/images/jewelry-cat.png')",
        'furniture': "url('/src/assets/images/furniture-cat.png')",
      }
    },
  },
  plugins: [],
}