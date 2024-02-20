/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#10151D',
        'slate-gray': '#2C3646',
        'steel-blue': '#7B8796',
        'silver-gray': '#BFC7D2',
        'dodger-blue': '#25A6E9',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui'],
        'jet-brains-mono': ['Jet-Brains-Mono', 'Inter', 'system-ui'],
      },
    },
  },
  plugins: [],
}
