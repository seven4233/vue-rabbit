import httpInstance from '@/utils/http'

export function getCheckoutInfoAPI<T>() {
  return httpInstance.request<any, T>({
    url: '/member/order/pre',
  })
}

// 创建订单
export function createOrderAPI<T>(data) {
  return httpInstance.request<any, T>({
    url: '/member/order',
    method: 'POST',
    data,
  })
}
