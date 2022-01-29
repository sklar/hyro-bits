import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './storybook-static/',
  },
  plugins: [react()],
  preview: {
    port: 3000,
  },
});
