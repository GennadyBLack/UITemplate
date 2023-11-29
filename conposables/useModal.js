const useModal = ({ name, closeOnDestroy = true, stretch = false }) => {
  const modalsList = useState("modalsList", () => {
    return {};
  });

  const open = ({ options = {} }) => {
    try {
      modalsList.value[name] = {
        open: true,
        stretch,
        order: modalsList?.value?.length ?? 1,
        ...options,
      };
    } catch (error) {
      console.error(error);
    }
  };

  const close = () => {
    try {
      modalsList.value[name] = false;
    } catch (error) {
      console.error(error);
    }
  };

  const toggle = ({ options = {} }) => {
    try {
      modalsList.value[name] = modalsList?.value?.[name]?.open
        ? {}
        : {
            open: true,
            stretch,
            order: modalsList?.value?.length ?? 1,
            ...options,
          };
    } catch (error) {
      console.error(error);
    }
  };

  onUnmounted(() => {
    try {
      close();
    } catch (error) {
      console.error(error);
    }
  });

  onBeforeUnmount(() => {
    try {
      if (closeOnDestroy) {
        const pre = {};
        Object.entries(modalsList.value).forEach(([key, value]) => {
          if (key !== name) {
            pre[key] = value;
          }
        });
        modalsList.value = {};
      }
    } catch (error) {
      console.error(error);
    }
  });

  const isOpen = computed(() => {
    return modalsList?.value?.[name]?.open;
  });

  return { modalsList, isOpen: isOpen, close, open, toggle };
};

export default useModal;
