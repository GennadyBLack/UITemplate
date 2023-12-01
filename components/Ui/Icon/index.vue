<template>
  <i :class="classes" :style="styles"></i>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  size: [Number, String],
  color: String,
  custom: {
    type: String,
    default: "",
  },
});
const prefixCls = "rdbx-icon";

const classes = computed(() => {
  return [
    `${prefixCls}`,
    {
      [`${prefixCls}-${props?.type}`]: props?.type !== "",
      [`${props?.custom}`]: props?.custom !== "",
    },
  ];
});

const styles = computed(() => {
  let style = {};

  if (props?.size) style["font-size"] = `${props?.size}px`;

  if (props?.color) style.color = props?.color;

  return style;
});
</script>
<style></style>
