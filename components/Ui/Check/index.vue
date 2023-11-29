<script setup>
const props = defineProps({
  modelValue: [String, Number],
  value: [String, Number],
});
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    type="checkbox"
    :checked="props?.modelValue"
    @change="
      (e) => {
        emit('update:modelValue', e?.target?.checked);
      }
    "
  />
</template>
