import httpInstance from '@/utils/http'

/**
 * 获取商品详情页面
 * @param id
 * @returns
 */
export function getDetailAPI<T>(id: string | string[]) {
    return httpInstance.request<any, T>({
        url: '/goods',
        params: {
            id,
        },
    })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
type HotObj = {
    id: string | string[]
    type: number
    limit?: number
}

export function getHotGoodsAPI<T>(hotObj: HotObj) {
    const {id, type, limit = 3} = hotObj
    return httpInstance.request<any, T>({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit,
        },
    })
}
