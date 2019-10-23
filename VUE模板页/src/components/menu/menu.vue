<template>
    <div class="">
      <el-scrollbar>
        <el-menu class="menuLen" :unique-opened=true  :router=true   :default-active="defaultActive"   @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <Menulist v-bind:menuList="menuList" ></Menulist>
        </el-menu>
        <div class="menuBtn" @click="menuClick">
          <i :class="shrinkIcon" ></i>
        </div>

      </el-scrollbar>
    </div>
</template>

<script type="text/ecmascript-6" >
  import Menulist from '@/components/menu/menuList';
  import axios from 'axios';
  export default {
      name: "Menu",
      components: {
        Menulist
      },
      data(){
          return {
            menuList:'',
            isCollapse: true,
            shrinkIcon:'fa fa-angle-double-right'
          }
      },
      computed: {
      //获取当前路由渲染页面菜单
        defaultActive() {
          return this.$route.path;
        }
      },
      mounted() {
        this.getMenuList();
      },
      methods: {
        menuClick(){
          if( this.isCollapse ){
            this.isCollapse = false
            this.shrinkIcon = "fa fa-angle-double-left"
          }else {
            this.isCollapse = true
            this.shrinkIcon = "fa fa-angle-double-right"
          }
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        getMenuList:function(){
          var This=this;
          axios.get("/static/data/menu.json", {}).then(function (response) {

            This.menuList = response.data.list;
            console.log(  This.menuList )
          })
        },
        toSting:function(...arg){
          let str='';
          for( var i=0;i<arg.length;i++ ){
            str += String( arg[i] ) + '-';
          }
          if( arg.length>0 ){
            str = str.substr(0, str.length-1);
          }
          return str;
        }
      }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  /deep/ .el-menu{
    padding: 0 !important;
    background-color: #f9f9f9;
  }
  .menuLen:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu--collapse{
    width: 48px;
  }
  .menuBtn{
    line-height: 24px;
    height: 26px;
    text-align: center;
    font-size: 18px;
    position: relative;
    i{
      font-size: 14px;
      padding:0 4px;
      display: inline-block;
      position: relative;
      cursor: pointer;
      border: 1px solid #bbb;
      border-radius: 45%;
      color: #aaa;
      vertical-align: baseline;
      background-color: #FFFFFF;
      z-index: 10;
    }
  }
  .menuBtn:before{
    content: "";
    display: inline-block;
    height: 0;
    border-top: 1px solid #e0e0e0;
    position: absolute;
    left: 8px;
    right: 8px;
    top: 14px;
  }
  .el-menu{
    border-right: none;
  }
</style>
