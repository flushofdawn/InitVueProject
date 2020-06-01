/**
 * Created by 朱颜辞镜花辞树 on 2020/4/28.
 */
//  公共路由
export const constantRoutes = [
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
]

// 异步路由
export const asyncRoutes = [

]
