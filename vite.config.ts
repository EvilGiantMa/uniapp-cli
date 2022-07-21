import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/store': resolve(__dirname, './src/store'),
      '@/components': resolve(__dirname, './src/components'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/fit': resolve(__dirname, './src/fit'),
      '@/config': resolve(__dirname, './src/config'),
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      // 配置全局scss组件
      scss: {
        additionalData: '@import "./src/static/sass/common.scss";'
      }
    }
  },
  server: {
    host: 'localhost',
    port: 8080,
    // 配置网页调试的网络代理
    // proxy: {
    //   '/xxx': {
    //     target: 'https://xxx',
    //     changeOrigin: true,
    //   }
    // }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  }
});
