/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral200: '#EFEFEF',
        neutral400: '#A6A6A6',
      },
    },
  },
  plugins: [],
}

