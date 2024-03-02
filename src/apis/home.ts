import {httpInstance} from '@/utils/http'

//轮播图接口
function getBannerAPI(){
  return httpInstance({
    url: '/home/banner'
  })
}

//新鲜好物接口
function findNewAPI(){
  return httpInstance({
    url: '/home/new'
  })
}
//人气推荐接口
function findHotAPI(){
  return httpInstance({
    url: '/home/hot'
  })
}

//产品列表接口
function getGoodsAPI(){
  return httpInstance({
    url: 'home/goods'
  })
}



export {getBannerAPI ,findNewAPI,findHotAPI, getGoodsAPI}