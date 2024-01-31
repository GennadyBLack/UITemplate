import { defineComponent, computed } from "vue";
import { useRender } from "@/composables/useRender";
import debounce from "lodash.debounce";

export default defineComponent({
  props: {
    distanceToEdge: {
      type: Number,
      default: 0,
    },
    items: { type: Array, required: true },
    clsPrefix: { type: String, default: "rdbx" },
    loading: { type: Boolean, default: false },
    delay: { type: Number, default: 500 },
    spin: { type: Boolean, default: true },
  },
  setup(props, { slots }) {
    const emits = defineEmits([
      "reach-top",
      "reach-bottom",
      "update:modal-value",
    ]);

    const reachBottom = debounce(() => {
      try {
        emits("reach-bottom");
      } catch (error) {
        console.error(error);
      }
    }, props?.delay);

    const reachTop = debounce(() => {
      try {
        emits("reach-top");
      } catch (error) {
        console.error(error);
      }
    }, props?.delay);

    const update = debounce(() => {
      try {
        emits("update:modal-value");
      } catch (error) {
        console.error(error);
      }
    }, props?.delay);

    const wheelEvent = (e) => {
      //reached top
      console.error(e);
    };

    const scrollEvent = (e) => {
      if (
        e?.target?.scrollHeight ==
          e?.target?.scrollTop + e?.target?.offsetHeight &&
        !props?.loading
      ) {
        update();
        reachBottom();
      }
    };
    useRender(() => (
      <>
        <div
          onScroll={scrollEvent}
          class={[props?.clsPrefix + "base--list"]}
          onWheel={wheelEvent}
        >
          {slots?.before?.()}
          {slots?.title?.()}

          {props?.items?.length &&
            props?.items?.map((item, idx) => (
              <div
                class={[props?.clsPrefix + "-wrapper-item"]}
                key={idx ?? item?.id}
              >
                {slots?.item?.(item)}
              </div>
            ))}
          {slots?.spiner?.() ?? (<UiSpiner /> && loading.value)}
          {slots?.after?.()}
        </div>
      </>
    ));
  },
});
