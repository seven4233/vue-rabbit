import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

interface IDataType {
  id: string
  name: string
  picture: string
  goods: any[]
  children: any[]
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
