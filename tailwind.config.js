 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'xs':'450px'
      },
      fontFamily: {
        "client": ["var(--client-font)"],
    },
    colors:{
      "primary": "rgb(var(--primary) / <alpha-value>)",
      "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
      "black":"rgb(var(--black) / <alpha-value>)",
      "negative" : "rgb(var(--negative) / <alpha-value>)"
    },
    backgroundImage:{
      "herobg": "linear-gradient(180deg, #FFF0F0 0%, #FFF 100%);"
    },
    boxShadow:{
      'header': "0px 6px 32px rgba(0, 0, 0, 0.04)",
      "mobile-cartBtn" : "0px 6px 6px 4px rgb(120 109 109 / 38%), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "btn": "0px 8px 16px 0px rgba(23, 31, 70, 0.08)",
    },
    dropShadow: {
      "category": "2px 4px 8px rgba(0, 0, 0, 0.25)",
      "mobile-nav":"0px 4px 32px rgba(0, 0, 0, 0.06)",
  }
    },
  },
  plugins: [],
}

