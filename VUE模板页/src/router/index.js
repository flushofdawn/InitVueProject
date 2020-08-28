import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/layout";
export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: () => import("@/components/login"),
    meta: {
      title: "登陆"
    }
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: {
      title: "主页"
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard"),
        meta: { title: "Dashboard", icon: "fa fa-dashboard" }
      }
    ]
  }
];
export const asyncRoutes = [
  {
    path: "/routerManage",
    name: "routerManage",
    component: Layout,
    redirect: "/routerManage/menu3",
    meta: { title: "路由管理", icon: "el-icon-s-goods" },
    children: [
      {
        path: "/routerManage/menu1",
        name: "Menu1",
        redirect: "/routerManage/menu1/menu1-1",
        component: () => import("@/components/index/mainrouterview"),
        meta: { title: "Menu1" },
        children: [
          {
            path: "/routerManage/menu1/menu1-1",
            component: () => import("@/views/routerManage/menu1_1"),
            name: "Menu1-1",
            meta: { title: "Menu1-1" }
          },
          {
            path: "/routerManage/menu1/menu1-2",
            component: () => import("@/views/routerManage/menu1_2"),
            name: "Menu1-2",
            meta: { title: "Menu1-2" }
          }
        ]
      },
      {
        path: "/routerManage/menu2",
        component: () => import("@/components/index/mainrouterview"),
        name: "Menu2",
        meta: { title: "Menu2" },
        redirect: "/routerManage/menu2/menu2-1",
        children: [
          {
            path: "/routerManage/menu2/menu2-1",
            component: () => import("@/views/routerManage/menu2_1"),
            name: "Menu2-1",
            meta: { title: "Menu2-1" }
          }
        ]
      },
      {
        path: "/routerManage/menu3",
        name: "Menu3",
        component: () => import("@/views/routerManage/menu3"),
        meta: { title: "Menu3" }
      }
    ]
  }
];
const createRouter = () =>
  new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
