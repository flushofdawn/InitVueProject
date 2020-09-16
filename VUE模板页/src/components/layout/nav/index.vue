<template>
  <div class="nav">
    <ScrollBar>
      <el-tag
        :key="tag.name"
        v-for="tag in dynamicTags"
        :closable="tag.closeBtn"
        size="small"
        :class="tag.isActive?'isActive':''"
        :disable-transitions="true"
        effect="plain"
        @close="handleClose(tag)"
        @click="changeView(tag,$event)"
      >
        {{ tag.name }}
      </el-tag>
    </ScrollBar>
  </div>
</template>

<script>
import ScrollBar from '../../scrollBar'
export default {
  name: "Nav",
  components: {
    ScrollBar
  },
  data () {
    return {
      dynamicTags: []
    };
  },
  watch: {
    $route (to, from) {
      const tag = {
        name: to.meta.title,
        path: to.path,
        isActive: true,
        closeBtn: true
      }
      this.$store.commit("tagView/ADD_TAG", tag);
    }
  },
  mounted: function () {
    const tag = {
      name: this.$route.meta.title,
      path: this.$route.path,
      isActive: true,
      closeBtn: true
    }
    this.$store.commit("tagView/ADD_TAG", tag);
    this.dynamicTags = this.$store.state.tagView.tag
  },
  methods: {
    handleClose (tag) {
      this.$store.commit("tagView/DEL_TAG", tag);
      if (tag.isActive) {
        this.$router.push({ path: this.$store.state.tagView.tag[this.$store.state.tagView.tag.length - 1].path });
      }
    },
    changeView (tag, e) {
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width 
      const left = e.clientX - offsetLeft  // 15: margin right

      console.log(`${offsetLeft}-${offsetWidth}-${left}`)
      if (!tag.isActive) {
        this.$router.push({ path: tag.path });
        this.$store.commit("tagView/CHANGE_TAG", tag);
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.nav {
  height: 32px;
  background: white;
  .el-tag {
    margin: 4px;
  }
  .el-tag:hover {
    cursor: pointer;
  }
  .isActive {
    background: #efeefd;
  }
  border-bottom: 1px solid #d8dce5;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
/deep/ .nav_scroll > .el-scrollbar__wrap {
  overflow-y: hidden !important;
}
/deep/ .nav_scroll > .el-scrollbar__wrap > .el-scrollbar__view {
  white-space: nowrap;
}
</style>
