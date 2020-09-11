// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import router from "./router";
import store from "./store";
import { Message } from "element-ui";

import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

import { getToken } from "@/utils/tokenOpt";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

//白名单 不用token可以直接访问的页面
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const hasToken = getToken();
  if (hasToken) {
    if (to.path == "/login") {
      next();
    } else {
      const hasRoles = store.getters.role && store.getters.role.length > 0;
      if (hasRoles) {
        next();
      } else {
        const roleInfo = await store.dispatch("user/getInfo");
        const accessRoutes = await store.dispatch(
          "permission/generateRoutes",
          roleInfo
        );
        router.addRoutes(accessRoutes);
        next({ ...to, replace: true });
      }
    }
  } else {
    if (whiteList.indexOf(to.path) === -1) {
      next({ path: "/login" });
    } else {
      next();
      NProgress.done();
    }
  }
});
router.afterEach(() => {
  NProgress.done();
});
