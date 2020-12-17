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

  textSizes: {
    sm: "16px",
    md: {
      min: "18px",
      max: "22px",
      minvw: "320px",
      maxvw: "1280px",
    },
    lg: {
      min: "30px",
      max: "70px",
      minvw: "320px",
      maxvw: "1280px",
    },
  },

  // ...

  modules: {
    // ...

    textSizes: false, // disable the core module

    // ...
  },

  plugins: [
    require("tailwindcss-fluid")({
      suffix: "",
      textSizes: true, // use the settings defined the core config (above)
    }),
  ],
};
