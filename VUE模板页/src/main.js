// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import store from '@/store'
import router from './router'

import './public/css/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/*字体图标*/
import 'font-awesome/scss/font-awesome.scss'
import '@/icons'

import Echarts from 'echarts'
import axios from 'axios'
import qs from 'qs'

import { mockXHR } from './mock'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}

import './permission'

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$echarts = Echarts;
Vue.use(Echarts);

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
