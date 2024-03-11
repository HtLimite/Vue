//封装购物车
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    //1.定义列表 state [{},{},{},...]
    const cartList = ref([])
    //2.定义action方法
    const addCart = (goods) => {
      //添加购物车操作
      //已添加过
      const item = cartList.value.find((item) =>
        goods.skuId === item.skuId
      )
      if (item) {
        //找到了
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
      //未添加过
    }
    //删除购物车商品
    const delCart = (skuId) => {
      //数组中删除
      //1.splice
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
      //2.filter

    }
    //计算总数
    // ()=>{} 闭包 return 才返回
    // ()=> ... 直接返回
    const allCount = computed(() => {
      //a : 每一次计算逻辑完成 返回值
      //c : 遍历时的一个 对象
      //reduce : 遍历数组所有 对象
      //cartList.value : [{count:"1",skuId:"1233",...},{},{},...]
      return cartList.value.reduce((a, c) =>
          a + c.count
        , 0)
    })
    //计算总价
    //不闭包写法
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) =>
          a + c.count * c.price
        , 0)
    )

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice
    }
  }
  , {
    persist: true
  }
)