/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['"Roboto"'],
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'white': '#ffffff',
    //   'primary': { 
    //     DEFAULT: '#005EB8', 
    //     100: '#A9D8FF', 
    //     200: '#96CAF7', 
    //     300: '#83BDEF', 
    //     400: '#71AFE7', 
    //     500: '#5EA2DF', 
    //     600: '#4B94D8', 
    //     700: '#3887D0', 
    //     800: '#2679C8', 
    //     900: '#136CC0' 
    //   }, 
    // },
  },
  plugins: [],
}

