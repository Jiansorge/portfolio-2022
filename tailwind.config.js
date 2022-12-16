/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {},
    colors: {
      pink: '#ff9683',
      purple: '#212035',
      offWhite: '#f7f7f7',
      indigo: '#98A1E9',
      mainGrey: '#ececec',
      darkGrey: '#afafaf',
    }
  },
  plugins: [require("daisyui")],
}
