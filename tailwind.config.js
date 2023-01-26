module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
    fontFamily: {
      'sans': ["Open Sans", "sans-serif"]
    },
    extend: {
      animation: {
        'zoom-in': 'scale 40s linear infinite'
      },
      keyframes: {
        scale: {
          '50%': {
            transform: 'scale(1.15)'
          }
        }
      },
      colors: {
        'deep-purple': '#902768',
        'dark-fucsia': '#31154C',
        'light-fucsia': '#C58FC0'
      },
      fontSize: {
        base: ['16px', '24px']
      },
      fontFamily: {
        'poiret': "Poiret One"
      },
      width: {
        '214': '53.5rem',
        '320': '80rem',
      },
      spacing: {
        '34': '8.5rem',
        'mf': '72rem'
      },
      zIndex: {
        '-10': '-10'
      },
      maxHeight: {
        '120': '30rem'
      },
      minHeight: {
        '32': '8rem',
        '48': '12rem',
        '60': '15rem',
        '270': '67.5rem'
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover'],
      width: ['hover'],
      height: ['hover'],
    },
  },
  plugins: [],
}