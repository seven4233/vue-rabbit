import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export function useCategory() {
  const route = useRoute()
  interface CategoryChildren {
    id: string
    name: string
    picture: string
    goods: any[]
  }
  interface CategoryType {
    id?: string
    name?: string
    picture?: null
    children?: CategoryChildren[]
  }

  const categoryData = ref<CategoryType>({})

  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI<IReturnType<CategoryType>>(id as string)
    categoryData.value = res.result
  }

  onMounted(() => getCategory())
  onBeforeRouteUpdate(to => {
    console.log('路由变化了')

    getCategory(to.params.id)
  })

  return { categoryData }
}
