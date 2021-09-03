module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#435c94',
          DEFAULT: '#858796',
          dark: '#4e73df',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
