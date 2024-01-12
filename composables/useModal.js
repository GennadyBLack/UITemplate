const useModal = ({
  name,
  closeOnDestroy = true,
  stretch = false,
  style = {},
  overflow,
}) => {
  const modalsList = useState("modalsList", () => {
    return {};
  });

  const bodyOverflowHidden = useState("bodyOverflowHidden", () => false);

  const open = ({ options = {} } = {}) => {
    const len = Object.keys(modalsList?.value)?.length;
    try {
      modalsList.value[name] = {
        open: true,
        stretch,
        styles: { zIndex: len ? len * 100 : 100, ...style },
        ...options,
      };

      overflow ? overflowHidden() : null;
    } catch (error) {
      console.error(error);
    }
  };

  const overflowHidden = () => {
    document.body.style = "overflow:hidden";
    bodyOverflowHidden.value = false;
  };

  const overflowAuto = () => {
    document.body.style = "overflow:auto";
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

  const styles = computed(() => {
    try {
      return modalsList?.value?.[name]?.open
        ? modalsList?.value?.[name]?.styles
        : {};
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
    styles,
    modalsList,
    isOpen: isOpen,
    close,
    open,
    toggle,
    overflowToggle,
  };
};

export default useModal;
