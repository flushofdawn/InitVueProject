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
</style>
