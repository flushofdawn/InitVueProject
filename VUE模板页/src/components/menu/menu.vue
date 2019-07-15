<template>
    <div class="">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <!-- 一级菜单循环-->
      <el-menu class="el-menu-vertical-demo" v-for="( item1 ,index1 ) in menuList" @open="handleOpen" @close="handleClose" >
        <el-submenu index='index1'  v-if="item1.permission">
          <template slot="title">
            <i :class="[item1.icon]" ></i>
            <span slot="title">{{ item1.name }}</span>
          </template>
          <!-- 二级菜单循环 -->
          <template  v-for="( item2 ,index2 ) in item1.childList">
            <template v-if="item2.permission">
              <el-submenu index="index1+' - '+index2">
                <span slot="title">{{ item2.name }}</span>
               <!-- &lt;!&ndash; 三级菜单循环&ndash;&gt;-->
                <template v-for="( item3 ,index3 ) in item2.childList">
                  <el-menu-item index="index1+' - '+index2+' - '+index3">{{ item3.name }}</el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else="item2.permission">
              <el-menu-item index="index1+' - '+index2">{{ item2.name }}</el-menu-item>
            </template>
          </template>
        </el-submenu>
        <el-menu-item index='index1'  v-else="item1.permission">
          <i :class="[item1.icon]"></i>
          <span slot="title">{{ item1.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script type="text/ecmascript-6" >
  //import someComponent from './someComponent'
  import axios from 'axios';
  import MenuList from '@/components/menu/menuList';
  export default {
      name: "Menu",
      components: {
        MenuList
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
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        getMenuList:function(){
          var This=this;
          axios.get("../static/data/menu.json", {}).then(function (response) {
            console.log(  response.data.list )
            This.menuList = response.data.list;
          })
        }
      }
  }
</script>
<style scoped>
</style>
