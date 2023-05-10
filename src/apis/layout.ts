import httpInstance from '@/utils/http'

export function getCategoryHeadAPI<T>() {
  return httpInstance.request<any, T>({
    url: '/home/category/head',
  })
}
