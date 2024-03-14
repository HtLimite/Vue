import { httpInstance } from '@/utils/http'


//订单中心
/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/

export const getUserOrder = (params) => {
  return httpInstance({
    url:'/member/order',
    method:'GET',
    params
  })
}