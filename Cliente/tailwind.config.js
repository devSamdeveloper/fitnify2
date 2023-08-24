/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: {
          100:"#3a00b0",
          300:"#29007d",
          900: "#120037",
        }
      }
    },
  },
  plugins: [],
}

