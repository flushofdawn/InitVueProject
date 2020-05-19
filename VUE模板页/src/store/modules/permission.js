import { generateRoutes } from "@/api/permission"

const state = {
  routes: [],
  addRoutes: []
}

const mutations ={
  SET_TOKEN: (state, token) => {
    state.token = token
  }
};

const actions ={
  generateRoutes({ commit },roleInfo) {
    const { id , role } = roleInfo
    return new Promise((resolve, reject) => {
      generateRoutes(state.token).then(response => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
