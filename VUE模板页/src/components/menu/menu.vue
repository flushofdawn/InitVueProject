<template>
    <div class="">
      <!-- 一级菜单循环-->
      <div class="" @click="menuClick">
          <i class="el-icon-d-arrow-right"></i>
      </div>
      <el-menu class="el-menu-vertical-demo" v-for="( item1 ,index1 ) in menuList" :key="index1" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
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
                  <el-menu-item :index="toSting(index1,index2,index3)">{{ item3.name }}</el-menu-item>
                </div>
              </el-submenu>
            </div>
            <div v-else="item2.permission">
              <el-menu-item :index="toSting(index1,index2)">{{ item2.name }}</el-menu-item>
            </div>
          </div>
        </el-submenu>
        <el-menu-item :index='toSting(index1)'  v-else="item1.permission">
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
      mounted() {
        this.getMenuList();
      },
      methods: {
        menuClick(){
          var leftAside = this.$emit('leftAside');
          if( this.isCollapse ){
            leftAside.style.cssText = "width:300px";
            this.isCollapse = false
          }else {
            leftAside.style.cssText = "width:65px";
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
</style>
