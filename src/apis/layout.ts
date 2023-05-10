import httpInstance from '@/utils/http'

export function getCategoryAPI<T>() {
  return httpInstance.request<any, T>({
    url: '/home/category/head',
  })
}
