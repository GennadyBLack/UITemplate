import { defineComponent, computed } from "vue";
import { useRender } from "@/composables/useRender";
import _ from "lodash";

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

    const reachBottom = _.debounce(() => {
      try {
        emits("reach-bottom");
      } catch (error) {
        console.error(error);
      }
    }, props?.delay);

    const reachTop = _.debounce(() => {
      try {
        emits("reach-top");
      } catch (error) {
        console.error(error);
      }
    }, props?.delay);

    const update = _.debounce(() => {
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
          {/* <slot name="before"></slot> 
     <slot name="title"></slot> 
    <div
      class={[props?.clsPrefix + '-wrapper-item']}
      v-for="item in props?.items"
      :key="item?.id"
    >
      <slot name="item" :item="item">
        <div>{{ item }}</div>
      </slot>
    </div>
    <slot name="spiner">
      <UiSpiner v-if="loading" />
    </slot>
    <slot name="after"></slot> */}
        </div>
      </>
    ));
  },
});
