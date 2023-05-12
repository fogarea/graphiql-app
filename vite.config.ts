import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import { visualizer } from 'rollup-plugin-visualizer';

export const pathResolver = (p: string) => resolve(__dirname, '.', p);

export default defineConfig({
  plugins: [react(), visualizer()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@': pathResolver('./src'),
    },
  },
});
