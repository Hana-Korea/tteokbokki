/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        TTTtangsbudaejjigaeB: ['TTTtangsbudaejjigaeB'],
      },
    },
    screens: {
      sm: '375px',
      //mobile
      md: '640px',
      // => tablet @media (min-width: 640px) { ... }

      lg: '1024px',
      // =>laptop @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => desktop @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
