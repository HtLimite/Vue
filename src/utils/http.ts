import axios from 'axios'
// 错误提示消息elementPLUS 插件
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
//pinia获取token
import { useUserStore } from '@/stores/user'
import router from '@/router/index'
// 创建axios实例
export const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
httpInstance.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  //1.从 pinia 中获取数据 token
  const userStore = useUserStore()

  const token = userStore.userInfo.token
  //2.拼接
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
httpInstance.interceptors.response.use(function(response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function(error) {
  const userStore = useUserStore()
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message: error.response.data.message
  })
  //401token 失效处理
  if (error.response.status === 401) {
    //退出登录逻辑
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(error)
})

export default { httpInstance }