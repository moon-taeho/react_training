import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		hmr: {
			host: '192.168.154.111',
		},
		watch: {
			usePolling: true,
		},
	},
});
