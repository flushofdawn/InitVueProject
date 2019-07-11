<template>
    <div class="myHeader">{{msg}}</div>
    <!--<someComponent></someComponent>-->
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
<style scoped>
  .myHeader{
    width: 100%;
    background: #42b983;
  }
</style>
