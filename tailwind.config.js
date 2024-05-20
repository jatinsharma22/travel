/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs' : "480px",
      'sm': '575px',
      'md': '768px',
      'lg' : "991px",
      'xl': '1199px',
      '2xl': '1366px',
      '3xl': '1536px'
    },
    extend: {},
  },
  plugins: [],
}