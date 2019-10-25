<template>
  <el-container>
    <el-aside class="leftAside" ref="leftAside">
      <el-scrollbar class="colSroll">
        <Menu />
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header><Head/></el-header>
      <el-main>
        <Nav />
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Head from '@/components/index/head/head';
  import Nav from '@/components/index/nav/nav';
  import Menu from '@/components/index/menu/menu';
  import Mainrouterview from '@/components/index/mainrouterview';

  import '@/public/css/common.css'
  export default {
    components: {
      Nav,Menu,Head,Mainrouterview
    },
    /*data () {
        return ''
    },*/
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  .el-header{
    background-color: #292961;
    height: 54px !important;
  }
  .el-container{
    width: 100%;
    height: 100%;
    .leftAside{
      width: auto !important;
      background-color: #f2f2f2;
      border-right: 1px solid #e6e6e6;
      height: 100%;
      overflow:hidden;
      .el-scrollbar{
        height: 100%;
      }
    }
    .el-main{
      overflow-x: hidden;
      padding: 0;
      background: #FFFFFF;
    }
  }
</style>
