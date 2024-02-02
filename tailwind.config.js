/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:"Montserrat",
        Leauge:'League Spartan'
      },
     colors:{
      grwhite:"#F8F8F8",
      lightblack:"#4b4b4b"
     }
    },
  },
  plugins: [],
}

