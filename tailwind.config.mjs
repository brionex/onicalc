/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark-blue": "#0c1222",
				"dark-navy-blue": "#2d3444"
			}
		},
	},
	plugins: [],
}
