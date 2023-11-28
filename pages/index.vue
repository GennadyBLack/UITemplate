<script setup>
const props = defineProps({});
const r = ref(false);
const l = ref(null);
</script>
<template>
  {{ r }}/re/l-{{ l }}
  <UiField v-model="r" name="r" rules="required" />
</template>
