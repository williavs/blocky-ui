"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_swc_1 = require("@vitejs/plugin-react-swc");
var path_1 = require("path");
var url_1 = require("url");
var __dirname = (0, url_1.fileURLToPath)(new URL('.', import.meta.url));
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_swc_1.default)()],
    build: {
        lib: {
            entry: (0, path_1.resolve)(__dirname, 'src/index.ts'),
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
                }
            }
        },
        sourcemap: true,
        minify: false
    },
    resolve: {
        alias: {
            '@': (0, path_1.resolve)(__dirname, './src')
        }
    }
});
