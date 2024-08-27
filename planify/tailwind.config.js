/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: '#e8c4a5',
        },
        orange: {
          '150': '#f2e2cb',
          '120': '#fcf9f2',
        },
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      },
    },
  },
  plugins: [],
}
