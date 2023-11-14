/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'red-net': '"rgb(255, 255, 255)"',
      },
    },
    fontFamily: {
      'body': ['"Netflix Sans"','"Helvetica Neue"','"Segoe UI"','"Roboto"','"Ubuntu"','"sans-serif"'
    ],
    scrollbar: {
      hide: {
        '::-webkit-scrollbar': {
          display: 'none',
        },
  }},
}
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}