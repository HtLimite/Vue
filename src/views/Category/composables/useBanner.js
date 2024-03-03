//封装轮播图相关业务
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'

function useBanner() {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: '2'
    })
    bannerList.value = res.data.result
  }
  onMounted(() => getBanner())

//   返回要用的数据
  return {
    bannerList
  }
}

export {useBanner}