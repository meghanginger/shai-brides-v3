const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      dramatic: ['Orbitron', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        scarlet: "#83001e",
        "light-blue": "#a3e4f3",
        "dark-blue": "#202C39",
        black: "black",
        "cool-blue": "#7da3a3",
        "vits-blue": "rgb(10,196,188)",
        "vits-pink": "rgb(234, 050, 154)",
        "vits-purple": "#5d69bf"
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
  variants: {
    extend: {
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/custom-forms"),
  ],
}
