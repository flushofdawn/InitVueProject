<template>
  <!--v-for="( item1 ,index1 ) in navList" -->
  <el-breadcrumb class="navBody"  separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
    //import someComponent from './someComponent'
    export default {
        name: "Nav",
        data(){
            return {
              navList: [],
              msg: "Hello Vue.js"
            }
        },
        watch: {
          '$route.path': function (newVal, oldVal) {
            console.log( newVal );
            console.log( oldVal );
          }
        }
    }
</script>
<style  lang="scss" rel="stylesheet/scss" scoped>
  .navBody{
    padding: 16px 12px;
  }
</style>
