import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryHeadAPI } from '@/apis/layout'

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

export const useCategoryStore = defineStore('counter', () => {
  const categoryList = ref<IDataType[]>([])

  const getCategory = async () => {
    const res = await getCategoryHeadAPI<IReturnType<IDataType[]>>()
    categoryList.value = res.result
  }

  return { categoryList, getCategory }
})
