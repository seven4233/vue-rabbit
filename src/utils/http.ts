import axios from 'axios'
import {ElMessage} from "element-plus";
import {useUserStore} from "@/stores/user";
import router from "@/router";


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
        // 错误处理
        const userStore = useUserStore();
        if (err.response.status === 401) {
            //1.清楚用户信息
            userStore.clearUserInfo()
            //2.返回登录页
            router.push('/login')

        }
        ElMessage.warning(err.response.data.message)
        return Promise.reject(err)
    }
)
export default httpInstance
