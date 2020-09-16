/**
 * Created by 朱颜辞镜花辞树 on 2020/4/24.
 */
export default {
  watch: {
    /* 监听getSidebarFold变化，解决echarts容器变化，重新渲染 setTimeout时间必须设置，且不能太短 */
    "$store.state.user.menuStatus"() {
      setTimeout(() => {
        this.resize();
      }, 350);
    }
  }
};
