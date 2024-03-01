//引入初始化样式文件
import '@/styles/common.scss'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//导入图片懒加载组件
import { useIntersectionObserver } from '@vueuse/core'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy',{
  mounted(el,binding){
    //el :指令绑定的元素 img
    //binding : binding.value  指令等于后面绑定的表达式的值 图片 url
    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if(isIntersecting){
          //进入视口取
          el.src = binding.value
        }
        console.log(isIntersecting)
      },
    )
    console.log(el,binding)
  }
})
