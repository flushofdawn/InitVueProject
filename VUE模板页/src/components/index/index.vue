<template>
  <el-container id="i">
    <el-header><Nav/></el-header>
    <el-container>
      <el-aside class="leftAside" ref="leftAside">
        <el-scrollbar class="colSroll">
          <Menu />
        </el-scrollbar>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Nav from '@/components/nav/nav';
  import Menu from '@/components/menu/menu';
  import '@/public/css/common.css'
  export default {
    components: {
      Nav,Menu
    },
    /*data () {
        return ''
    },*/
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  .el-container{
    width: 100%;
    height: 100%;
    .leftAside{
      width: auto !important;
      height: 100%;
      overflow:hidden;
      .el-scrollbar{
        height: 100%;
      }
    }
  }
</style>
