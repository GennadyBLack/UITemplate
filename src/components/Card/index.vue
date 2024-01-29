<script setup>
const props = defineProps({
  padding: { type: [Number, String], default: 0 },
  border: { type: [Number, String], default: 0 },
  background: { type: String, default: "white" },
  borderRadius: { type: String, default: 10 },
  shadow: { type: String, default: "0 0 12px #2196f3" },
});
const styles = computed(() => {
  return {
    padding: props?.padding,
    background: props?.background,
    borderRadius: props?.borderRadius + "px",
    border: props?.border,
    boxShadow: props?.shadow,
    width: "fit-content",
  };
});
</script>
<template>
  <div :style="styles"><slot></slot></div>
</template>
