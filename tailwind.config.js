 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "client": ["var(--client-font)"],
    },
    colors:{
      "primary": "rgb(var(--primary) / <alpha-value>)",
      "black":"rgb(var(--black) / <alpha-value>)"
    },
    backgroundImage:{
      "herobg": "linear-gradient(180deg, #FFF0F0 0%, #FFF 100%);"
    }
    },
  },
  plugins: [],
}

