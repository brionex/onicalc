/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#1F3A5F',
        'primary-200': '#7E90B4',
        'primary-300': '#9CAAC5',
        'accent-100': '#3D5A80',
        'accent-200': '#CEE8FF',
        'text-100': '#FFFFFF',
        'text-200': '#E0E0E0',
        'bg-300': '#374357',
        'bg-200': '#1F2B3E',
        'bg-100': '#0B1120',
        'accent-blue-100': '#38BDF8',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui'],
        'jet-brains-mono': ['Jet-Brains-Mono', 'Inter', 'system-ui']
      },
    },
  },
  plugins: [],
}
