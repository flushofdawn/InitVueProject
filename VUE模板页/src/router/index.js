import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path:"*",redirect:'/dashboard'},
    {
      path: '/login',
      name: 'login',
      component: () => import("@/components/login/login"),
      meta:{
        title: '登陆',
      },
    },
    {
      path: '/',
      name: 'index',
      component: () => import("@/components/index/index"),
      redirect:'/dashboard',
      meta:{
        isLogin : true,
        title: '主页',
      },
      children:[
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import("@/components/main/dashboard/dashboard"),
          meta:{
            isLogin : true,
            title: 'Dashboard',
          },
        },{
          path: 'routerManage',
          name: 'routerManage',
          component: () => import("@/components/index/mainrouterview"),
          redirect:'/routerManage/menu3',
          meta:{
            isLogin : true,
            title: '路由管理',
          },
          children:[
            {
              path: 'menu1',
              name: 'menu1',
              component: () => import("@/components/index/mainrouterview"),
              redirect : '/routerManage/menu1/menu1_1',
              meta:{
                isLogin : true,
                title: '菜单1',
              },
              children:[
                {
                  path: 'menu1_1',
                  name: 'menu1_1',
                  component:() => import("@/components/main/routerManage/menu1_1"),
                  meta:{
                    isLogin : true,
                    title: '菜单1-1',
                  }
                },{
                  path: 'menu1_2',
                  name: 'menu1_2',
                  component: () => import("@/components/main/routerManage/menu1_2"),
                  meta:{
                    isLogin : true,
                    title: '菜单1-2',
                  }
                },
              ]
            }, {
              path: 'menu2',
              name: 'menu2',
              component: () => import("@/components/index/mainrouterview"),
              redirect: '/routerManage/menu2/menu2_1',
              meta:{
                isLogin : true,
                title: '菜单2',
              },
              children:[
                {
                  path: 'menu2_1',
                  name: 'menu2_1',
                  component: () => import("@/components/main/routerManage/menu2_1"),
                  meta:{
                    isLogin : true,
                    title: '菜单2_1',
                  }
                }
              ]
            },{
              path: 'menu3',
              name: 'menu3',
              component: () => import("@/components/main/routerManage/menu3"),
              meta:{
                isLogin : true,
                title: '菜单3',
              }
            }
          ]
        }
      ]
    }
  ]
})
