<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script> 
export default {
  name: "App",
};
</script>

<style>
body {
  padding: 0;
  margin: 0 auto;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
