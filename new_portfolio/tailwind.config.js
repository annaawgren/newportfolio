module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#FFDADA",
      secondary: "#F3FFDA",
      danger: "#D1FFE9",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
