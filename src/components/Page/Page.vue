<script setup>
import TextBox from "../TextBox/TextBox.vue";
import toggleAnimate from "./js.js";
import toggleAnimateOut from "./js.js";
</script>

<template>
  <section>
    <div class="bg-container d-flex flex-row">
      <div class="bg-aside"></div>
      <div class="bg-thumb">
        <div class="bg-overlay"></div>
        <div class="bg-img"></div>
      </div>
    </div>
    <div class="content-container position-relative">
      <TextBox />
      <div id="toggle-action" class="more-details position-absolute fadeInLeft">
        <h1 class="more-details-text fw-bold m-0">Explore</h1>
        <div
          class="more-details-sub d-flex flex-row align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#vue-modal"
          v-on:click="toggleAnimate"
        >
          <img src="../../assets/details.svg" />
          <span>More Details</span>
        </div>
      </div>
      <div class="icon-container d-flex flex-column position-absolute">
        <img class="icon-shadow mb-3" src="../../assets/fb.svg" />
        <img class="icon-shadow" src="../../assets/ig.svg" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "_css.scss";
</style>
