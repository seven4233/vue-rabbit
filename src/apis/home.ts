import httpInstance from '@/utils/http'

export function getBannerAPI<T>() {
  return httpInstance.request<any, T>({
    url: '/home/banner',
  })
}
