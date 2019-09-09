<template>
  <div class="plug">
    <!-- my name -->
    <div class="name">
      <h2>Hi I'm Jack</h2>
    </div>
    <!-- about me -->
    <div class="caption">
      <h3>I like to make sofware</h3>
    </div>
    <!-- hire me pls -->
    <div class="hire-me">
      <h2>Hire Me</h2>
      <!-- <h1>Hire</h1>
      <h1>Me</h1> -->
    </div>
    <!-- link to resume -->
    <div class="resume-link">
      <a href="https://www.dropbox.com/s/sjn5vk4ub9muhwi/resumev1.ai?dl=0" target="_blank">My Resume</a>
    </div>
    <div class="about-site">
      <h3>Find out about my site</h3>
    </div>
  </div>
</template>

<style lang="less">
div.plug {
  /** shared stuff */
  .name {
    font-size: 200%;
  }
  .caption {
  }
  .hire-me {
    font-size: 400%;
  }
  .resume-link {
  }

  /** mobile screens */
  @media screen and (max-width: 768px) {
    // just flexbox on mobile
    display: flex;
    flex-direction: column;
    .name {
    }
    .caption {
    }
    .hire-me {
    }
    .resume-link {
    }
  }

  /** desktop screens */
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: repeat(1/4, 4);
    grid-template-areas:
      "NAME HIRE"
      "CAP HIRE"
      "ABOUT RESUME";
    .name {
      grid-area: NAME;
    }
    .caption {
      grid-area: CAP;
    }
    .hire-me {
      grid-area: HIRE;
      h1 {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
    .resume-link {
      grid-area: RESUME;
    }
    .aboute-site {
      grid-area: ABOUT;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Plug extends Vue {}
</script>