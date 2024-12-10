import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import remarkFrontmatter from 'remark-frontmatter'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {enforce: 'pre', ...mdx({
      remarkPlugins: [remarkGfm, remarkFrontmatter],
      rehypePlugins: [rehypePrism],
      providerImportSource: "@mdx-js/react",
      recmaPlugins: [[
        () => (tree) => {
          // Remove exports of frontmatter
          if (tree.type === 'Program' && tree.body[0]?.type === 'ExportNamedDeclaration') {
            tree.body.shift()
          }
          return tree
        }
      ]]
    })},
    react()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})