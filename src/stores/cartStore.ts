//封装购物车
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { findNewCartAPI , insertCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    //1.定义列表 state [{},{},{},...]
    const cartList = ref([])
    //2.定义action方法
    const addCart = async (goods) => {
      //添加购物车操作
      const {skuId,count} = goods
      if (isLogin) {
        //登录之后
        await insertCartAPI({skuId,count})
        const res = await findNewCartAPI()
        //覆盖本地购物车列表
        cartList.value = res.data.result

      } else {
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

    }
    //删除购物车商品
    const delCart = (skuId) => {
      //数组中删除
      //1.splice
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
      //2.filter

    }
    //计算属性
    //1.计算总数
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
    //2.计算总价
    //不闭包写法
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) =>
          a + c.count * c.price
        , 0)
    )
    //3.已选择数量
    const selectCount = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) =>
          a + c.count
        , 0)
    )
    //4.已选择总价
    const selectPrice = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) =>
          a + c.count * c.price
        , 0)
    )
    //是否全选
    const isAll = computed(() =>
      cartList.value.every((item) => item.selected === true))
    //单选功能
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }
    //全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => item.selected = selected)
    }

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      isAll,
      allPrice,
      singleCheck,
      allCheck,
      selectCount,
      selectPrice
    }
  }
  , {
    persist: true
  }
)