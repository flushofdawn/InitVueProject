<template>
    <div class="">
      <!-- 一级菜单循环-->
      <div class="menuBtn" @click="menuClick">
          <i class="el-icon-d-arrow-right"></i>
      </div>
      <el-menu class="menuLen" v-for="( item1 ,index1 ) in menuList"  :router=true :default-active="defaultActive" :key="index1" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu :index='toSting(index1)' v-if="item1.permission">
          <template slot="title">
            <i :class="[item1.icon]" ></i>
            <span slot="title">{{ item1.name }}</span>
          </template>
          <!-- 二级菜单循环 -->
          <div  v-for="( item2 ,index2 ) in item1.childList" :key="index1+'-'+index2" >
            <div v-if="item2.permission">
              <el-submenu :index="toSting(index1,index2)">
                <span slot="title">{{ item2.name }}</span>
                <!-- 三级菜单循环 -->
                <div v-for="( item3 ,index3 ) in item2.childList" :key="index1+'-'+index2+'-'+index3">
                  <el-menu-item :index="item3.path">{{ item3.name }}</el-menu-item>
                </div>
              </el-submenu>
            </div>
            <div v-else="item2.permission">
              <el-menu-item :index="item2.path">{{ item2.name }}</el-menu-item>
            </div>
          </div>
        </el-submenu>
        <el-menu-item :index='item1.path'  v-else="item1.permission">
          <i :class="[item1.icon]"></i>
          <span slot="title">{{ item1.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script type="text/ecmascript-6" >

  import axios from 'axios';
  export default {
      name: "Menu",
      components: {

      },
      data(){
          return {
            menuList:'',
            isCollapse: true
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
          }else {
            this.isCollapse = true
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
          axios.get("../static/data/menu.json", {}).then(function (response) {
            This.menuList = response.data.list;
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
  .el-menu-item{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .menuLen:not(.el-menu--collapse) {
    width: 200px;
  }
  .menuBtn{
    background-color: #FFF;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    font-size: 18px;
    vertical-align: middle;
  }
  .el-menu{
    border-right: none;
  }
</style>
