import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

// https://vite.dev/config/
export default ({ mode }: any) => {
  console.log('mode', loadEnv(mode, process.cwd()));
  return defineConfig({
    base: '/',
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: true,
      port: 8080,
      open: true,
      // proxy: {
      //   "/api": {
      //     target: "http://localhost:3000",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, "")
      //   }
      // }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";',
        },
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'static',
      chunkSizeWarningLimit: 2000,
      cssCodeSplit: true,
      sourcemap: false,
      minify: 'esbuild',
      assetsInlineLimit: 4000,
      reportCompressedSize: false,
      rollupOptions: {
        treeshake: true,
        output: {
          manualChunks: {
            vue: ['vue', 'pinia', 'vue-router'],
            elementIcons: ['@element-plus/icons-vue'],
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
  });
};
