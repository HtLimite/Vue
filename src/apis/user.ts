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
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit
    }
  })
}

export {loginAPI}