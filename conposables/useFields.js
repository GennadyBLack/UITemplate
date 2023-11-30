import { useField } from "vee-validate";

const useFields = () => {
  const { emit, props, uid } = getCurrentInstance();
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
        emit("update:dependencies", props?.value, props?.deps, inst, cur);
        props?.onChangeDeps?.(inst);
      }
    },
    {
      deep: true,
      immediate: props?.forceDeps,
    }
  );

  return { model, errorMessage, props, uid, update };
};

export default useFields;
