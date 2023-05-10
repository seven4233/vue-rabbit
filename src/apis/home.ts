import httpInstance from '@/utils/http'

export function getBannerAPI<T>() {
  return httpInstance.request<any, T>({
    url: '/home/banner',
  })
}

/**
 * 获取新鲜好物数据
 */
export function getNewAPI<T>() {
  return httpInstance.request<any, T>({
    url: '/home/new',
  })
}
