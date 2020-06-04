
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout';
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login'),
    meta:{
      title: '登陆',
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children:[
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard'),
      meta:{ title: 'Dashboard', icon: 'fa fa-dashboard' },
    },
  ]},
]
export const asyncRoutes = [
  {
    path: '/routerManage',
    component: Layout,
    redirect: '/routerManage/menu3',
    name: 'routerManage',
    meta:{ title: '路由管理', icon: 'el-icon-s-goods' },
    children: [
      {
        path: 'menu1',
        component: () => import('@/components/index/mainrouterview'),
        name: 'Menu1',
        meta: { title: 'Menu1' },
        redirect: '/routerManage/menu1/menu1_1',
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/routerManage/menu1_1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/routerManage/menu1_2'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-2' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/components/index/mainrouterview'),
        name: 'Menu2',
        meta: { title: 'Menu2' },
        redirect: '/menu2/menu2_1',
        children: [
          {
            path: 'menu2-1',
            component: () => import('@/views/routerManage/menu2_1'),
            name: 'Menu2-1',
            meta: { title: 'Menu2-1' }
          }
        ]
      },
      {
        path: 'menu3',
        name: 'Menu3',
        component: () => import('@/views/routerManage/menu3'),
        meta: { title: 'Menu3' }
      }
    ]
  }
]
const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router;




