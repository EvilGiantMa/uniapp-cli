import { createSSRApp } from 'vue'
import App from './App.vue'
import uniApi from './fit/uniApi'
import { createPinia } from 'pinia'

const store = createPinia()

export function createApp() {
  const app = createSSRApp(App).use(store)
  // 全局挂载适配多端的UniApi
  app.config.globalProperties.$UniApi = uniApi
  return {
    app,
  }
}
