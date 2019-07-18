// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './public/css/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs

router.beforeEach((to, from, next) => {
  console.log( 1 );
  const flag = sessionStorage.getItem('isLogin');
  if( to.path == "/login"  ){
    next();
  }else{
    if ( to.meta.isLogin ){
      if ( flag ){
        next();
      }else{
        next({
          path: "/login"
        });
      }
    }else{
      next();
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
