//封装分类数据业务相关
import { getCategoryAPI } from '@/apis/category'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

function useCategory() {

  //获取路由参数
  const route = useRoute()
  //获取数据
  const categoryData = ref({})
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.data.result
  }

  onMounted(() => getCategory())
  //路由变化时，分类数据变化
  onBeforeRouteUpdate((to) => {
    //使用最新路由参数
    getCategory(to.params.id)
  })
  return {
    categoryData
  }

}

export {useCategory}