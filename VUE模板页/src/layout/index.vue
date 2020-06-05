<template>
  <el-container>
    <el-aside class="leftAside" ref="leftAside">
      <Menu />
    </el-aside>
    <el-container>
      <el-scrollbar class="pageScroll">
        <el-header><Head/></el-header>
        <el-main>
          <router-view :key="key"></router-view>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
  import Head from '@/layout/head';
  import Menu from '@/layout/menu';

  import '@/public/css/common.css'
  export default {
    name: 'Layout',
    components: {
      Menu,Head
    },
    computed: {
      key() {
        return this.$route.path
      }
    },
    mounted: function () {

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  /deep/ .el-menu-item,/deep/ .el-submenu__title{
    color: #777D74;
  }

  .el-header{
    height: 77px !important;
    background: white;
    padding: 0;
  }
  .el-container{
    width: 100%;
    height: 100%;
    .leftAside{
      width: auto !important;
      background-color: #fff;
      height: 100%;
      box-shadow: 0px 0px 25px 0px rgba(45, 69, 95, 0.1);
      z-index: 10;
      div{
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }
    .el-main{
      overflow-x: hidden;
      padding: 0;
      background: #efeefd;
    }
  }
  .pageScroll{
    width: 100%;
  }
  /deep/ .el-scrollbar__wrap{
    overflow-x: hidden !important;
  }
</style>
