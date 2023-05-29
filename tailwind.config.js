/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans' : ['Open Sans', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'garamond': ['Garamond', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

