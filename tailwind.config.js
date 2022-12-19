/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bgPrimary': '#08090D',
        'bgSecondary': '#29293A',
        'bgTertiary': '#282F33',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ]
}