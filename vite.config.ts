import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
	plugins: [react()],
	build: {
		// outDir: 'build',
		minify: 'esbuild',
		target: 'es2022',
		sourcemap: mode !== 'production',
	},
	server: {
		// port: 5173
		strictPort: true,
	},
}));
