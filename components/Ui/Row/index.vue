<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import { oneOf } from "../../utils";

const prefixCls = "rdbx-row";

export default {
  name: "Row",
  provide() {
    return {
      RowInstance: this,
    };
  },
  props: {
    type: {
      validator(value) {
        return oneOf(value, ["flex"]);
      },
    },
    align: {
      validator(value) {
        return oneOf(value, ["top", "middle", "bottom"]);
      },
    },
    justify: {
      validator(value) {
        return oneOf(value, [
          "start",
          "end",
          "center",
          "space-around",
          "space-between",
        ]);
      },
    },
    gutter: {
      type: Number,
      default: 0,
    },
    className: String,
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-${this.type}-${this.align}`]:
            !!this.align && this.type,
          [`${prefixCls}-${this.type}-${this.justify}`]:
            !!this.justify && this.type,
          [`${prefixCls}-${this.align}`]: !!this.align,
          [`${prefixCls}-${this.justify}`]: !!this.justify,
          [`${this.className}`]: !!this.className,
          [`${prefixCls}-no-wrap`]: !this.wrap,
        },
      ];
    },
    styles() {
      let style = {};
      if (this.gutter !== 0) {
        style = {
          marginLeft: this.gutter / -2 + "px",
          marginRight: this.gutter / -2 + "px",
        };
      }

      return style;
    },
  },
};
</script>
