import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/index/index'

//Dashboard
import Dashboard from '@/components/main/dashboard/dashboard';

//路由嵌套-菜单页面
import Menu1_1 from '@/components/main/routerManage/menu1_1';
import Menu1_2 from '@/components/main/routerManage/menu1_2';
import Menu2_1 from '@/components/main/routerManage/menu2_1';
import Menu3 from '@/components/main/routerManage/menu3';

//空 Routerview 组件页
import Routerviewmodal from '@/components/main/mainrouterview';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:"*",redirect:'/dashboard'},
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        title: '登陆',
      },
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect:'/dashboard',
      meta:{
        isLogin : true,
        title: '主页',
      },
      children:[
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
          meta:{
            isLogin : true,
            title: 'Dashboard',
          },
        },{
          path: 'routerManage',
          name: 'routerManage',
          component: Routerviewmodal,
          redirect:'/routerManage/menu3',
          meta:{
            isLogin : true,
            title: '路由管理',
          },
          children:[
            {
              path: 'menu1',
              name: 'menu1',
              component: Routerviewmodal,
              redirect : '/routerManage/menu1/menu1_1',
              meta:{
                isLogin : true,
                title: '菜单1',
              },
              children:[
                {
                  path: 'menu1_1',
                  name: 'menu1_1',
                  component: Menu1_1,
                  meta:{
                    isLogin : true,
                    title: '菜单1-1',
                  }
                },{
                  path: 'menu1_2',
                  name: 'menu1_2',
                  component: Menu1_2,
                  meta:{
                    isLogin : true,
                    title: '菜单1-2',
                  }
                },
              ]
            }, {
              path: 'menu2',
              name: 'menu2',
              component: Routerviewmodal,
              redirect: '/routerManage/menu2/menu2_1',
              meta:{
                isLogin : true,
                title: '菜单2',
              },
              children:[
                {
                  path: 'menu2_1',
                  name: 'menu2_1',
                  component: Menu2_1,
                  meta:{
                    isLogin : true,
                    title: '菜单2_1',
                  }
                }
              ]
            },{
              path: 'menu3',
              name: 'menu3',
              component: Menu3,
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
