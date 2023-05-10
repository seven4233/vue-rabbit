import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

interface IGoodsType {
  id: string
  name: string
  orderNum?: number
  desc: string
  picture: string
  price: string
}
interface IDataType {
  id: string
  name: string
  picture: string
  goods: IGoodsType[]
  children: IDataType[]
}
interface IReturnType {
  result: IDataType[]
}
export const useCategoryStore = defineStore('counter', () => {
  const categoryList = ref<IDataType[]>([])

  const getCategory = async () => {
    const res = await getCategoryAPI<IReturnType>()
    categoryList.value = res.result
  }
  return { categoryList, getCategory }
})
