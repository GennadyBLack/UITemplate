import _ from "lodash";

const useToggle = (initial = false) => {
  const id = _.uniqueId();
  const active = useState(`useToggleActive-${id}`, () => false);

  const toggle = () => {
    active.value = !active.value;
  };

  const setToggle = (value) => {
    active.value = value;
  };

  onMounted(() => setToggle(initial));
  return { active, toggle, setToggle };
};

export default useToggle;
