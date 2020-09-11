<template>
  <div
    :class="mouseClass"
    ref="mouse"
  ></div>
</template>

<script>
import { _debounce } from "@/utils";
export default {
  name: "Menu3",
  data () {
    return {
      mouseClass: "mouse hide"
    };
  },
  mounted () {
    //监听鼠标滚动事件
    window.addEventListener("mousemove", this.mouseMove, false);
  },
  methods: {
    mouseMove ($evevt) {
      this.mouseClass = "mouse normal";

      let posX = 0,
        posY = 0; //临时变量
      let event = $evevt || window.$evevt;
      console.log(event)
      if (event.pageX || event.pageY) {
        //获取鼠标指针的当前坐标值
        posX = event.pageX;
        posY = event.pageY;
      } else if (event.clientX || event.clientY) {
        posX =
          event.clientX +
          document.documentElement.scrollLeft +
          document.body.scrollLeft;
        posY =
          event.clientY +
          document.documentElement.scrollTop +
          document.body.scrollTop;
      }
      if (this.$refs.mouse) {
        this.$refs.mouse.style.left = posX + 1 + "px"; //用鼠标指针的x轴坐标和传入偏移值设置对象x轴坐标
        this.$refs.mouse.style.top = posY + 1 + "px";
      }
      this.mouseIcon();
    },
    mouseIcon: _debounce("changeICon", 6000),
    changeICon () {
      this.mouseClass = "mouse wait";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body * {
  cursor: url('../../assets/images/mouseStyle/transparent.png'), default !important;
}
</style>
<style lang="scss" rel="stylesheet/scss" scoped>
.mouse {
  width: 32px;
  height: 32px;
  position: fixed;
  z-index: 100000000000000000;
}
.hide {
  display: none;
}
.normal {
  background: url('../../assets/images/mouseStyle/miku_normal.gif');
}
.active {
  background: url('../../assets/images/mouseStyle/miku_normal.gif');
}
.wait {
  background: url('../../assets/images/mouseStyle/miku_wait.gif');
}
</style>
