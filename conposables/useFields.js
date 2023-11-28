import { useField } from "vee-validate";

const useFields = () => {
  const { emit, props } = getCurrentInstance();

  const { errorMessage, handleChange } = useField(props.name, props.rules, {});

  const model = computed({
    get() {
      return props.modelValue;
    },
    set(newValue) {
      console.error(newValue, "newValue");
      let pre = props.masked ? newValue.masked : newValue.unmasked;
      handleChange(pre);
      emit("update:model-value", pre);
    },
  });

  // const ctx = computed(() => ({
  //   searchFn: props?.searchFn,
  // }));

  // watch(
  //   () => props?.deps,
  //   (cur, prev) => {
  //     if (
  //       Array.isArray(prev)
  //         ? prev.find((item) => item !== undefined)
  //         : prev !== undefined
  //     ) {
  //       props?.onDepsChange?.(ctx.value);
  //     }
  //   },
  //   {
  //     deep: true,
  //     immediate: props.forceDeps,
  //   }
  // );

  return { model, errorMessage };
};

export default useFields;
