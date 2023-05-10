import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives'

app.use(lazyPlugin)
app.use(createPinia())
app.use(router)
app.mount('#app')
