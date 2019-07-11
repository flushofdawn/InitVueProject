import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },{
      path: '/index',
      name: 'index',
      component: Index,
      meta:{
        isLogin : true,
      }
    }
  ]
})
