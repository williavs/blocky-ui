import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BlockyUI',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    },
    sourcemap: true,
    minify: false,
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
    jsx: 'automatic'
  }
}); 