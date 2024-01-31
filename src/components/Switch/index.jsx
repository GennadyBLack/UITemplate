import { ref, defineComponent } from "vue";
import { useRender } from "@/composables/useRender";

export default defineComponent({
  props: {
    modelValue: [String, Number],
    value: [String, Number],
  },
  setup(props, { emit }) {
    const onChange = (e) => {
      try {
        emit("update:modelValue", e.target.checked);
      } catch (error) {
        console.error(error);
      }
    };

    useRender(() => (
      <>
        <label class="switch">
          <input type="checkbox" checked={props?.value} onChange={onChange} />
          <span class="slider round"></span>
        </label>
      </>
    ));
  },
});
