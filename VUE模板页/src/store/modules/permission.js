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
    return new Promise((resolve, reject) => {
      generateRoutes( roleInfo ).then(response => {
        resolve( response.data );
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
