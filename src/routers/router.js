import Vue from 'vue'
import Router from 'vue-router'
import Start from '../views/Start.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/start'
    },
    {
      path: '/start',
      name: 'start',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import( '../views/Start.vue')
      component: Start
    },
    { 
      path: '/home', 
      name:'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import('../views/Hot.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue')
    },
    {
      path: '/updateInfo',
      name: 'updateInfo',
      component: () => import('../views/UpdateInfo.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/Error')
    }

  ]
})
