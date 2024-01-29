import { ref, defineComponent } from "vue";
import { vMaska } from "maska";
import { useRender } from "@/composables/useRender";

export default defineComponent({
  props: {
    modelValue: [String, Number],
    value: [String, Number],
    maska: [String, Object, Array],
    label: String,
    placeholder: String,
    masked: Boolean,
  },
  directives: { maska: vMaska },
  setup(props, { emit }) {
    const input = ref(null);

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
      <input
        ref={input}
        {...props}
        v-maska
        data-maska={props.maska}
        value={props?.modelValue}
        onMaska={onInput}
      />
    ));
  },
});
