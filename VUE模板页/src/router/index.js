import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/index/index'

import Dashboard from '@/components/main/dashboard';
import Main2_1_1 from '@/components/main/main2_1_1';
import Main2_1_2 from '@/components/main/main2_1_2';
import Main2_2_1 from '@/components/main/Main2_2_1';
import Main2_3 from '@/components/main/Main2_3';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'*',
      redirect:'/',
      meta:{
        isLogin : true,
        title: '主页',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        title: '登陆',
      },
    },{
      path: '/',
      component: Index,
      redirect : 'dashboard',
      meta:{
        isLogin : true,
        title: '主页',
      },
      children:[
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
          alias:'/',
          meta:{
            isLogin : true,
            title: 'Dashboard',
          }
        },
        {
          path: '/main2/main2_1/main2_1_1',
          name: 'Main2_1_1',
          component: Main2_1_1,
          alias:'/main2/main2_1',
          meta:{
            isLogin : true,
            title: 'Main2_1_1',
          }
        },
        {
          path: '/main2/main2_1/main2_1_2',
          name: 'Main2_1_2',
          component: Main2_1_2,
          meta:{
            isLogin : true,
            title: 'Main2_1_2',
          }
        },
        {
          path: '/main2/main2_2/main2_2_1',
          name: 'Main2_2_1',
          component: Main2_2_1,
          alias:'/main2/main2_2',
          meta:{
            isLogin : true,
            title: 'Main2_2_1',
          }
        },
        {
          path: '/main2/main2_3',
          name: 'Main2_3',
          component: Main2_3,
          alias:'/main2',
          meta:{
            isLogin : true,
            title: 'Main2_3',
          }
        }]
    }
  ]
})
