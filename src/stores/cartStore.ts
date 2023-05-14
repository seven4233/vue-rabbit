import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { delCartAPI, getNewCartListAPI, insertCartAPI } from '@/apis/cart'
export interface SkuObj {
  skuId: string
  price: string
  oldPrice?: string
  inventory?: number
  specsText?: string
}

export interface CartObj extends SkuObj {
  id: string
  name: string
  picture: string
  count: number
  selected: boolean
  attrsText?: string
}

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 获取最新购物车数据
    const getNewCartList = async () => {
      const res = await getNewCartListAPI<IReturnType<any>>()
      cartList.value = res.result
    }
    // 定义state
    const cartList = ref<CartObj[]>([])

    // 添加购物车
    const addCart = async (cartObj: CartObj) => {
      if (isLogin.value) {
        // 登录之后的购物车逻辑
        await insertCartAPI({ skuId: cartObj.skuId, count: cartObj.count })
        getNewCartList()
      } else {
        const tarObj = cartList.value.find(item => item.skuId === cartObj.skuId)
        if (tarObj) {
          tarObj.count++
        } else {
          cartList.value.push(cartObj)
        }
      }
    }

    // 删除购物车
    const delCart = async (skuId: string) => {
      if (isLogin.value) {
        await delCartAPI([skuId])
        getNewCartList()
      } else {
        const idx = cartList.value.findIndex(item => item.skuId === skuId)
        cartList.value.splice(idx, 1)
      }
    }
    // 清楚购物车数据
    const clearCartList = () => {
      cartList.value = []
    }

    // 单选
    const singleCheck = (skuId: string | number, selected: boolean) => {
      const targetSku = cartList.value.find(item => item.skuId === skuId)
      if (targetSku) {
        targetSku.selected = selected
      }
    }
    // 全选
    const allCheck = (selected: boolean) => {
      cartList.value.map(item => (item.selected = selected))
    }

    // 计算属性
    // 1. 总的数量
    const totalCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    // 2. 总价
    const totalPrice = computed(() => cartList.value.reduce((a, c) => a + +c.price * c.count, 0))
    // 3. 已选择的数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 4. 已选择的商品价格合计
    const selectedPrice = computed(() =>
      cartList.value.filter(item => item.selected).reduce((a, c) => a + +c.price * c.count, 0)
    )

    // 是否全选
    const isAll = computed(() => cartList.value.every(item => item.selected))
    return {
      cartList,
      addCart,
      delCart,
      singleCheck,
      allCheck,
      clearCartList,
      totalCount,
      totalPrice,
      isAll,
      selectedCount,
      selectedPrice,
    }
  },
  {
    persist: true,
  }
)
