/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'inner-amber-500': 'inset -6px -6px 12px 0 rgb(245 158 11 / 0.5), inset 6px 6px 12px 0 rgb(255 255 255 / 0.25), 0 10px 15px -3px rgb(245 158 11 / 0.5), 0 4px 6px -4px rgb(245 158 11 / 0.5);',
        'inner-gray-400': 'inset -6px -6px 12px 0 rgb(156 163 175 / 0.25), inset 6px 6px 12px 0 rgb(255 255 255 / 0.25), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);'
      },
      keyframes: {
        button: {
          'from': { transform: 'scale(1);' },
          '50%': { transform: 'scale(1.1);' },
          'to': { transform: 'scale(1);' },
        }
      },
      padding: {
        'herro-section': '202px',
      },
      maxWidth: {
        'card': '546px',
      }
    },
  },
  plugins: [],
}