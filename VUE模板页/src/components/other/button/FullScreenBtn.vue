<template>
  <div @click="handleFullScreen">
    <svg-icon :iconClass="iconClass" />
  </div>
</template>

<script>
  export default {
    name: 'handleFullScreen',
    data () {
      return {
        iconClass:"fullScreen"
      }
    },
    methods: {
      // 全屏事件
      handleFullScreen(){
        let element = document.documentElement;
        // 判断是否已经是全屏
        // 如果是全屏，退出
        if (this.fullscreen) {
          this.iconClass = "fullScreen";
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {    // 否则，进入全屏
          this.iconClass = "smallScreen";
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        // 改变当前全屏状态
        this.fullscreen = !this.fullscreen;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
