//用户相关所有接口函数
import {httpInstance} from '@/utils/http'

function loginAPI({account,password}){
    return httpInstance({
      url: '/login',
      method: 'post',
      data:{
        account,
        password
      }
    })
}

export {loginAPI}