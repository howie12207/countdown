module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          grayish: "hsl(237, 18%, 59%)",
          desaturated: "hsl(236, 21%, 26%)",
          dark: "hsl(235, 16%, 14%)",
          superDark: "hsl(234, 17%, 12%)",
        },
        red: {
          soft: "hsl(345, 95%, 68%)",
        },
      },
      letterSpacing: {
        custom: "0.4em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
