/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
    colors:{
      "primary":"#152349"
    },
    fontFamily:{
      'mulish': ['Mulish', 'sans-serif']

    },
    screens:{
      'xs': '475px',

    }
    },
  },
  plugins: [],
}
