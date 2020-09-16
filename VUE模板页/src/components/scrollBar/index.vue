<template>
  <el-scrollbar
    ref="scrollContainer"
    class="nav_scroll"
    @wheel.native.prevent="handleScroll"
  >
    <slot />
  </el-scrollbar>
</template>

<script>
export default {
  name: 'ScrollBar',
  computed: {
    scrollWrapper () {
      return this.$refs.scrollContainer.$refs.wrap
    }
  },
  /* mounted () {
    console.log(this.scrollWrapper)
    this.scrollWrapper.addEventListener('scroll', this.menuabc, true)
  },
  destroyed () {
    this.scrollWrapper.removeEventListener('scroll', this.menuabc, true)
  }, */
  methods: {
    handleScroll (e) {
      const eventDelta = -e.wheelDelta || e.deltaY * 40
      console.log(eventDelta)
      const $scrollWrapper = this.scrollWrapper
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
    },
    /* menuabc () {
    }, */
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
/deep/ .nav_scroll > .el-scrollbar__wrap {
  overflow-y: hidden !important;
}
.nav_scroll {
}
</style>
