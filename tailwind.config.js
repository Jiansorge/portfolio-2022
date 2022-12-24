/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'index-hero': "url('/assets/index-hero.gif')",
        // 'footer-texture': "url('/assets/logo.png')",
      }
    },
    colors: {
      pink: '#ff9683',
      purple: '#212035',
      offWhite: '#f7f7f7',
      teal: '#64CDE1',
      yellow: '#FAF04B',
      blue: '#5C71DE',
      indigo: '#98A1E9',
      lightPurple:'#704182',
      mainGrey: '#ececec',
      darkGrey: '#afafaf',
    },
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'

    },
  },
  plugins: [require("daisyui")],
}
