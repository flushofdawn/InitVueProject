<template>
  <el-container id="i">
    <el-header><Nav/></el-header>
    <el-container>
      <el-aside class="leftAside">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Nav from '@/components/nav/nav';
  export default {
    components: {
      Nav
    },
    data () {
      return {
        mas: 'Welcome to Your index'
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  .el-container{
    width: 100%;
    height: 100%;
    .leftAside{
      width: 240px !important;
    }
  }
</style>
