module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rmPink: "#FF57EE",
        rmPurple: "#9B51E0",
      },
    },

    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      mont: ["Montserrat", "sans-serif"],
      robot: ["Roboto", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
