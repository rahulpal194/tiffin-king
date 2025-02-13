 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{

      },
      fontFamily: {
        "client": ["var(--client-font)"],
    },
    colors:{
      "primary": "rgb(var(--primary) / <alpha-value>)",
      "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
      "black":"rgb(var(--black) / <alpha-value>)"
    },
    backgroundImage:{
      "herobg": "linear-gradient(180deg, #FFF0F0 0%, #FFF 100%);"
    },
    dropShadow: {
      "category": "2px 4px 8px rgba(0, 0, 0, 0.25)",
      "mobile-nav":"0px 4px 32px rgba(0, 0, 0, 0.06)",
  }
    },
  },
  plugins: [],
}

