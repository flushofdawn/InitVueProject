const state ={
  token:"",
  name:"",
  avatar:"",
  roles:"",
};
const mutations ={
  SET_TOKEN: (state, token) => {
    state.token = token
  },
};
const actions ={
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        console.log( response )
        commit('SET_TOKEN', data.token)
       /* setToken(data.token)*/
        resolve()
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
