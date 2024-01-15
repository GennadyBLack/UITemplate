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
});
const prefixCls = "rdbx-btn";
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
  {{ classes }}
</template>
