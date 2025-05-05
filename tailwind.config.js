/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Finnish flag colors
        'finnish-blue': '#002F6C',
        'finnish-white': '#FFFFFF',
        // Aurora colors
        'aurora': {
          'purple': '#1B0B3B',
          'green': '#47A76A',
          'blue': '#3E8AC1',
          'night': '#05021A',
          'snow': '#F5F5F5',
          'green-light': '#84E1A9',
          'blue-light': '#66B8FF',
          'pink': '#FF61EF',
          'star': '#FFE5B3',
          'violet': '#9D4EDD',
          'blue-bright': '#00B4D8',
          'green-bright': '#2ECC71',
          'yellow': '#FFD93D',
          'pink-bright': '#FF69B4',
          'teal': '#20C997'
        },
        'brand': {
          'red': '#5E0B15',
          'purple': {
            '80': '#D0BCFF',
            '40': '#6650a4'
          },
          'pink': {
            '80': '#EFB8C8',
            '40': '#7D5260'
          },
          'purple-grey': {
            '80': '#CCC2DC',
            '40': '#625b71'
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
      keyframes: {
        'gradient-x': {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '25%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
          '75%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          }
        },
        'gradient-y': {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'top center'
          },
          '25%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom center'
          },
          '75%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'top center'
          }
        },
        'shine': {
          '0%': {
            'transform': 'translateX(-100%)'
          },
          '40%, 100%': {
            'transform': 'translateX(100%)'
          }
        },
        'shimmer': {
          '0%': {
            'transform': 'translateX(-100%)'
          },
          '50%': {
            'transform': 'translateX(100%)'
          },
          '100%': {
            'transform': 'translateX(-100%)'
          }
        },
        'sweep-slow': {
          '0%': {
            'transform': 'translateX(0%) rotate(15deg)'
          },
          '100%': {
            'transform': 'translateX(250%) rotate(15deg)'
          }
        },
        'float-particle-1': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0'
          },
          '20%': {
            opacity: '1'
          },
          '80%': {
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '0'
          }
        },
        'float-particle-2': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0'
          },
          '20%': {
            opacity: '1'
          },
          '80%': {
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(-15px) translateX(-10px)',
            opacity: '0'
          }
        },
        'float-particle-3': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0'
          },
          '20%': {
            opacity: '1'
          },
          '80%': {
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(-25px) translateX(5px)',
            opacity: '0'
          }
        },
        'float-particle-4': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0'
          },
          '20%': {
            opacity: '1'
          },
          '80%': {
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(-20px) translateX(-7px)',
            opacity: '0'
          }
        }
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease-in-out infinite',
        'gradient-y': 'gradient-y 5s ease-in-out infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'shimmer': 'shimmer 6s ease-in-out infinite',
        'sweep-slow': 'sweep-slow 8s ease-in-out infinite',
        'float-particle-1': 'float-particle-1 4s ease-in-out infinite',
        'float-particle-2': 'float-particle-2 3.5s ease-in-out infinite',
        'float-particle-3': 'float-particle-3 4.5s ease-in-out infinite',
        'float-particle-4': 'float-particle-4 3s ease-in-out infinite'
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200%'
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 10px 2px rgba(62, 138, 193, 0.3)',
        'inner-luxury': 'inset 0 0 8px 0 rgba(255, 255, 255, 0.3)'
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-15': 'rotateY(15deg)',
        'x-10': 'rotateX(10deg)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px'
        },
        '.rotate-y-15': {
          transform: 'rotateY(15deg)'
        },
        '.rotate-x-10': {
          transform: 'rotateX(10deg)'
        }
      }
      addUtilities(newUtilities)
    }
  ],
} 