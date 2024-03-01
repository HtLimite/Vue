<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import {onMounted} from 'vue'

import {useCategoryStore} from '@/stores/category.ts'
//触发获取导航列表数据函数
const categoryStore = useCategoryStore()

onMounted(()=>{
  //调用接口
  categoryStore.getCategory()
})

</script>


<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
<!--  二级路由-->
  <RouterView />
  <LayoutFooter />
</template>