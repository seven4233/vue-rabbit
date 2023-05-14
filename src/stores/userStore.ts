import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'
interface UserInfo {
  account?: string
  avatar?: string
  birthday?: string
  id?: string
  token?: string
}

export const useUserStore = defineStore(
  'user',
  () => {
    // 定义管理用户数据的state
    const userInfo = ref<UserInfo>({})
    // 登录-获取用户信息
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI<IReturnType<UserInfo>>({ account, password })
      userInfo.value = res.result
      const cartStore = useCartStore()
      // 合并购物车
      await mergeCartAPI(
        cartStore.cartList.map(item => {
          return {
            skuId: item.skuId,
            selected: String(item.selected),
            count: item.count,
          }
        })
      )
      await cartStore.getNewCartList()
    }

    // 退出登录-清楚用户信息
    const clearUserInfo = () => {
      const cartStore = useCartStore()
      userInfo.value = {}
      // 清除购物车数据
      cartStore.clearCartList()
    }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  }
)
