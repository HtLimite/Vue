//二级分类接口
import { httpInstance } from '@/utils/http'

function getCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    method: 'get',
    params: {
      id
    }
  })
}

export { getCategoryAPI }