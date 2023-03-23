/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1597E4",
        "light-gray": "#E6E6E6",
        "dark-black": "#212121",
        "lite-white": "#FAFAFA",
        error: "#D86161",
        "dark-gray": "#7A7A7A",
      },
    },
  },
  plugins: [],
};
