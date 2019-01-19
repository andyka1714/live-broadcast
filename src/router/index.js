import Vue from 'vue'
import Router from 'vue-router'
import LiveBroadcast from '@/components/LiveBroadcast'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/live-broadcast',
      name: 'LiveBroadcast',
      component: LiveBroadcast
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
