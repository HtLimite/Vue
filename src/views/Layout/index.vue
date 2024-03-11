<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { onMounted } from 'vue'

import { useCategoryStore } from '@/stores/category.ts'
//触发获取导航列表数据函数
const categoryStore = useCategoryStore()

onMounted(() => {
  //调用接口 一次 子组件再访问数据不需要再调用接口
  categoryStore.getCategory()
})

</script>


<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!--  二级路由 添加key 破坏复用机制-->
  <!--  <RouterView :key="$route.fullPath" />-->
<!--  方案二 钩子函数 onBeforeRouteUpdate-->
  <RouterView />
  <LayoutFooter />
</template>