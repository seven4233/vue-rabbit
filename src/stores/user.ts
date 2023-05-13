import {defineStore} from "pinia";
import {ref} from "vue";
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', ()=>{

    // 定义管理用户数据的state
    const userInfo = ref({})
    const getUserInfo = async({account, password})=>{
        const res = await loginAPI<IReturnType<any>>({account, password})
        console.log(res)
        userInfo.value = res.result
    }

    return {
        userInfo,
        getUserInfo
    }
})
