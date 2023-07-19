/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        xxs: "300px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
