<script setup>
import DisplayBar from "./components/DisplayBar.vue";

const imgSrc = (src) => {
  const path = `./assets/img/${src}.svg`;
  const modules = import.meta.globEager("./assets/img/*.svg");
  return modules[path].default;
};
</script>

<template>
  <header class="text-center text-white text-xl pt-32 pb-20 tracking-custom">
    <h1>WE'RE LAUNCHING SOON</h1>
  </header>
  <main class="flex justify-evenly md:justify-center">
    <DisplayBar />
  </main>
  <footer
    class="
      footer
      fixed
      bottom-0
      w-full
      h-40
      md:h-60
      bg-repeat-round
      flex
      justify-center
      items-center
    "
  >
    <a href="#"
      ><img class="icon" :src="imgSrc('icon-facebook')" alt="facebook"
    /></a>
    <a href="#"
      ><img class="icon mx-8" :src="imgSrc('icon-pinterest')" alt="pinterest"
    /></a>
    <a href="#"
      ><img class="icon" :src="imgSrc('icon-instagram')" alt="instagram"
    /></a>
  </footer>
</template>

<style>
.footer {
  background-image: url("./assets/img/pattern-hills.svg");
}
.icon:hover {
  filter: invert(53%) sepia(37%) saturate(4373%) hue-rotate(314deg)
    brightness(107%) contrast(96%);
}
</style>
