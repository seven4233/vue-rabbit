import httpInstance from '@/utils/http'

/**
 * 获取首页轮播图
 * @returns
 */
export function getBannerAPI<T>(distributionSite = '1') {
  return httpInstance.request<any, T>({
    url: '/home/banner',
    params: {
      distributionSite,
    },
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

/**
 * 获取人气推荐
 */
export function getHotAPI<T>() {
  return httpInstance.request<any, T>({
    url: '/home/hot',
  })
}

/**
 * 获取所有商品模块
 */

export function getGoodsAPI<T>() {
  return httpInstance.request<any, T>({
    url: '/home/goods',
  })
}
