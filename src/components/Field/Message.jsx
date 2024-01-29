import { defineComponent, h } from "vue";
import { useRender } from "@/composables/useRender";

export default defineComponent({
  props: {
    msg: {
      type: String,
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  setup(props, { slots }) {
    useRender(() => (
      <div>
        {props?.msg && (
          <p>
            {props.msg}
            {slots?.default?.()?.forEach((elem) => {
              return <p>{elem}</p>;
            })}
          </p>
        )}
      </div>
    ));
  },
});
