import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        condensed: ['var(--font-oswald)', 'sans-serif'],
        script: ['var(--font-dancing)', 'cursive'],
      },
      colors: {
        sage: {
          50: '#f2f7f4',
          100: '#e1ede6',
          200: '#c5dccf',
          300: '#9dc2b0',
          400: '#74a28d',
          500: '#548670',
          600: '#416b58',
          700: '#365648',
          800: '#2d463b',
          900: '#263a32',
        },
        brick: {
          50: '#fbf5f3',
          100: '#f5e8e4',
          200: '#edd2c9',
          300: '#e0b2a3',
          400: '#ce856f',
          500: '#9f341a',
          600: '#7d2914',
          700: '#632110',
          800: '#521d0f',
          900: '#421a0f',
        },
        gold: {
          500: '#D4A574',
        },
        slate: {
          850: '#313131',
        },
      },
    },
  },
  plugins: [],
};

export default config;
