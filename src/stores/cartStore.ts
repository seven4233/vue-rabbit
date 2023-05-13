import {defineStore} from "pinia";
import {ref} from "vue";

export interface SkuObj {
    skuId: string
    price: string
    oldPrice?: string
    inventory?: number
    specsText?: string
}

export interface CartObj extends SkuObj {
    id: string
    name: string
    picture: string
    count: number
    selected: boolean
    attrsText?: string

}

export const useCartStore = defineStore('cart', () => {

    const cartList = ref<CartObj[]>([])

    const addCart = (cartObj: CartObj) => {
        let tarObj = cartList.value.find(item => item.skuId === cartObj.skuId)
        if (tarObj) {
            tarObj.count++
        } else {
            cartList.value.push(cartObj)
        }
    }
    return {
        cartList, addCart
    }

}, {
    persist: true
})

