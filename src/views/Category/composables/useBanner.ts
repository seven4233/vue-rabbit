import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner() {
  interface IBannerType {
    id: string
    imgUrl: string
    hrefUrl: string
    type: string
  }

  const bannerList = ref<IBannerType[]>([])

  const getBanner = async () => {
    const res = await getBannerAPI<IReturnType<IBannerType[]>>('2')
    bannerList.value = res.result
  }
  onMounted(() => getBanner())

  return { bannerList }
}
