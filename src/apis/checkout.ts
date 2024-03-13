import {httpInstance} from '@/utils/http'

//获取详情接口
export const getCheckInfoAPI = ()=>{
  return httpInstance({
    url: '/member/order/pre',
  })
}
//创建订单

export const creatOrderAPI = (data)=>{
  return httpInstance({
    url: '/member/order',
    method: 'post',
    data
  })
}