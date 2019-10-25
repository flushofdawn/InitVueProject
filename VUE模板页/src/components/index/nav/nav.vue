<template>
  <!--v-for="( item1 ,index1 ) in navList" -->
  <el-breadcrumb class="navBody"  separator-class="el-icon-arrow-right">
    <template v-for="( item , index ) in levelList">
      <el-breadcrumb-item :to="{ path: item.path }"> {{ item.meta.title }} </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script>
    //import someComponent from './someComponent'
    export default {
        name: "Nav",
        data(){
            return {
              navList: [],
              levelList: []
            }
        },
        watch: {
          $route() {
            this.getBreadcrumb()
          }
        },
        mounted(){
          this.getBreadcrumb()
        },
        methods: {
          getBreadcrumb (){
            var matched = this.$route.matched.filter(item => item.name);

            var first = matched[0];
            if (first && first.name.trim().toLocaleLowerCase() == 'index'.toLocaleLowerCase()) {
              matched[0].path = '/';
            }
            this.levelList = matched;

          }
        }
    }
</script>
<style  lang="scss" rel="stylesheet/scss" scoped>
  .navBody{
    background-color: #ffffff;
    padding: 16px 12px;
  }
</style>
