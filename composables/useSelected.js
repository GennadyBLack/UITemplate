import _ from "lodash";

//компосаблес для чекбокса//н оего бы перенести прямо в чекбокс ( если value = [] то пушить в него )
const useSelected = ({ all, initial }) => {
  const id = _.uniqueId();
  const selected = useState(`selected-${id}`, () => []);

  selected.value = [];

  const setSelect = (e) => {
    const id = e?.data?.id ?? e;
    if (selected?.value?.includes(id)) {
      selected.value = selected.value.filter((item) => item !== id);
    } else {
      selected.value.push(id);
    }
  };

  onMounted(() => {
    if (initial) {
      selected.value = initial;
    }
  });

  const clear = () => {
    selected.value = [];
  };

  const setAll = () => {
    if (all?.value?.length) {
      if (all?.value?.length == selected?.value?.length) {
        clear();
      } else {
        selected.value = all.value;
      }
    }
  };

  const allSelected = computed(() => {
    return all?.value?.length && all?.value?.length == selected?.value?.length;
  });

  const setInitial = (data) => {
    if (data && data?.length) {
      selected.value = data;
    }
  };

  return {
    selected: computed(() => selected.value),
    setSelect,
    clear,
    setInitial,
    setAll,
    allSelected,
  };
};
export default useSelected;
