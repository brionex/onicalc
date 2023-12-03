/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#38BDF8',
        'light-blue': '#E2E8F0',
        'blue-gray': '#94A3B8',
        'slate-blue': '#64748B',
        'dark-slate-blue': '#334155',
        'dark-gunmetal-blue': '#1E293B',
        'dark-midnight-blue': '#172032',
        'dark-ink-blue': '#0B1120',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
