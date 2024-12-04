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
        gold: '#C4A661',  // il colore oro del logo
        'gray': {
          '900': '#374151', // il grigio del logo YiKe Teck
          '50': '#F9FAFB',  // il grigio chiaro dello sfondo
        }
      },
    },
  },
  plugins: [],
}