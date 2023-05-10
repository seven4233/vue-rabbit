import { useIntersectionObserver } from '@vueuse/core'
import type { App } from 'vue'
// 定义懒加载插件

export const lazyPlugin = {
  install(app: App) {
    //懒加载指令逻辑
    // 定义全局指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value

            stop()
          }
        })
      },
    })
  },
}
