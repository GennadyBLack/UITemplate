<script setup>
const props = defineProps({
  type: { type: String, default: "button" },
  variant: { type: String, default: "default" },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  classes: { type: String, default: "button" },
  long: { type: Boolean, default: false },
  showSlot: { type: Boolean, default: false },
  ghost: { type: Boolean, default: false },
  size: { type: String, default: "default" },
  prefixCls: { type: String, default: "rdbx-btn" },
  ripple: { type: Boolean, default: true },
});

const classes = computed(() => {
  return [
    `${prefixCls}`,
    `${prefixCls}-${props?.type}`,
    {
      [`${prefixCls}-long`]: props?.long,
      [`${prefixCls}-${props?.shape}`]: !!props?.shape,
      [`${prefixCls}-${props?.size}`]: props?.size !== "default",
      [`${prefixCls}-loading`]: props?.loading != null && props?.loading,
      [`${prefixCls}-icon-only`]:
        !props?.showSlot &&
        (!!props?.icon || !!props?.customIcon || props?.loading),
      [`${prefixCls}-ghost`]: props?.ghost,
    },
  ];
});
</script>
<template>
  <button v-ripple type="button">
    <Icon />
    Button
    <Icon />
  </button>
</template>
<style>
@keyframes ripple {
  100% {
    transform: translate(-50%, -50%) scale(100);
    opacity: 0;
  }
}

button {
  width: 200px;
  height: 100px;
}
</style>
