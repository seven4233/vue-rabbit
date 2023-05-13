import {defineStore} from "pinia";
import {ref} from "vue";
import {loginAPI} from '@/apis/user'

interface UserInfo {
    account?: string
    avatar?: string
    birthday?: string
    id?: string
    token?: string

}

export const useUserStore = defineStore('user', () => {
    // 定义管理用户数据的state
    const userInfo = ref<UserInfo>({})
    const getUserInfo = async ({account, password}) => {
        const res = await loginAPI<IReturnType<UserInfo>>({account, password})
        console.log(res)
        userInfo.value = res.result
    }

    const clearUserInfo = () => {
        userInfo.value = {}
    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true
})
