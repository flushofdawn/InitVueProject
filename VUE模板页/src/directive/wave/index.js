/**
 * Created by 朱颜辞镜花辞树 on 2020/4/1.
 */
import waves from "./waves"

const install = function(Vue) {
  Vue.directive('waves', waves)
}

if (window.Vue) {
  window.waves = waves
  Vue.use(install); // eslint-disable-line
}
waves.install = install;

export default waves
