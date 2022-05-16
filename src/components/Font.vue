<template>
  <h2 :style="{ 'font-family': props.name + ' !important' }">
    {{ props.name }}
  </h2>
  <h2 :style="{ 'font-family': props.name + ' !important' }">abcdefghijklm</h2>
  <h2 :style="{ 'font-family': props.name + ' !important' }">nopqrstuvwxyz</h2>
</template>

<script setup>
import Font from "../../types.js";

const props = defineProps({
  name: String,
});
</script>

<style scoped>
h2 {
  color: burlywood;
  padding: 5px;
  margin-left: 20px;
  font-size: 40px;
}
* {
  text-align: left;
}
</style>
