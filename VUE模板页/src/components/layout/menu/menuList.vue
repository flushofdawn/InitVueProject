<template>
  <div>
    <!--round-->
    <template v-for="( item , index ) in menuList">
      <template v-if="!item.hidden">
        <template v-if="(item.children == undefined )">
          <el-menu-item
            :index='item.path'
            v-waves:{type:center}
            :key="item.path"
            :style="{paddingLeft:13*(round+1)+'px'}"
          >
            <svg-icon :iconClass="item.meta.icon || ''" />
            <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
        <template v-else-if="(item.children.length == 1 && round==0 && item.children.children == undefined )">
          <el-menu-item
            :index='item.children[0].path'
            v-waves:{type:center}
            :key="item.children[0].path"
            :style="{paddingLeft:13*(round+1)+'px'}"
          >
            <svg-icon :iconClass="item.children[0].meta.icon || ''" />
            <span slot="title">{{ item.children[0].meta.title }}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu
            :index='item.path'
            :key="item.path"
          >
            <div
              slot="title"
              :style="{paddingLeft:13*(round+1)+'px'}"
            >
              <svg-icon :iconClass="item.meta.icon || ''" />
              <span slot="title">{{ item.meta.title }}</span>
            </div>
            <Menulist
              :menuList="item.children"
              :round="round+1"
            ></Menulist>
          </el-submenu>
        </template>
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
  data () {
    return {
    }
  },
  props: ['menuList', 'round'],
  methods: {

  },
  mounted () {

  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.menuLen > div > .el-menu-item,
.menuLen > div > .el-submenu {
  font-size: 15px;
  border-radius: 15px;
  margin-bottom: 8px;
  overflow: hidden;
}
.menuLen > div > .is-active:not(.el-submenu) {
  background: linear-gradient(
    to right,
    rgba(130, 122, 243, 1) 0%,
    rgba(180, 122, 243, 1) 100%
  );
  color: #fff !important;
}
.menuLen > div > .is-active:not(.el-submenu) svg {
  color: #fff !important;
}
.menuLen > div > .is-opened > .el-menu .el-menu-item:hover,
.menuLen > div > .is-opened > .el-menu .el-submenu__title:hover {
  color: #827af3;
  background: #e0defc !important;
}
.menuLen > div > .is-opened > .el-menu .is-active:not(.el-submenu) {
  color: #827af3;
  background: #e0defc !important;
}
.menuLen > div > .is-opened > .el-menu .el-menu-item:hover i,
.menuLen > div > .is-opened > .el-menu .el-submenu__title:hover i {
  color: #827af3;
}
.menuLen > div > .is-opened > .el-menu .el-menu-item:hover span,
.menuLen > div > .is-opened > .el-menu .el-submenu__title:hover span {
  color: #827af3;
}
/deep/ .el-submenu__title,
.el-menu-item {
  height: 48px;
  line-height: 43px;
}
.el-menu-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.el-menu--collapse {
  width: 48px;
}
/deep/ .el-tooltip {
  padding: 0 !important;
  padding-left: 13px !important;
}
.el-menu {
  border-right: none;
}
.el-menu-item svg,
.el-submenu svg {
  margin-right: 5px;
  vertical-align: middle;
  width: 24px;
  text-align: center;
}
.el-menu-item svg,
.el-submenu svg {
  font-size: 18px;
}
.el-menu--collapse [slot='title'] {
  display: none;
}
.el-menu--vertical .el-menu-item {
  padding-left: 20px !important;
}
.el-menu--vertical .el-submenu__title > div {
  padding-left: 0 !important;
}
</style>
