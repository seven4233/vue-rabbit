import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'
//测试接口函数
// import { getCategory } from './apis/testAPI'
// getCategory().then(res => {
//   console.log(res)
// })

const app = createApp(App)

// 定义全局指令
app.directive('img-lazy', {
  mounted(el, binding) {
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = binding.value
      }
    })
  },
})

app.use(createPinia())
app.use(router)
app.mount('#app')
