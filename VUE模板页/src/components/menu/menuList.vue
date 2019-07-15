<template>
    <div >


     <!-- <el-submenu index='index1'  v-if="item1.permission">
        <template slot="title">
          <i :class="[item1.icon]" ></i>
          <span slot="title">{{ item1.name }}</span>
        </template>
        &lt;!&ndash; 二级菜单循环&ndash;&gt;
        <template  v-for="( item2 ,index2 ) in item1.childList">
          <template v-if="item2.permission">
            <el-submenu index="index1+' - '+index2">
              <span slot="title">{{ item2.name }}</span>
              &lt;!&ndash; 三级菜单循环&ndash;&gt;

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
      </el-menu-item>-->
    </div>
</template>

<script type="text/ecmascript-6" >
  //import someComponent from './someComponent'
  export default {
      name: "MenuList",
      data(){
          return {
          }
      },
      props:['dataList'],
      methods: {

      }
  }
</script>
<style scoped>
</style>
