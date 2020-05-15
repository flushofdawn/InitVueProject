import { login,getInfo } from "@/api/user"
import { getToken,setToken } from "@/utils/tokenOpt"
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
        console.log( "in here" )
        commit('SET_TOKEN', data.token)
        console.log( "in here2" )
        setToken(data.token)
        console.log( "in here3" )
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo({ commit }) {
    console.log( "getInfo - 1" )
    return new Promise((resolve, reject) => {
      console.log( "getInfo - 2" )
      getInfo(state.token).then(response => {

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
