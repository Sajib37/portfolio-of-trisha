/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bg1: "#1B262C",
        bg2: "#0F4C75"
      },
      fontFamily: {
        poppins: "Poppins",
        playfair: 'Playfair Display'
      },
      textColor:{
        Primary: '#9b59b6'
      }

    },
  },
  plugins: [],
}

