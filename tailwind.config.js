/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
        colors:{
          'custom-navy':'#0A2647',
          'custom-sea':'#144272',
          'custom-blue':'#3ABEF9'
        }
    },
    fontFamily: {
      rowdies: ["Rowdies", "sans-serif"],
      lobster: ["Lobster", "sans-serif"],
      zendots: ["Zen Dots", "sans-serif"]

    }
  },
  plugins: [],
}

