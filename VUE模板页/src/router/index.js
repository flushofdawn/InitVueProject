
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
      component: () => import('@/components/main/dashboard'),
      meta:{ title: 'Dashboard', icon: 'fa fa-dashboard' },
    },
  ]},
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
/*
 {
 path: 'routerManage',
 name: 'routerManage',
 component: () => import("@/components/index/mainrouterview"),
 redirect:'/routerManage/menu3',
 meta:{ title: '路由管理', icon: 'el-icon-s-goods' },
 children:[{
 path: 'menu1',
 name: 'menu1',
 component: () => import("@/components/index/mainrouterview"),
 redirect : '/routerManage/menu1/menu1_1',
 meta:{ title: '菜单1', icon: 'el-icon-location' },
 children:[
 {
 path: 'menu1_1',
 name: 'menu1_1',
 component:() => import("@/components/main/routerManage/menu1_1"),
 meta:{ title: '菜单1-1', icon: 'el-icon-location' }
 },
 {
 path: 'menu1_2',
 name: 'menu1_2',
 component: () => import("@/components/main/routerManage/menu1_2"),
 meta:{ title: '菜单1-2', icon: 'el-icon-location' }
 }
 ]},
 {
 path: 'menu2',
 name: 'menu2',
 component: () => import("@/components/index/mainrouterview"),
 redirect: '/routerManage/menu2/menu2_1',
 meta:{ title: '菜单2', icon: 'el-icon-location' },
 children:[
 {
 path: 'menu2_1',
 name: 'menu2_1',
 component: () => import("@/components/main/routerManage/menu2_1"),
 meta:{ title: '菜单2_1', icon: 'el-icon-location' },
 }
 ]},
 {
 path: 'menu3',
 name: 'menu3',
 component: () => import("@/components/main/routerManage/menu3"),
 meta:{ title: '菜单3', icon: 'el-icon-location' }
 }
 ]}
*/




