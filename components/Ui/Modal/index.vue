<script setup>
const props = defineProps({
  name: { type: String, default: "center" },
  position: { type: String, default: "center" },
  prefix: { type: String, default: "default" },
  loading: { type: Boolean, default: false },
  style: { type: Object, default: {} },
  hover: { type: Boolean, default: false },
  shadow: { type: Boolean, default: true },
  interactive: { type: Boolean, default: true },
  overflow: { type: Boolean, default: false },
});

const CLASSES = computed(() => {
  return {
    wrapper: `${props?.prefix}-modal-${props?.name} ${props?.prefix}-modal   ${props?.position}-position  loading-modal-${props?.loading}`,
    shadow: `${props?.shadow ? "modal-background-shadow" : "modal-background"}`,
    close: `${props?.prefix}-close`,
    content: `${props?.prefix}-content`,
    toggler: `${props?.prefix}-toggler`,
  };
});

const { isOpen, close, styles, open, toggle, modalsList } = useModal({
  name: props?.name,
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
      <Transition name="fade" v-if="isOpen">
        <div :class="CLASSES.wrapper">
          <div :class="CLASSES?.shadow">
            <div :class="CLASSES?.content" @keyup.esc="close" ref="contentNode">
              <slot name="content"> </slot>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
