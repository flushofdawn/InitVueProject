<template>
  <!--v-for="( item1 ,index1 ) in navList" -->
  <el-breadcrumb
    class="navBody"
    separator-class="el-icon-arrow-right"
  >
    <transition-group name="slide-fade">
      <el-breadcrumb-item
        v-for="(item, index) in levelList"
        :to="{ path: item.path }"
        :key="item.path"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
//import someComponent from './someComponent'
export default {
  name: "Breadcrumb",
  data () {
    return {
      navList: [],
      levelList: []
    };
  },
  watch: {
    $route () {
      this.getBreadcrumb();
    }
  },
  mounted () {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb () {
      var matched = this.$route.matched.filter(item => item.name);
      var first = matched[0];
      if (
        first &&
        first.name.trim().toLocaleLowerCase() == "index".toLocaleLowerCase()
      ) {
        matched[0].path = "/";
      }
      this.levelList = matched;
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.navBody {
  line-height: 60px;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  animation: bounce-in 0.6s;
}
.slide-fade-leave-active {
  animation: bounce-out 0.3s;
}
@keyframes bounce-in {
  0% {
    transform: translateX(10px);
    opacity: 0;
  }
  50% {
    transform: translateX(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    transform: translateX(0px);
    opacity: 1;
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
