import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import {cspPresets} from './vite/cspPresets';
import {permissionsPolicy} from './vite/permissionsPolicy';

// https://vite.dev/config/
export default defineConfig(({mode}) => {
	const csp = cspPresets[mode].join('; ');

	return {
		// base: added only for github pages,
		base: '/react-vite-ts-template/',
		build: {
			minify: 'esbuild',
			sourcemap: mode !== 'production',
			target: 'es2022',
			cssCodeSplit: true,
		},
		esbuild: {
			drop: ['console', 'debugger'],
		},
		plugins: [react()],
		server: {
			headers: {
				'X-Frame-Options': 'DENY',
				'X-Content-Type-Options': 'nosniff',
				'Referrer-Policy': 'no-referrer-when-downgrade',
				'Permissions-Policy': permissionsPolicy,
				'Content-Security-Policy': csp,
			},
			strictPort: true,
		},
	};
});
