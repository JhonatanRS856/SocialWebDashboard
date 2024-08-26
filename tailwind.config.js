/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'color-white': 'var(--color-white)',
        'color-gray': 'var(--color-gray)',

        'color-primary': 'var(--color-primary)',
        'color-secondary': 'var(--color-seconday)',
        'color-succes': 'var(--color-succes)',
        'color-danger': 'var(--color-danger)',

        'color-bg-dark': 'var(--color-dark)',
        'color-bg1': 'var(--color-bg1)',
        'color-bg2': 'var(--color-bg2)',
      },
    },
  },
  plugins: [],
}
