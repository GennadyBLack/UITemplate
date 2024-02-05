import { ref, defineComponent } from "vue";
import { useRender } from "@/composables/useRender";

export default defineComponent({
  props: {
    modelValue: [String, Number],
    value: [String, Number],
  },
  setup(props, { emit }) {
    const onChange = (e) => {
      console.error(e);
      try {
        emit("update:modelValue", e.target.checked);
      } catch (error) {
        console.error(error);
      }
    };

    useRender(() => (
      <>
        {props.modelValue}-modelCa
        <input type="checkbox" checked={props?.value} onChange={onChange} />
      </>
    ));
  },
});