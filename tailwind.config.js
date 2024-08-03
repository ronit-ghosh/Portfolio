/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        accent: "rgba(var(--accent))",
        accent_hover: "rgba(var(--accent_hover))",
        heading: "rgba(var(--heading))",
        subtext: "rgba(var(--subtext))",
        btn_text: "rgba(var(--btn_text))",
        btn_bg_color: "rgba(var(--btn_bg_color))",
        btn_hover_bg_color: "rgba(var(--btn_hover_bg_color))",
        quotation: "rgba(var(--quotation))",
        border: "rgba(var(--border))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }
  ],
}
