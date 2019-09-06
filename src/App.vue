<template>
  <!-- contains a layout for both mobile and -->
  <div id="app">
    <RootComponent></RootComponent>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RootComponent from "./components/RootComponent.vue";

@Component({
  components: {
    RootComponent
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
</style>
