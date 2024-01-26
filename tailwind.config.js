module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--base---primary)',
        secondary: 'var(--light---primary)',
      },
      fontFamily: {
        primary: 'var(--font--primary)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
