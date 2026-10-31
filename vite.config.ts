import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import path from 'path'


// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		tsconfigPaths:true,
		// alias: {
		// 	app: path.resolve(__dirname, '../src/app'),
		// 	assets: path.resolve(__dirname, '../src/assets'),
		// 	entities: path.resolve(__dirname, '../src/entities'),
		// 	features: path.resolve(__dirname, '../src/features'),
		// 	pages: path.resolve(__dirname, '../src/pages'),
		// 	shared: path.resolve(__dirname, '../src/shared'),
		// 	widgets: path.resolve(__dirname, '../src/widgets'),
		// },
	},
})
