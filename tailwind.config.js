/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          'scrollbar-width': 'none',  /* Firefox */
        },
      })
    }
  ],
}