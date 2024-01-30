import { defineComponent, h, computed, ref, resolveComponent } from "vue";
import { useRender } from "@/composables/useRender";
import useFields from "@/composables/useFields";
import Dropdown from "@/components/Dropdown";
import Label from "./Label";
import Message from "./Message";

export default defineComponent({
  props: {
    value: [String, Number, Boolean],
    unchecked_value: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
    masked: Boolean,
    name: String,
    rules: String,
    field: String,
    label: [String, Number, Boolean],
    maska: String,
    type: String,
    label: String,
    placeholder: String,
    forceDeps: Boolean,
    deps: [Array, Object, String, Number],
    options: [Array, Object],
    convertTo: { type: Function },
    before: [Function, Object],
    after: [Function, Object],
  },

  setup({ slots }) {
    const { model, errorMessage, props, uid, component, CLASSES } = useFields();
    const errorPlacement = computed(() => "right");

    const hasLabel = computed(() => {
      return !!props?.label;
    });
    const componentInst = resolveComponent(component.value);

    useRender(() => {
      return (
        <div class={["rdbx-field", "rdbx-", CLASSES?.wrap]} id={uid}>
          {hasLabel.value && (
            <Label label={props.label} uid={uid + "_field"}>
              {slots?.label({ label: props?.label, id: uid + "_field" })}
            </Label>
          )}
          {model.value}
          <Dropdown
            show={errorMessage?.value?.length}
            placement={errorPlacement.value}
          >
            {{
              default: () => <componentInst {...props} v-model={model.value} />,
              content: () => <Message msg={errorMessage.value}></Message>,
            }}
          </Dropdown>
        </div>
      );
    });
  },
});
