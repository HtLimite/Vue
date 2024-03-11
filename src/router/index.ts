import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      // 二级路由
      children: [
        {
          path: '',
          component: Home

        },
        {
          path: 'category/:id',
          component: Category
        },
        //二级分类
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        //详情页
        {
          path: 'detail/:id',
          component: Detail
        }
      ]
    },
    //登录页
    {
      path: '/login',
      component: Login
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  //路由行为定制
  scrollBehavior(){
    return {
      top: 0
    }
  }
})

export default router
