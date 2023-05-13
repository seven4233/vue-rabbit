import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
const app = createApp(App)

// 引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'

app.use(lazyPlugin)
app.use(componentPlugin)

app.use(createPinia())
app.use(router)
app.mount('#app')
