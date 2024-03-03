//二级分类接口
import { httpInstance } from '@/utils/http'

// 二级分类列表数据
function getCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    method: 'get',
    params: {
      id
    }
  })
}
//二级分类面包屑数据
function getCategoryFilterAPI(id){
  return httpInstance({
    url: '/category/sub/filter',
    params:{
      id
    }
  })
}

//二级分类商品数据
/**
 * @description: 获取导航数据
 * @data {
 categoryId: 1005000 ,
 page: 1,
 pageSize: 20,
 sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 }
 * @return {*}
 */
function getSubCategoryAPI(data){
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}


export { getCategoryAPI , getCategoryFilterAPI, getSubCategoryAPI}