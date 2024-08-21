/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#D8BFD8'
      }
    },
  },
  plugins: [],
}

