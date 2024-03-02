//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app){
    //懒加载逻辑
    //定义全局指令
    app.directive('img-lazy',{
      mounted(el,binding){
        //el :指令绑定的元素 img
        //binding : binding.value  指令等于后面绑定的表达式的值 图片 url
        const {stop} = useIntersectionObserver(
          // vueUse 视图监控组件
          el,
          ([{ isIntersecting }]) => {
            if(isIntersecting){
              // 进入视图区域
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}