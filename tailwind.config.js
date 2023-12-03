/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html" , "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "blue_1" : "#2F80ED" ,
        "blue_2": "#2969BF",
        "black_1": "#1A1A1A",
        "orange" : "#F2994A",
        "red" : "#EB5757",
        "green": "#219653",
        "gray": "#181818",
        "gray_1": "#333333",
        "gray_2": "#4F4F4F",
        "gray_3" : "#EBEBEB",
        "gray_5" : "#E0E0E0",
        "gray_6": "#F2F2F2",
        "dangar": "#FCEFCA",
      },
      boxShadow: {
        '3xl': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        '4xl': '0px 4px 37px 0px rgba(0, 0, 0, 0.15)'
      }
    },
    fontFamily:{
       Roboto : ["Work Sans" , "sans-serif"]
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    
  },
  plugins: [],
}

