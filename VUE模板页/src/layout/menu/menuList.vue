<template>
  <div>
    <!--round-->
    <template v-for="( item , index ) in menuList">
      <template v-if="!item.hidden">
        <el-submenu :index='item.path' v-if="item.children" :key="item.id" >
          <div slot="title" :style="{paddingLeft:13*(round+1)+'px'}" >
            <i :class="[ item.meta.icon || '']" ></i>
            <span slot="title">{{ item.meta.title }}</span>
          </div>
          <Menulist :menuList="item.children" :round="round+1" ></Menulist>
        </el-submenu>
        <el-menu-item :index='item.path' v-waves:{type:center} v-else :key="item.id" :style="{paddingLeft:13*(round+1)+'px'}" >
          <i :class="[item.meta.icon || '']"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script type="text/ecmascript-6" >
  //import someComponent from './someComponent'
  import waves from '@/directive/wave'

  export default {
      name: "Menulist",
      directives: {
        waves
      },
      data(){
          return {
          }
      },
      props:['menuList','round'],
      methods: {

      },
      mounted() {

      },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .menuLen>div>.el-menu-item,.menuLen>div>.el-submenu{
    font-size: 15px;
    border-radius: 15px;
    margin-bottom: 8px;
    overflow: hidden;
  }
  .menuLen>div>.is-active:not(.el-submenu){
    background: linear-gradient(to right, rgba(130, 122, 243, 1) 0%, rgba(180, 122, 243, 1) 100%);
    color: #FFF !important;
  }
  .menuLen>div>.is-opened>.el-menu .el-menu-item:hover,.menuLen>div>.is-opened>.el-menu .el-submenu__title:hover{
    color: #827af3;
    background: #e0defc !important;
  }
  .menuLen>div>.is-opened>.el-menu .is-active:not(.el-submenu){
    color: #827af3;
    background: #e0defc !important;
  }
  .menuLen>div>.is-opened>.el-menu .el-menu-item:hover i,.menuLen>div>.is-opened>.el-menu .el-submenu__title:hover i{
    color: #827af3;
  }
  .menuLen>div>.is-opened>.el-menu .el-menu-item:hover span,.menuLen>div>.is-opened>.el-menu .el-submenu__title:hover span{
    color: #827af3;
  }
  /deep/ .el-submenu__title,.el-menu-item{
    height: 48px;
    line-height: 43px;
  }
  .el-menu-item{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .el-menu--collapse{
    width: 48px;
  }

  /*.el-menu-item:focus, .el-menu-item:hover{
    background-color: rgba(130, 122, 243, 1);
    color: #FFF !important;
    border-radius: 15px;
  }*/
  /deep/ .el-tooltip{
    padding: 0 !important;
    padding-left: 13px !important;
  }
  .el-menu{
    border-right: none;
  }
  .el-menu-item .fa,.el-submenu .fa{
    margin-right: 5px;
    vertical-align: middle;
    width: 24px;
    text-align: center;
  }
  .el-menu-item .fa,.el-submenu .fa{
    font-size: 18px;
  }
  .el-menu-item [class^=el-icon-],.el-submenu [class^=el-icon-]{
    font-size: 20px;
  }
  .el-menu--collapse [slot='title']{
    display: none;
  }
  .el-menu--vertical .el-menu-item{
    padding-left: 20px !important;
  }
  .el-menu--vertical .el-submenu__title>div{
    padding-left: 0 !important;
  }
</style>
