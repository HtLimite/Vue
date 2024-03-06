//引入初始化样式文件
import '@/styles/common.scss'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

//引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives'

//引入全局组件
import { componentPlugin } from '@/components'

const app = createApp(App)

//pinia插件

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)



app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


