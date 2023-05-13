import axios from 'axios'
import {ElMessage} from "element-plus";
import {useUserStore} from "@/stores/user";


const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})

// 拦截器
httpInstance.interceptors.request.use(
    config => {
        const useStore = useUserStore()
        const token = useStore.userInfo.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    err => Promise.reject(err)
)
// 相应拦截器
httpInstance.interceptors.response.use(
    res => {

        return res.data
    },
    err => {
        ElMessage.warning(err.response.data.message)
        return Promise.reject(err)
    }
)
export default httpInstance
