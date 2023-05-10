import axios from 'axios'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})

// 拦截器
httpInstance.interceptors.request.use(
  config => {
    return config
  },
  err => Promise.reject(err)
)
// 相应拦截器
httpInstance.interceptors.response.use(
  res => {
    return res.data
  },
  err => Promise.reject(err)
)
export default httpInstance
