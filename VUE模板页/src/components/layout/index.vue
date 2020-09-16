<template>
  <el-container>
    <el-aside
      class="leftAside"
      ref="leftAside"
    >
      <Menu />
    </el-aside>
    <el-container class="rightContain">
      <el-scrollbar class="pageScroll">
        <el-main>
          <el-header>

            <Head />
            <Nav />
          </el-header>
          <keep-alive>
            <router-view :key="key"></router-view>
          </keep-alive>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
import Head from "@/components/layout/head";
import Menu from "@/components/layout/menu";
import Nav from "@/components/layout/nav";

import "@/assets/css/common.css";
export default {
  name: "Layout",
  components: {
    Menu,
    Head,
    Nav
  },
  computed: {
    key () {
      return this.$route.path;
    }
  },
  mounted: function () { }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
/deep/ .el-menu-item,
/deep/ .el-submenu__title {
  color: #777d74;
}
.rightContain {
  position: relative;
  .el-header {
    width: 100%;
    background: white;
    padding: 0;
    position: absolute;
    z-index: 1;
    top: 0;
  }
}
.el-container {
  width: 100%;
  height: 100%;
  .leftAside {
    width: auto !important;
    background-color: #fff;
    height: 100%;
    box-shadow: 0px 0px 25px 0px rgba(45, 69, 95, 0.1);
    z-index: 100;
    div {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
  .el-main {
    overflow-x: hidden;
    padding: 0;
    background: #efeefd;
    padding-top: 92px;
  }
}
.pageScroll {
  min-height: 100%;
  width: 100%;
  position: relative;
  z-index: 11;
}
/deep/ .pageScroll > .el-scrollbar__wrap {
  overflow-x: hidden !important;
}
</style>
