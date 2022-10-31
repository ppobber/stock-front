<template>
  <div id="app">
    <my-content></my-content>
    <router-view></router-view>
  </div>
</template>

<script>

import toplist from "./components/common/toplist";

export default {
  name: 'App',
  components: {
    'my-content': toplist,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
