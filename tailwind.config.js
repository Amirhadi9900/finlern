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
    },
  },
  plugins: [],
} 