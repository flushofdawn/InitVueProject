<template>
  <div>
    <router-view :key="key"/>
  </div>
</template>

<script>
  export default {
    name: 'Routerviewmodal',
    data () {
      return { }
    },
    methods: {
      key(){
        return this.$route.path
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
