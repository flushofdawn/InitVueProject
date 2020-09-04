import { asyncRoutes, constantRoutes } from "@/router";
/* 判断角色权限 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}
/* 过滤异步加载的路由 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}
/* 过滤同步加载的路由 */
export function filteConstantRoutes(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filteConstantRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}
const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    let conRoutes = filteConstantRoutes(constantRoutes);
    state.routes = conRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }, roleInfo) {
    return new Promise((resolve, reject) => {
      let accessedRoutes;
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roleInfo);
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
