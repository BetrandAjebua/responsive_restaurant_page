/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors:{
        primary:'orange',
        secondary:{
          first:'white',
          second:'red'
        }
      },
      fontFamily:{
        beto_pixel:['Pixelify Sans'],
        beto_korean:['Noto Sans KR']
      }
    },
  },
  plugins: [],
}

