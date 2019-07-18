import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/index/index'

import Main1 from '@/components/main/main1';
import Main2_1_1 from '@/components/main/main2_1_1';
import Main2_1_2 from '@/components/main/main2_1_2';
import Main2_2_1 from '@/components/main/Main2_2_1';
import Main2_3 from '@/components/main/Main2_3';

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      },
      children:[
        {
          path: '/index/main1',
          name: 'main1',
          component: Main1,
          meta:{
            isLogin : true,
          }
        },
        {
          path: '/index/main2_1_1',
          name: 'Main2_1_1',
          component: Main2_1_1,
          meta:{
            isLogin : true,
          }
        },
        {
          path: '/index/main2_1_2',
          name: 'Main2_1_2',
          component: Main2_1_2,
          meta:{
            isLogin : true,
          }
        },
        {
          path: '/index/main2_2_1',
          name: 'Main2_2_1',
          component: Main2_2_1,
          meta:{
            isLogin : true,
          }
        },
        {
          path: '/index/main2_3',
          name: 'Main2_3',
          component: Main2_3,
          meta:{
            isLogin : true,
          }
        }]
    }
  ]
})
