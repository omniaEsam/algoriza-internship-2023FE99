/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html" , "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "blue_1" : "#2F80ED" ,
        "gray": "#181818",
        "gray_1": "#333333",
        "gray_2": "#4F4F4F",
        "gray_3" : "#EBEBEB",
        "gray_6": "#F2F2F2",
        "dangar": "#FCEFCA",
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

