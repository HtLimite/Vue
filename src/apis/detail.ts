import { httpInstance } from '@/utils/http'

function getDetailAPI(id) {
  return httpInstance({
    url: '/goods',
    params:{
      id
    }
  })
}

export { getDetailAPI }