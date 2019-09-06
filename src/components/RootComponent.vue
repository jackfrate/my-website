/**
 * Root component for the website
 * Determines if we are in mobile mode or not
 */
<template>
  <div class="root">
    <div v-if="isMobile() === true" class="app-mobile">
      <p>MOBILE</p>
    </div>
    <div v-else class="app-desktop">
      <p>DESKTOP</p>
    </div>
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