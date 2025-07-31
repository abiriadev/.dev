// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import favicons from 'astro-favicons'

// https://astro.build/config
export default defineConfig({
	site: `https://abiria.dev`,
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		favicons({
			input: './public/favicon.png',
			name: 'Abiria.dev',
			short_name: 'Abiria',
		}),
	],
})
