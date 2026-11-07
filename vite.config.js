import { defineConfig } from 'vite';

export default defineConfig({
  // Configurado para GitHub Pages (repositorio relativo)
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
