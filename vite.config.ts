import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
	// base: added only for github pages,
	base: '/react-vite-ts-template/',
	build: {
		minify: 'esbuild',
		target: 'es2022',
		sourcemap: mode !== 'production',
	},
	esbuild: {
		drop: ['console', 'debugger'],
	},
	plugins: [react()],
	server: {
		strictPort: true,
	},
}));
