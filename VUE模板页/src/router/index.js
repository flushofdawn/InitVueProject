import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Nav from '@/components/nav/nav'
import Menu from '@/components/menu/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav,
      meta:{
        isLogin : true,
      }
    },{
      path: '/menu',
      name: 'menu',
      component: Menu,
      meta:{
        isLogin : true,
      }
    }
  ]
})
