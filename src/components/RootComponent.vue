/**
 * Root component for the website
 * Determines if we are in mobile mode or not
 */
<template>
  <div class="root">
    <div v-if="isMobile()" class="app-mobile"></div>
    <div v-else class="app-desktop"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class RootComponent extends Vue {
  /**
   * checks if the app is in mobile or not
   */
  public isMobile(): boolean {
    return window.length < 966;
  }
}
</script>