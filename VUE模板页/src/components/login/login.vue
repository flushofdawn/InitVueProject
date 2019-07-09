<template>
  <div>
    <el-container>
      <el-header><Nav/></el-header>
      <el-main>
         <div class="loginDiv">
            <>
         </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Nav from '@/components/nav/nav';
  export default {
    name: 'Login',
    components: {
      Nav
    },
    data () {
      return {
        msg: 'login'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  $backgroundColor: #000;
  .el-header{
    background-color: $backgroundColor;
  }
  .el-main{
    padding: 0;
  }
  .loginDiv{
    width: 480px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #3a8ee6;
  }
</style>
