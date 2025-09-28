/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-black': '#000000',
        'royal-black-light': '#1a1a1a',
        'royal-black-lighter': '#2d2d2d',
        'royal-golden': '#D4AF37',
        'royal-golden-light': '#F4E4BC',
        'royal-golden-dark': '#B8860B',
        'royal-white': '#ffffff',
        'royal-gray': '#f8f8f8',
      }
    },
  },
  plugins: [],
}
