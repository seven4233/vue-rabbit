import httpInstance from '@/utils/http'

export function getCategoryAPI<T>(id: string) {
  return httpInstance.request<any, T>({
    url: '/category',
    params: {
      id,
    },
  })
}
