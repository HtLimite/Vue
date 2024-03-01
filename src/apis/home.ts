import {httpInstance} from '@/utils/http'

//轮播图接口
function getBannerAPI(){
  return httpInstance({
    url: '/home/banner'
  })
}


export {getBannerAPI}