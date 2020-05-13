import { login } from "@/api/user.js"
import { getToken,setToken } from "@/utils/tokenOpt.js"
const state ={
  token:getToken(),
  name:"",
  avatar:"",
  roles:"",
  menuStatus: false,
};
const mutations ={
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  Set_Menu_Status:(state) => {
    if( state.menuStatus ){
      state.menuStatus = false;
    }else{
      state.menuStatus = true;
    }
  },
};
const actions ={
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
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
