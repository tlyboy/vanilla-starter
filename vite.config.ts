import path from 'node:path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        {
          axios: [
            ['default', 'axios'],
          ],
        },
      ],
      dirs: [
        './src/utils',
        './src/api',
      ],
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    proxy: {
      '/github': {
        target: 'https://api.github.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/github/, ''),
      },
    },
  },
})
