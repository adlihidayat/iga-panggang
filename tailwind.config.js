/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ['Nunito Sans'],
        poppins: ['Poppins'],
        roboto: ['Roboto'],
      },
      animation: {
        shake: 'shake 1.5s ease-in-out infinite',
        shine: 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(5deg) translatex(1px)', filter: 'drop-shadow(0px 0px 5px #ffff)'},
          '50%': { transform: 'rotate(-5deg) translatex(-1px)', filter: 'drop-shadow(0px 0px 0px #ffff)'},
        },
        shine: {
          '0%, 100%': { filter: 'drop-shadow(0px 0px 5px #ffff)' },
          '50%': { filter: 'drop-shadow(0px 0px 0px #ffff)'},
        }
      }
    },
  },
  plugins: [],
}
