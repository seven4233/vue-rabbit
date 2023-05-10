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

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export interface Data {
  categoryId: any
  page: number
  pageSize: number
  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
}
export function getSubCategoryAPI<T>(data: Data) {
  return httpInstance.request<any, T>({
    url: '/category/goods/temporary',
    method: 'POST',
    data,
  })
}
