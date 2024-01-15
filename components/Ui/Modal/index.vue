<script setup>
const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  position: { type: String, default: "center" }, //top left bottom right
  prefix: { type: String, default: "default" },
  loading: { type: Boolean, default: false },
  style: { type: Object, default: {} },
  hover: { type: Boolean, default: false },
  shadow: { type: Boolean, default: true },
  interactive: { type: Boolean, default: true },
  overflow: { type: Boolean, default: true },
  scrollable: { type: Boolean, default: false },
  stiky: { type: Boolean, default: false },
  animation: {
    type: String,
    default: "bounce",
    validator: (v) => ["bounce", "fade"].includes(v),
  },
});

const CLASSES = computed(() => {
  return {
    wrapper: `${props?.prefix}-modal-${props?.name} ${props?.prefix}-modal   ${props?.position}-position  loading-modal-${props?.loading}`,
    shadow: `${props?.shadow ? "modal-background-shadow" : "modal-background"}`,
    modal_wrapper: `${
      props?.shadow ? "modal-background-shadow" : "modal-background"
    }  ${props?.prefix}-modal-${props?.name} ${props?.prefix}-modal`,
    close: `${props?.prefix}-close`,
    content: `${props?.prefix}-content content-position--${props?.position}`,
    toggler: `${props?.prefix}-toggler`,
  };
});

const { isOpen, close, styles, open, modalsList } = useModal({
  ...props,
});

const contentNode = ref(null);

watchEffect(() => {
  if (props?.interactive) {
    useClickOutside(contentNode, close);
  }
});
</script>
<template>
  <div :class="CLASSES.wrapper" :style="styles">
    <div
      :class="CLASSES?.toggler"
      @mouseover="
        () => {
          props?.hover && open();
        }
      "
      @click="open"
      @focus="open"
    >
      <slot name="activator" />
    </div>
    <Teleport to="body">
      <Transition :name="props?.animation">
        <div :class="CLASSES.modal_wrapper" v-if="isOpen">
          <div
            :class="CLASSES?.content"
            @keyup.esc="close"
            ref="contentNode"
            :style="styles"
          >
            <slot name="close_btn_right"></slot>
            <slot name="content"></slot>
            <slot name="close_btn_left"></slot>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
