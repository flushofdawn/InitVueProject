<template>
  <div class="nav">
    <el-tag
      :key="tag.name"
      v-for="tag in dynamicTags"
      :closable="tag.closeBtn"
      size="small"
      :disable-transitions="true"
      @close="handleClose(tag)"
      @click="changeView(tag)"
    >
      {{ tag.name }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      dynamicTags: [{ name: "Dashboard", path: "", closeBtn: false }]
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    changeView(tag) {
      console.log(tag);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.nav {
  height: 34px;
  background: white;
  border: 1px solid black;
  .el-tag {
    margin: 4px 10px 4px 4px;
  }
}
</style>
