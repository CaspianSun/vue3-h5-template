import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import px2viewport from 'postcss-px-to-viewport-8-plugin'
import { ImageType } from './src/utils/images'

export default defineConfig({
  base: '/',
  plugins: [vue(), vueJsx(), UnoCSS()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src/') },
      { find: '/#', replacement: resolve(__dirname, 'types/') },
    ],
  },
  define: {
    ImageType: ImageType,
  },
  css: {
    postcss: {
      plugins: [
        px2viewport({
          viewportWidth: 375, // 设计稿的视口宽度
          unitPrecision: 6, // 单位转换后保留的精度
        }),
      ],
    },
  },
})
