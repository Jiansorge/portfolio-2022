/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'index-hero': "url('/assets/index-hero.jpg')",
        // 'footer-texture': "url('/assets/logo.png')",
      }
    },
    colors: {
      pink: '#ff9683',
      purple: '#212035',
      offWhite: '#f7f7f7',
      teal: 'rgb(100,205,226)',
      yellow: 'rgb(250,240,75)',
      blue: 'rbg(92,113,222)',
      indigo: '#98A1E9',
      lightPurple:'rbg(112,65,130)',
      mainGrey: '#ececec',
      darkGrey: '#afafaf',
    }
  },
  plugins: [require("daisyui")],
}
