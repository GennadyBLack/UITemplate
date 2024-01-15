import { useField } from "vee-validate";
import { FIELDS_VARIABLES } from "@/utils/constants";

const useFields = () => {
  const { $testus } = useNuxtApp();
  const { emit, props, uid, ...instance } = getCurrentInstance();

  const component = computed(() => {
    if (props?.field && FIELDS_VARIABLES.hasOwnProperty(props?.field)) {
      return FIELDS_VARIABLES[props?.field];
    } else {
      return FIELDS_VARIABLES["input"];
    }
  });

  const { errorMessage, handleChange } = useField(props.name, props.rules, {});

  const update = (newValue) => {
    const pre = props?.convertTo?.(newValue) ?? newValue;
    handleChange(pre);
    emit("update:model-value", pre);
    emit("update:clear-value", newValue);
  };

  const model = computed({
    get() {
      return props.modelValue;
    },
    set(newValue) {
      update(newValue);
    },
  });

  watch(
    () => props?.deps,
    (cur, prev) => {
      if (
        Array.isArray(prev)
          ? prev.find((item) => item !== undefined)
          : prev !== undefined
      ) {
        let inst = getCurrentInstance();
        emit("update:deps", props?.value, props?.deps, inst, cur);
        props?.onChangeDeps?.(inst);
      }
    },
    {
      deep: true,
      immediate: props?.forceDeps,
    }
  );

  const CLASSES = {
    base: `base_${props?.field ?? ""}__field base_${
      props?.class ?? ""
    }__field ${errorMessage?.value ? "error" : ""}`,

    wrap: `field_${props?.field ?? ""}__wrapper field_${
      props?.class ?? ""
    }__wrapper`,
  };

  return {
    model,
    errorMessage,
    props,
    uid,
    update,
    instance,
    component,
    CLASSES,
  };
};

export default useFields;
