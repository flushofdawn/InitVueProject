import { asyncRoutes, constantRoutes } from '@/router';

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations ={
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
};

const actions ={
  generateRoutes({ commit },roleInfo) {
    return new Promise((resolve, reject) => {
      let accessedRoutes;
      console.log( roleInfo );
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roleInfo)
      commit('SET_ROUTES', accessedRoutes)
      resolve( accessedRoutes );
    })
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
