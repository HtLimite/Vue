//components 中的组件全局化注册
//通过插件的方式
import ImageView from './ImageView/index.vue'
import XtxSku from '@/components/XtxSku/index.vue'

//定义一个的对象
export const componentPlugin = {
  //固定方法
  install(app){
    //注册组件
    //app.component('组件名字'，组件配置对象)
    app.component('XtxImageView',ImageView)
    app.component('XtxSku',XtxSku)
    //main 注册
  }
}