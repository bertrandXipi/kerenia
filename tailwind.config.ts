import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        condensed: ['var(--font-condensed)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
        serif: ['var(--font-serif)', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      colors: {
        cream: {
          50: 'var(--color-cream-50)',
          100: 'var(--color-cream-100)',
          200: 'var(--color-cream-200)',
          300: 'var(--color-cream-300)',
          400: 'var(--color-cream-400)',
        },
        sage: {
          50: 'var(--color-sage-50)',
          100: 'var(--color-sage-100)',
          200: 'var(--color-sage-200)',
          300: 'var(--color-sage-300)',
          400: 'var(--color-sage-400)',
          500: 'var(--color-sage-500)',
          600: 'var(--color-sage-600)',
          700: 'var(--color-sage-700)',
          800: 'var(--color-sage-800)',
          900: 'var(--color-sage-900)',
        },
        brick: {
          50: 'var(--color-brick-50)',
          100: 'var(--color-brick-100)',
          200: 'var(--color-brick-200)',
          300: 'var(--color-brick-300)',
          400: 'var(--color-brick-400)',
          500: 'var(--color-brick-500)',
          600: 'var(--color-brick-600)',
          700: 'var(--color-brick-700)',
          800: 'var(--color-brick-800)',
          900: 'var(--color-brick-900)',
        },
        gold: {
          100: 'var(--color-gold-100)',
          200: 'var(--color-gold-200)',
          300: 'var(--color-gold-300)',
          400: 'var(--color-gold-400)',
          500: 'var(--color-gold-500)',
          600: 'var(--color-gold-600)',
          700: 'var(--color-gold-700)',
          800: 'var(--color-gold-800)',
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
