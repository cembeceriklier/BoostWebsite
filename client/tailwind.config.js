/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '599px'},
      'lg': {'min': '820px'},
      'md': {'min': '600px', 'max': '819px'},
      'xl': {'max': '1068px'},
      'between-sm-md': {'max': '819px'},
    },
    extend: {
      backgroundImage: {
        'hero': "url('src/assets/2xko.png')"
      },
      dropdownIcon: {
        'dropdown': "url('src/assets/')"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '50%': { transform: 'translateX(-40)', opacity: 0 },
          '100%': { transform: 'translateX(0)' ,opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        fadeOut: 'fadeOut 2s ease-in-out forwards',
        slideInFromLeft: 'slideInFromLeft .5s ease-in-out forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
