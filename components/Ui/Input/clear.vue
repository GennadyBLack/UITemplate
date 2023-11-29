<script setup>
const props = defineProps({
  modelValue: [String, Number],
  value: [String, Number],
  maska: [String, Object, Array],
});
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    v-maska
    :data-maska="maska"
    @maska="(e) => emit('update:modelValue', e)"
    :value="props?.modelValue"
  />
</template>
