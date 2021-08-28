<script setup>
import { defineProps, watch, ref } from "vue";
const props = defineProps({
  countNum: {
    type: String,
    default: "00",
  },
  remark: {
    type: String,
    default: "",
  },
});

const changeStatus = ref(false);
const changeStatus2 = ref(false);

watch(
  () => props.countNum,
  () => {
    changeStatus.value = true;
    setTimeout(() => {
      changeStatus.value = false;
      changeStatus2.value = true;
      setTimeout(() => {
        changeStatus2.value = false;
      }, 200);
    }, 200);
  },
);
</script>

<template>
  <div class="text-center">
    <div
      class="md:text-6xl w-16 md:w-24 md:mx-4 text-red-soft text-4xl relative"
    >
      <div
        :class="[
          'bg-blue-desaturated py-4 md:py-6 rounded-md bg-opacity-60 transition',
          changeStatus2 && 'bg-blue-grayish',
        ]"
      ></div>
      <div
        :class="[
          'bg-blue-desaturated py-4 md:py-6 rounded-md transition',
          changeStatus && 'bg-blue-grayish',
        ]"
      ></div>
      <span class="absolute inset-x-0 top-1/2 -translate-y-1/2">{{
        countNum
      }}</span>
    </div>
    <span class="inline-block text-gray-600 text-xs tracking-widest mt-4">{{
      remark
    }}</span>
  </div>
</template>
