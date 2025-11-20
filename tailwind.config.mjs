/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        muted: '#71717a',
        'yellow-300': '#FDE047',
        'zinc-100': '#f4f4f5',
        'zinc-600': '#52525b',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: ['15px', '21px'],
        label: ['12px', '18px'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gap: {
        '3': '12px',
      },
    },
  },
  plugins: [],
}

