import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/compositions/**/*.{ts,tsx}',
    './src/views/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      // see context/device/index
      mb: { max: '801.9px' }, // isMobileView
      ds: '802px', // isDesktopView
      nr: { min: '802px', max: '1279.9px' }, // isNarrowVie
      '-wd': { max: '1280px' },
      'wd': { min: '1280px' },
      '2wd': '1366px', // for more control (view where both sidebars are fixed in viewport)
    },
    extend: {
      colors: {
        'brand-70': '#B84200',
        'brand-60': '#E66001',
        'brand-50': '#ED742E',
        'brand-15': '#3A2B20',
        'brand-10': '#642900',
        'brand-5': '#331500',

        'grey-90': '#EBEBEB',
        'grey-70': '#ADADAD',
        'grey-60': '#999999',
        'grey-40': '#7E7E7E',
        'grey-20': '#3B3B3B',
        'grey-15': '#2E2E2E',
        'grey-10': '#1F1F1F',

        'bg-l0': '#111111',
        'bg-l1': '#171717',
        'bg-l2': '#242424',
        'bg-l3': '#2E2E2E',

        'accent-pink': '#F768A0',
        'accent-pink-5': '#442E37',

        'accent-green': '#3EFF8B',
        'accent-green-10': '#134C2A',

        'accent-yellow': '#EFB72A',

        'accent-red': '#F42E52',
        'accent-red-10': '#632C2A',
        'accent-red-5': '#3D1F24',
      },
      borderRadius: {
        '2px': '2px',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
      },
      backgroundImage: {
        'card-border': 'linear-gradient(180deg, rgba(239, 239, 243, 0.15) 0%, rgba(239, 239, 243, 0) 100%)',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    plugin(({ addComponents, addBase, theme }) => {
      // addBase({
      //   'body': { backgroundColor: theme('colors.test') },
      // })
      addComponents({
        '.text-heading-h1': {
          fontSize: '1.75rem', // 28
          lineHeight: '2.25rem', // 36
        },
        '.text-heading-h2': {
          fontSize: '1.5rem', // 24
          lineHeight: '2rem', // 32
        },
        '.text-heading-h3': {
          fontSize: '1.25rem', // 20
          lineHeight: '1.625rem', // 26
        },
        '.text-heading-h4': {
          fontSize: '1.125rem', // 18
          lineHeight: '1.5rem', // 24
        },
        '.text-heading-h5': {
          fontSize: '1rem', // 16
          lineHeight: '1.25rem', // 20
        },
        '.text-caption-14': {
          fontSize: '0.875rem', // 14
          lineHeight: '1.125rem', // 18
        },
        '.text-caption-13': {
          fontSize: '0.813rem', // 13
          lineHeight: '1rem', // 16
        },
        '.text-caption-12': {
          fontSize: '0.75rem', // 12
          lineHeight: '0.875rem', // 14
        },
        '.text-label-12': {
          fontSize: '0.688rem', // 11
          lineHeight: '0.813rem', // 13
        },
      })
    }),
  ],
}
export default config
