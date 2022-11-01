/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-bg': '#151515',
        'light-text': '#E8E8E8',
        'orange-clr': '#FF3811',
        'orange-deep': '#dc3311',
        'gray-text': '#737373',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}
