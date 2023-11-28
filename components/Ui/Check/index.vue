<script setup>
const props = defineProps({
  value: [String, Number, Boolean],
  unchecked_value: [String, Number, Boolean],
  modelValue: [String, Number, Boolean],
});
const instance = getCurrentInstance();
console.error(instance);
</script>
<template></template>
