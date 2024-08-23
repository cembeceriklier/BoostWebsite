/** @type {import('tailwinds').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '3xl': {'max': '5000px'},
      // => @media (max-width: 1535px) { ... }

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero': "url('src/assets/Home-bg.jpeg')"
      },

      dropdownIcon: {
        'dropdown': "url('src/assets/')"
      },
      keyframes: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          fadeOut: {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 },
          }
        },
        animation: {
          fadeIn: 'fadeIn 1.0s ease-in-out forwards',
          fadeOut: 'fadeOut 2.0s ease-in-out forwards',
        },
      },
    },
  },
  variants: {
    extend: {
      animation: [ 'hover', 'focus', 'group-hover' ]
    },
  },
  plugins: [
  ],
}