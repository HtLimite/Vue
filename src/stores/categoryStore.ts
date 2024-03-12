import { ref} from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  // 导航列表数据
  const categoryList = ref([])
  // 获取导航数据方法
  const getCategory = async ()=>{
    const res = await getCategoryAPI()
    categoryList.value = res.data.result
  }
  return{getCategory,categoryList}
})
