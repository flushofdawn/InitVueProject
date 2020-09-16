<template>
  <div class="">
    <div :class="logo">
      <i></i><span>Stories</span>
    </div>
    <el-scrollbar class="colSroll">
      <el-menu
        class="menuLen"
        :unique-opened=true
        :router=true
        :default-active="defaultActive"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <Menulist
          :menuList="menuList"
          :round="0"
        ></Menulist>
        <!--<div class="menuBtn" @click="menuClick">
            <i :class="shrinkIcon" ></i>
          </div>-->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script type="text/ecmascript-6" >
import Menulist from '@/components/layout/menu/menuList';

export default {
  name: "Menu",
  components: {
    Menulist
  },
  data () {
    return {
      menuList: '',
      shrinkIcon: 'fa fa-angle-double-right'
    }
  },
  computed: {
    //获取当前路由渲染页面菜单
    defaultActive () {
      return this.$route.path;
    },
    isCollapse () {
      return this.$store.state.user.menuStatus
    },
    logo () {
      if (this.$store.state.user.menuStatus) {
        return "logo noFont"
      } else {
        return "logo"
      }

    }
  },
  created: function () {

  },
  mounted () {
    this.getMenuList();
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    getMenuList: function () {
      this.menuList = this.$store.getters.permission_routes
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
/deep/ .el-menu--collapse > div > .el-submenu > .el-submenu__title:hover {
  background: linear-gradient(
    to right,
    rgba(130, 122, 243, 1) 0%,
    rgba(180, 122, 243, 1) 100%
  ) !important;
}
/deep/ .el-menu--collapse > div > .el-submenu > .el-submenu__title:hover i {
  color: white;
}
/deep/ .el-menu--collapse > div > .is-opened {
  background: linear-gradient(
    to right,
    rgba(130, 122, 243, 1) 0%,
    rgba(180, 122, 243, 1) 100%
  ) !important;
}
/deep/ .el-submenu .el-submenu__icon-arrow {
  font-weight: bold;
}
/deep/ .menuLen > div > .el-submenu > .el-submenu__title:hover {
  background: #ecf5ff;
}
/deep/ .menuLen > div > .el-submenu > .el-submenu__title {
  font-size: 15px;
}
/deep/ .menuLen > div > .is-opened > .el-submenu__title:hover,
/deep/ .menuLen > div > .is-active > .el-submenu__title:hover {
  background: linear-gradient(
    to right,
    rgba(130, 122, 243, 1) 0%,
    rgba(180, 122, 243, 1) 100%
  );
}
/deep/ .menuLen > div > .is-opened > .el-submenu__title,
/deep/ .menuLen > div > .is-opened > .el-submenu__title i,
/deep/ .menuLen > div > .is-active > .el-submenu__title,
/deep/ .menuLen > div > .is-active > .el-submenu__title i {
  color: white !important;
}
/deep/ .menuLen > div > .is-active > .el-submenu__title {
  background: linear-gradient(
    to right,
    rgba(130, 122, 243, 1) 0%,
    rgba(180, 122, 243, 1) 100%
  );
}
/deep/ .menuLen > div > .is-opened {
  border-radius: 15px;
  overflow: hidden;
}
/deep/ .menuLen > div > .is-opened > .el-submenu__title {
  background: linear-gradient(
    to right,
    rgba(130, 122, 243, 1) 0%,
    rgba(180, 122, 243, 1) 100%
  );
}
/deep/ .menuLen > div > .is-opened > .el-menu {
  border-radius: 0 0 12px 12px;
  background: #efeefd !important;
}
/deep/ .el-menu {
  padding: 0;
  background-color: transparent !important;
}
.colSroll {
  flex: 1;
}
.logo {
  width: 210px;
  height: 77px;
  position: relative;
  padding-left: 70px;
  font-size: 28px;
  line-height: 77px;
  font-family: 'Muli', sans-serif;
  transition: 0.6s all;
  white-space: nowrap;
  i {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 15px;
    top: 12px;
    background: url('../../../assets/images/geass.png') no-repeat -180px -5px;
    background-size: 300px;
  }
}
.noFont {
  width: 0;
  span {
    display: none;
  }
}
.menuLen {
  margin: 0 15px;
}
.menuLen:not(.el-menu--collapse) {
  width: 250px;
}
.el-menu--collapse {
  width: 50px;
}
.menuBtn {
  line-height: 24px;
  height: 26px;
  text-align: center;
  font-size: 18px;
  position: relative;
  i {
    font-size: 14px;
    padding: 0 4px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    border-radius: 45%;
    color: #aaa;
    vertical-align: baseline;
    background-color: #ffffff;
    z-index: 10;
  }
}
.menuBtn:before {
  content: '';
  display: inline-block;
  height: 0;
  position: absolute;
  left: 8px;
  right: 8px;
  top: 14px;
}
.el-menu {
  border-right: none;
}
/deep/ .el-submenu__title {
  padding-left: 0 !important;
}
</style>
