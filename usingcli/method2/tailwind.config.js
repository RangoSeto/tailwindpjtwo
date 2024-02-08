/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {

      animation:{
        'spin-slow':'spin 3s linear infinite',
        'myani':'mykeyone 5s linear infinite',
        'myrotate':'mykeytwo 5s linear infinite',
        'yourani':'mykeythree 5s linear infinite'
      },
      keyframes:{
        mykeyone:{
          '0%':{transform:'translate(0)'},
          '50%':{transform:'translate(300px)'},
          '100%':{transform:'translate(300px,300px)'}
        },
        mykeytwo:{
          'from':{transform:'rotate(0deg)'},
          'to':{transform:'rotate(360deg)'}
        },
        mykeythree:{
          '0%,100%':{transform:'rotate(0deg)'},
          '50%':{transform:'rotate(-1turn)'}
        }
      },


      colors:{
        primary:"blue",
        secondary:"silver",
        info:"skyblue",
        warning:"orange",
        danger:"red"
      },
      
    },
  },
  plugins: [],
}

