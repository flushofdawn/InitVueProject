import { login,getInfo } from "@/api/user"
import { getToken,setToken } from "@/utils/tokenOpt"
const state ={
  id:"",
  token:getToken(),
  name:"",
  avatar:"",
  role:"",
  menuStatus: false,
};
const mutations ={
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLE: (state, role) => {
    state.role = role
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
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        commit('SET_ID', data.id)
        commit('SET_NAME', data.name)
        commit('SET_AVATAR', data.avatar)
        commit('SET_ROLE', data.role)
        console.log( data )
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
