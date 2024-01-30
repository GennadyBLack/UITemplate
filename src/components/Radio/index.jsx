import { ref, defineComponent } from "vue";
import { useRender } from "@/composables/useRender";

export default defineComponent({
  props: {
    modelValue: [String, Number],
    value: [String, Number],
  },
  setup(props, { emit }) {
    const onInput = (e) => {
      try {
        emit(
          "update:modelValue",
          props?.masked ? e.detail.masked : e.detail.unmasked
        );
      } catch (error) {
        console.error(error);
      }
    };
    useRender(() => (
      <>
        <input type={"radio"} checked={props?.modelValue} onChange={onInput} />
      </>
    ));
  },
});
