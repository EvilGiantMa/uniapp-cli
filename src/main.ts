import { createSSRApp } from 'vue'
import App from './App.vue'
import store, { key } from "./store";
import uniApi from './fit/uniApi'

export function createApp() {
  const app = createSSRApp(App).use(store, key)
  app.config.globalProperties.$UniApi = uniApi
  return {
    app,
  }
}
