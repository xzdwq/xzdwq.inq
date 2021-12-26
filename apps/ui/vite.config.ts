import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import ViteImages from 'vite-plugin-vue-images';

export default defineConfig({
  assetsInclude: /\.(pdf|jpg|png|svg)$/,
  resolve: {
    alias: {
      '@assets/': `${path.resolve(__dirname, './src/assets')}/`,
      '@app/': `${path.resolve(__dirname, './src/app')}/`,
      '@public/': `${path.resolve(__dirname, './src/public')}/`,
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true
      },
    }
  },
  publicDir: path.resolve(__dirname, './src/public'),
  plugins: [
    Vue(),
    Components({
      dirs: ['src/app/components'],
    }),
    ViteImages(),
  ],
});
