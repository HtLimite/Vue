//购物车接口
import { httpInstance } from '@/utils/http'

//加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: '/member/cart',
    method: 'post',
    data: {
      skuId,
      count
    }
  })
}

//获取最新购物车列表
export const findNewCartAPI = ()=>{
  return httpInstance({
    url: '/member/cart',
    method: 'get'
  })
}