<script setup>
const props = defineProps({
  modelValue: [String, Number],
  value: [String, Number],
});
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <label class="switch">
    <input
      type="checkbox"
      :checked="props?.modelValue"
      @change="
        (e) => {
          emit('update:modelValue', e?.target?.checked);
        }
      "
    />
    <span class="slider round"></span>
  </label>
</template>
