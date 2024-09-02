/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        Green1: "#01C38E",
        Green2: '#26A69A',
        DarkGreen: "#079377",
        DarkBlue: "#132D46",
        Red: '#EF5350',
      },
      fontFamily: {
        "Poppins-Regular": ["Poppins-Regular", "sans-serif"],
        "Poppins-Bold": ["Poppins-Bold", "sans-serif"],
        "Poppins-ExtraBold": ["Poppins-ExtraBold", "sans-serif"],
        "Poppins-Light": ["Poppins-Light", "sans-serif"],
        "Poppins-SemiBold": ["Poppins-SemiBold", "sans-serif"],
        "Poppins-Thin": ["Poppins-Thin", "sans-serif"],
        "Poppins-Medium": ["Poppins-Medium", "sans-serif"],
         "Poppins-ExtraLight": ["Poppins-ExtraLight", "sans-serif"],
      }
    },
  },
  plugins: [],
};
