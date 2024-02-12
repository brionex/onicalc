/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#93A0C6',
        'midnight-blue': '#0A0F20',
        'dark-slate-blue': '#1F2A47',
        'dodger-blue': '#3F8BF9',
        'from-bg': '#0A0F1E',
        'to-bg': '#18203F'
      },
      fontFamily: {
        inter: ['Inter', 'system-ui'],
        'jet-brains-mono': ['Jet-Brains-Mono', 'Inter', 'system-ui'],
      },
    },
  },
  plugins: [],
}
