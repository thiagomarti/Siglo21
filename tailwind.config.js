/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'school-burgundy': '#800020',
        'school-green': '#228B22',
      },
      screens: {
        'xs': '450px', // Breakpoint personalizado
      },
    },
  },
  plugins: [],
}