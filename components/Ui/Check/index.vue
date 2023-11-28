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
    v-maska
    :checked="props?.modelValue"
    @maska="
      (e) => {
        emit('update:modelValue', {
          masked: e?.target?.checked,
          unmasked: e?.target?.checked,
        });
      }
    "
  />
</template>
