import httpInstance from '@/utils/http'

interface FormData {
  account: string
  password: string
}

// 登录接口
export function loginAPI<T>(formData: FormData) {
  const { account, password } = formData
  return httpInstance.request<any, T>({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password,
    },
  })
}

// 获取猜你喜欢列表
export function getLikeListAPI(limit = 4) {
  return httpInstance.request({
    url: '/goods/relevant',
    params: {
      limit,
    },
  })
}
