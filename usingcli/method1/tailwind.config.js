/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px'
    },
    extend: {

      colors:{
        primary:'blue',
        secondary:'gray',
        info:'skyblue',
        warning:'orange',
        danger:'red'
      },

      fontFamily:{
        inter:['Inter', 'sans-serif']
      }

    },
  },
  plugins: [],
}

