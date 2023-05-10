import httpInstance from '@/utils/http'

/**
 * 获取一级分类数据
 * @param id
 * @returns
 */
export function getCategoryAPI<T>(id: string) {
  return httpInstance.request<any, T>({
    url: '/category',
    params: {
      id,
    },
  })
}

/**
 * 获取二级分类数据
 */
export function getCategoryFilterAPI<T>(id: string | string[]) {
  return httpInstance.request<any, T>({
    url: '/category/sub/filter',
    params: {
      id,
    },
  })
}
