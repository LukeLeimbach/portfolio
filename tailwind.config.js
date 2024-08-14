/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': {
        DEFAULT: '#293241'
      },
      'secondary': {
        DEFAULT: '#3d5a80'
      },
      'tertiary': {
        DEFAULT: '#98c1d9'
      },
      'quaternary': {
        DEFAULT: '#e0fbfc'
      },
      'accent': {
        DEFAULT: '#ee6c4d'
      },
    },
    fontFamily: {
      sans: ['Modernist', 'sans-serif'],
      serif: ['Modernist Mono', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/img/hero-bg.png')",
      }
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(primary|secondary|tertiary|quaternary|accent)/
  }]
}