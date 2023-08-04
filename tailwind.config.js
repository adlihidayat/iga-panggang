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
    },
  },
  plugins: [],
}
