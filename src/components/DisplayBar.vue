<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Card from "./Card.vue";

const timer = ref("");

const startSecond = ref(1000 * 60 * 60 * 24 * 7);

const transformTime = () => {
  const totalSec = startSecond.value / 1000;
  const daySec = 60 * 60 * 24;
  const hourSec = 60 * 60;
  const minuteSec = 60;
  const day = Math.floor(totalSec / daySec);
  const hour = Math.floor((totalSec % daySec) / hourSec);
  const minute = Math.floor((totalSec % hourSec) / minuteSec);
  const second = Math.floor(totalSec % minuteSec);

  days.value = day >= 10 ? String(day) : "0" + day;
  hours.value = hour >= 10 ? String(hour) : "0" + hour;
  minutes.value = minute >= 10 ? String(minute) : "0" + minute;
  seconds.value = second >= 10 ? String(second) : "0" + second;
};

onMounted(() => {
  transformTime();
  timer.value = setInterval(startCountdown, 1000);
});
onBeforeUnmount(() => {
  clearInterval(timer.value);
});

const startCountdown = () => {
  startSecond.value = startSecond.value - 1000;
  transformTime();
};

const days = ref("");
const hours = ref("");
const minutes = ref("");
const seconds = ref("");
</script>

<template>
  <Card :countNum="days" remark="DAYS" />
  <Card :countNum="hours" remark="HOURS" />
  <Card :countNum="minutes" remark="MINUTES" />
  <Card :countNum="seconds" remark="SECONDS" />
</template>
