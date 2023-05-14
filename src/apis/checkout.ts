import httpInstance from '@/utils/http'

export function getCheckoutInfoAIP<T>() {
  return httpInstance.request<any, T>({
    url: '/member/order/pre',
  })
}
