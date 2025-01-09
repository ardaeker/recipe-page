import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      rose: {
        50: 'var(--color-rose-50)',
        800: 'var(--color-rose-800)',
      },
      stone: {
        100: 'var(--color-stone-100)',
        150: 'var(--color-stone-150)',
        600: 'var(--color-stone-600)',
        900: 'var(--color-stone-900)',
      },
      brown: {
        800: 'var(--color-brown-800)',
      },
      white: 'var(--color-white)',
    },
    fontSize: {
      base: [
        '1rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      lg: [
        '1.25rem',
        {
          lineHeight: '1.25rem',
        },
      ],
      xl: [
        '1.75rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      '2xl': ['2.25rem', { lineHeight: '2.25rem' }],
      '3xl': [
        '2.5rem',
        {
          lineHeight: '2.5rem',
        },
      ],
    },
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        'young-serif': ['var(--font-young-serif)'],
      },
      maxWidth: {
        md: '616px',
        lg: '736px',
      },
      height: {
        'recipe-image': 'var(--height-recipe-image)',
      },
    },
  },
  plugins: [],
} satisfies Config;
