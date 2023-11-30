import { useField } from "vee-validate";

const useFields = () => {
  const { emit, props, uid } = getCurrentInstance();
  const { errorMessage, handleChange } = useField(props.name, props.rules, {});

  const model = computed({
    get() {
      return props.modelValue;
    },
    set(newValue) {
      handleChange(newValue);
      emit("update:model-value", newValue);
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
        emit("update:dependencies", props?.value, props?.deps, inst);
        props?.onChangeDeps?.(inst);
      }
    },
    {
      deep: true,
      immediate: props?.forceDeps,
    }
  );
  return { model, errorMessage, props, uid };
};

export default useFields;