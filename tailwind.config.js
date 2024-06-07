/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navOrange: '#DC5F00'
      },

      backgroundColor: {
        navGrey: '#373A40',     
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rockSal: ["Rock Salt", "cursive"]
      },
    },
  },
  plugins: [],
}

