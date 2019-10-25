<template>
  <div>
    <template v-for="( item , index ) in menuList">
      <el-submenu :index='item.name' v-if="item.childList" :key="item.id">
        <template slot="title">
          <i :class="[item.icon]" ></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <Menulist v-bind:menuList="item.childList" ></Menulist>
      </el-submenu>
      <el-menu-item :index='item.path' v-else :key="item.id" >
        <i :class="[item.icon]"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script type="text/ecmascript-6" >
  //import someComponent from './someComponent'
  export default {
      name: "Menulist",
      data(){
          return {
          }
      },
      props:['menuList'],
      methods: {
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
  /deep/ .el-submenu__title,.el-menu-item{
    border-bottom: 1px solid #e5e5e5;
    padding: 1px;
    height: 45px;
    line-height: 40px;
    border-left: 3px solid #f9f9f9;
  }
  .el-menu-item{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .el-menu--collapse{
    width: 48px;
  }
  /deep/ .el-submenu__title:hover,.el-menu-item:hover{
    border-left: 3px solid #3382af;
  }
  /deep/.el-submenu.is-active .el-submenu__title{
    border-bottom-color: #e6e6e6;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background-color: #FFFFFF;
    border-left: 3px solid #3382af;
  }
  /deep/ .el-tooltip{
    padding: 0 !important;
    padding-left: 10px !important;;
  }
  .el-menu{
    border-right: none;
  }
  .el-menu-item i{
    margin: 0;
    vertical-align: middle;
    width: 24px;
    text-align: center;
  }
  .el-menu--collapse [slot='title']{
    display: none;
  }
</style>
