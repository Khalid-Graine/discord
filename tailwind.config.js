/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#404eed',
        secondary: '#23272a',
      },
      fontFamily: {
        primary: ['Noto Sans Osmanya'],
      },
      padding: {
        primary: '80px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};

