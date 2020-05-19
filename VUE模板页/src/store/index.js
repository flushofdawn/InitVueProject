/**
 * Created by 朱颜辞镜花辞树 on 2020/4/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)


const menuModel = {
  state: {
    isCollapse: false,
    logoClass:"logo",
    unfoldIcon:"el-icon-s-fold"
  },
  mutations: {
    //所有mutations中的方法的第一个参数一定是state变量，用来进行对state中的状态的操作
    //第二个参数是可选参数，用于调用该 mutations 方法的时候传参
    menuShow (state , Boolean ) {
      state.isCollapse = Boolean;
      if( Boolean ){
        state.logoClass = "logo noFont";
        state.unfoldIcon = "el-icon-s-unfold";
      }else{
        state.logoClass = "logo";
        state.unfoldIcon = "el-icon-s-fold";
      }
    }
  }
}

const loginModel = {
  state: {
    isLogin: false,
  },
  mutations: {
    //所有mutations中的方法的第一个参数一定是state变量，用来进行对state中的状态的操作
    //第二个参数是可选参数，用于调用该 mutations 方法的时候传参
    menuShow (state , Boolean ) {
      state.isCollapse = Boolean;
      if( Boolean ){
        state.logoClass = "logo noFont";
        state.unfoldIcon = "el-icon-s-unfold";
      }else{
        state.logoClass = "logo";
        state.unfoldIcon = "el-icon-s-fold";
      }
    }
  }
}


const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
console.log( modules );
const store = new Vuex.Store({
  modules,
  getters
  /*modules: {
    menu: menuModel,
    login:loginModel,
  }*/
})
export default store
