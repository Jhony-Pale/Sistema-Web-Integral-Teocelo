/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'playfair': 'Playfair Display'
      },
      keyframes:{
        rightleft:{
          'from': {transform: 'translateX(100%)'},
          'to': {transform: 'translateX(0%)'},
        },
        leftright:{
          'from': {transform: 'translateX(-100%)'},
          'to': {transform: 'translateX(0%)'},
        },
      },
      animation:{
        rightleft: 'rightleft 0.5s ease-in-out',
        leftright: 'leftright 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}