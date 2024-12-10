"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_swc_1 = require("@vitejs/plugin-react-swc");
var rollup_1 = require("@mdx-js/rollup");
var remark_gfm_1 = require("remark-gfm");
var rehype_prism_1 = require("@mapbox/rehype-prism");
var remark_frontmatter_1 = require("remark-frontmatter");
var url_1 = require("url");
var path_1 = require("path");
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = (0, path_1.dirname)(__filename);
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        __assign({ enforce: 'pre' }, (0, rollup_1.default)({
            remarkPlugins: [remark_gfm_1.default, remark_frontmatter_1.default],
            rehypePlugins: [rehype_prism_1.default],
            providerImportSource: "@mdx-js/react",
            recmaPlugins: [[
                    function () { return function (tree) {
                        var _a;
                        // Remove exports of frontmatter
                        if (tree.type === 'Program' && ((_a = tree.body[0]) === null || _a === void 0 ? void 0 : _a.type) === 'ExportNamedDeclaration') {
                            tree.body.shift();
                        }
                        return tree;
                    }; }
                ]]
        })),
        (0, plugin_react_swc_1.default)()
    ],
    resolve: {
        alias: {
            '@': (0, path_1.resolve)(__dirname, './src')
        }
    }
});
