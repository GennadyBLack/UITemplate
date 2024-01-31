import uniqueId from "lodash.uniqueid";

const useToggle = (initial = false) => {
  const id = uniqueId();
  const active = useState(`useToggleActive-${id}`, () => false);

  const toggle = () => {
    active.value = !active.value;
  };

  const setToggle = (value) => {
    active.value = value;
  };

  const turnTrue = () => {
    active.value = true;
  };

  const turnFalse = () => {
    active.value = false;
  };

  onMounted(() => setToggle(initial));
  return { active, toggle, setToggle, turnTrue, turnFalse };
};

export default useToggle;
