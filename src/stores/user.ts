import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
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
      console.log(res)
      userInfo.value = res.result
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
