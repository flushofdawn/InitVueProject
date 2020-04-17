/**
 * Created by 朱颜辞镜花辞树 on 2020/4/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
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

const store = new Vuex.Store({
  modules: {
    menu: menuModel,
  }
})
export default store
