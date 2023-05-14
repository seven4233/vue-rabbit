import myRequest from '@/utils/http'

interface InsertCart {
  skuId: string
  count: number
}
/**
 * 添加购物车接口
 */
export function insertCartAPI<T>(insertCartObj: InsertCart) {
  const { skuId, count } = insertCartObj
  return myRequest.request<any, T>({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count,
    },
  })
}

/**
 * 获取最新购物车列表
 */

export function getNewCartListAPI<T>() {
  return myRequest.request<any, T>({
    url: '/member/cart',
  })
}

/**
 * 删除购物车接口
 */
export function delCartAPI<T>(ids: string[]) {
  return myRequest.request<any, T>({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids,
    },
  })
}
interface CartArr {
  skuId: string
  selected: string
  count: number
}
// 合并购物车接口
export function mergeCartAPI<T>(cartArr: CartArr[]) {
  return myRequest.request<any, T>({
    url: '/member/cart/merge',
    method: 'POST',
    data: cartArr,
  })
}
