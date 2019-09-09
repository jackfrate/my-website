<template>
  <div id="app">
    <Plug></Plug>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Plug from "./views/Plug.vue";

@Component({
  components: {
    Plug
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// the grid styling goes under here
</style>
