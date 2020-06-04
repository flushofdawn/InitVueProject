/**
 * Created by 朱颜辞镜花辞树 on 2020/4/28.
 */
//  公共路由

export const constantRoutes = [  
  {
    path: '/routerManage',
    component: 'layout/Layout',
    redirect: '/routerManage/menu3',
    name: 'routerManage',
    meta:{ title: '路由管理', icon: 'el-icon-s-goods' },
    children: [
      {
        path: 'menu1',
        component: 'components/index/mainrouterview',
        name: 'Menu1',
        meta: { title: 'Menu1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: 'views/routerManage/menu1_1',
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: 'views/routerManage/menu1_2',
            name: 'Menu1-1',
            meta: { title: 'Menu1-2' }
          }
        ]
      },
      {
        path: 'menu2',
        component: 'components/index/mainrouterview',
        name: 'Menu2',
        meta: { title: 'Menu2' },
        redirect: '/nested/menu1/menu2_1',
        children: [
          {
            path: 'menu2-1',
            component: 'views/routerManage/menu2_1',
            name: 'Menu2-1',
            meta: { title: 'Menu2-1' }
          }
        ]
      },
      {
        path: 'menu3',
        name: 'Menu3',
        component: 'views/routerManage/menu3',
        meta: { title: 'Menu3' }
      }
    ]
  }
]

// 异步路由
export const asyncRoutes = [

]
