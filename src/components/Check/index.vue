<script setup>
const props = defineProps({
  modelValue: [String, Number],
  value: [String, Number],
});
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    :checked="props?.modelValue"
    @change="
      (e) => {
        emit('update:modelValue', e?.target?.checked);
      }
    "
    type="checkbox"
  />
</template>
