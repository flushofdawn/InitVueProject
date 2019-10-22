// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './public/css/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/scss/font-awesome.scss'
import Echarts from 'echarts'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.echarts = Echarts;
Vue.use(Echarts);

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const flag = sessionStorage.getItem('isLogin');
  if( to.path == "/login"  ){
    next();
  }else{
    var address = to.fullPath;
    var trueAddress = to.matched[1].path;

    if ( to.meta.isLogin ){
      if ( flag ){
        if( address == trueAddress ){
          next();
        }else {
          next( trueAddress );
        }
      }else{
        next('/login');
      }
    }else{
      if( address == trueAddress ){
        next();
      }else {
        next( trueAddress );
      }
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
