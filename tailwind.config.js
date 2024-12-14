/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}',
    './navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        foreshadow: "#b6b3ae",
        white: "#fff",
        secondary: "#1e293b",
        danger: "#f90101",
        blue: "#0A5EB0"
      }
    },
  },
  plugins: [],
};
