import { defineComponent, computed, ref, watchEffect } from "vue";
import { useRender } from "@/composables/useRender";
import useModal from "@/composables/useModal";
import useClickOutside from "@/composables/useClickOutside";
import "./index.css";

//https://github.com/vuejs/babel-plugin-jsx
export default defineComponent({
  props: {
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
    fullScreen: { type: Boolean, default: false },
    placement: { type: String, default: "body" },
    teleport: { type: Boolean, default: true },
    animation: {
      type: String,
      default: "bounce",
      validator: (v) => ["bounce", "fade"].includes(v),
    },
  },
  setup(props, { slots }) {
    const CLASSES = computed(() => {
      return {
        wrapper: `${props?.prefix}-modal-${props?.name} ${props?.prefix}-modal   ${props?.position}-position  loading-modal-${props?.loading}`,
        shadow: `${
          props?.shadow ? "modal-background-shadow" : "modal-background"
        }`,
        modal_wrapper: `${
          props?.shadow ? "modal-background-shadow" : "modal-background"
        }  ${props?.prefix}-modal-${props?.name} ${props?.prefix}-modal`,
        close: `${props?.prefix}-close`,
        content: `${props?.prefix}-content content-position--${
          props?.position
        } ${props?.fullScreen && "full-screen"}`,
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
    useRender(() => (
      <>
        <div class={CLASSES.value.wrapper} style={styles}>
          <div
            class={CLASSES?.value.toggler}
            onMouseOver={() => {
              props?.hover && open();
            }}
            onClick={open}
            onFocus={open}
          >
            {slots?.default?.()}
          </div>
          <Teleport to={props.placement} disabled={!props.teleport}>
            <Transition name={props?.animation}>
              {isOpen.value && (
                <div class={CLASSES.value.modal_wrapper}>
                  <div
                    class={CLASSES?.value.content}
                    ref={contentNode}
                    style={styles}
                    onKeyUp={close}
                  >
                    {slots?.close_btn_right?.()}
                    {slots?.content?.()}
                    {slots?.close_btn_left?.()}
                  </div>
                </div>
              )}
            </Transition>
          </Teleport>
        </div>
      </>
    ));
  },
});
