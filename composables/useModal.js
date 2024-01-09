const useModal = ({
  name,
  closeOnDestroy = true,
  stretch = false,
  style = {},
}) => {
  const modalsList = useState("modalsList", () => {
    return {};
  });

  const bodyOverflowHidden = useState("bodyOverflowHidden", () => false);

  const styles = useState("styles", () => {
    try {
      return { ...style };
    } catch (error) {
      console.error(error);
    }
  });

  const open = ({ options = {} } = {}) => {
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

  const overflowHidden = () => {
    document.body.style = "overflow:auto";
    bodyOverflowHidden.value = false;
  };

  const overflowAuto = () => {
    document.body.style = "overflow:hidden";
    bodyOverflowHidden.value = true;
  };

  const overflowToggle = () => {
    !!bodyOverflowHidden.value ? overflowAuto() : overflowHidden();
  };

  const close = () => {
    try {
      modalsList.value[name] = false;
    } catch (error) {
      console.error(error);
    }
  };

  const toggle = ({ options = {} } = {}) => {
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
    try {
      return modalsList?.value?.[name]?.open;
    } catch (error) {
      console.error(error);
    }
  });

  return {
    modalsList,
    isOpen: isOpen,
    close,
    open,
    toggle,
    styles,
    overflowToggle,
  };
};

export default useModal;
