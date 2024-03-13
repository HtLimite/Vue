//管理用户数据相关
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from '@/stores/cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
    //1.定义管理用户数据的state
    const userInfo = ref({})
    const cartStore = useCartStore()

    //2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.data.result
      //合并购物车
      await mergeCartAPI(cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        }
      ))
      await cartStore.updateNewList()
    }
    //清除数据
    const clearUserInfo = () => {
      //清除用户信息
      userInfo.value = {}
      //清除购物车信息
      cartStore.clearCart()
    }
    //3.以对象的格式返回
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  }, {
    //数据持久化插件
    //true ： pinia 内存数据 与 本地缓存 （执行相同操作（存储/清除）） 保持同步
    persist: true
  }
)