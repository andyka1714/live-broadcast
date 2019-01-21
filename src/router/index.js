import Vue from 'vue'
import Router from 'vue-router'
import LiveBroadcast from '@/components/LiveBroadcast'
import User from '@/components/User'
import Home from '@/components/Home'
import CreateStore from '@/components/CreateStore'
import OrdersInfo from '@/components/OrdersInfo'

Vue.use(Router)

export default new Router({
  routes: [
  {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/live-broadcast',
      name: 'LiveBroadcast',
      component: LiveBroadcast
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/create-store',
      name: 'CreateStore',
      component: CreateStore
    },{
      path: '/orders-info',
      name: 'OrdersInfo',
      component: OrdersInfo
    }
  ]
})
