<template>
    <div class="myHeader">
      <div class="logoDiv">
        <img src="../../public/images/nav/logo.png">
      </div>
    </div>
</template>

<script>
    //import someComponent from './someComponent'
    export default {
        name: "Nav",
        data(){
            return {
                msg: "Hello Vue.js"
            }
        },
    }
</script>
<style  lang="scss" rel="stylesheet/scss" scoped>
  .myHeader{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .logoDiv img{
      margin-top: 2px;
      height: 50px;
    }
  }
</style>
