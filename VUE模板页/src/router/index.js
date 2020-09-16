import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/components/layout";
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
        meta: { title: "Dashboard", icon: "dashboard" }
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    hidden: true,
    component: () => import("@/components/errorPages/error404"),
    meta: {
      title: "404"
    }
  }
];
export const asyncRoutes = [
  {
    path: "/routerManage",
    name: "routerManage",
    component: Layout,
    redirect: "/routerManage/menu3",
    meta: { title: "路由管理", icon: "routesMg" },
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
  },
  {
    path: "/form",
    component: Layout,
    redirect: "/form/index",
    meta: {
      title: "表单"
    },
    children: [
      {
        path: "/form/index",
        name: "Form",
        component: () => import("@/views/form"),
        meta: { title: "表单", icon: "form" }
      }
    ]
  },
  { path: "*", redirect: "/404", hidden: true }
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
