(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rdbxxx"] = factory(require("vue"));
	else
		root["rdbxxx"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Modal: function() { return /* reexport */ Modal; },
  useClickOutside: function() { return /* reexport */ useClickOutside; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./src/composables/useRender.js

function useRender(render) {
  const vm = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.getCurrentInstance)();
  if (!vm) {
    throw new Error({
      message: "Нельзя меен"
    });
  }
  vm.render = render;
}
;// CONCATENATED MODULE: ./src/composables/useModal.js

const useModal = ({
  name,
  closeOnDestroy = true,
  stretch = false,
  style = {},
  overflow
}) => {
  const modalsList = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});
  const {
    uid
  } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.getCurrentInstance)();
  const bodyOverflowHidden = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  const open = ({
    options = {}
  } = {}) => {
    const isMobile = window?.matchMedia("(max-width: 450px)");
    const len = Object.keys(modalsList?.value)?.length;
    try {
      modalsList.value[name ?? uid] = {
        open: true,
        stretch,
        styles: {
          zIndex: len ? len * 100 : 100,
          ...style
        },
        isMobile: isMobile,
        ...options
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
      modalsList.value[name ?? uid] = false;
      overflowAuto();
    } catch (error) {
      console.error(error);
    }
  };
  const toggle = ({
    options = {}
  } = {}) => {
    try {
      modalsList.value[name ?? uid] = modalsList?.value?.[name ?? uid]?.open ? {} : {
        open: true,
        stretch,
        order: modalsList?.value?.length ?? 1,
        ...options
      };
    } catch (error) {
      console.error(error);
    }
  };
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
    try {
      close();
    } catch (error) {
      console.error(error);
    }
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeUnmount)(() => {
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
  const styles = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    try {
      return modalsList?.value?.[name ?? uid]?.open ? modalsList?.value?.[name ?? uid]?.styles : {};
    } catch (error) {
      console.error(error);
    }
  });
  const isOpen = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    try {
      return modalsList?.value?.[name ?? uid]?.open;
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
    overflowToggle
  };
};
/* harmony default export */ var composables_useModal = (useModal);
;// CONCATENATED MODULE: ./src/composables/useEventListener.js

function useEventListener(target, event, handler) {
  if ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.isRef)(target)) {
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, handler);
      value?.addEventListener(event, handler);
    });
  } else {
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      target.addEventListener(event, handler);
    });
  }
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeUnmount)(() => {
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(target)?.removeEventListener(event, handler);
  });
}
;// CONCATENATED MODULE: ./src/composables/useClickOutside.js


function useClickOutside(target, handler) {
  const event = "pointerdown";
  if (typeof window === "undefined" || !window) {
    return;
  }
  const listener = event => {
    const el = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(target);
    if (!el) {
      return;
    }
    if (el === event.target || event.composedPath().includes(el)) {
      return;
    }
    handler(event);
  };
  return useEventListener(window, event, listener);
}
;// CONCATENATED MODULE: ./src/components/Modal/index.jsx







//https://github.com/vuejs/babel-plugin-jsx
/* harmony default export */ var Modal = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  props: {
    name: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: "center"
    },
    //top left bottom right
    prefix: {
      type: String,
      default: "default"
    },
    loading: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object,
      default: {}
    },
    hover: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: true
    },
    interactive: {
      type: Boolean,
      default: true
    },
    overflow: {
      type: Boolean,
      default: true
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    stiky: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "body"
    },
    teleport: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: "bounce",
      validator: v => ["bounce", "fade"].includes(v)
    }
  },
  setup(props, {
    slots
  }) {
    const CLASSES = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      return {
        wrapper: `${props?.prefix}-modal-${props?.name} ${props?.prefix}-modal   ${props?.position}-position  loading-modal-${props?.loading}`,
        shadow: `${props?.shadow ? "modal-background-shadow" : "modal-background"}`,
        modal_wrapper: `${props?.shadow ? "modal-background-shadow" : "modal-background"}  ${props?.prefix}-modal-${props?.name} ${props?.prefix}-modal`,
        close: `${props?.prefix}-close`,
        content: `${props?.prefix}-content content-position--${props?.position} ${props?.fullScreen && "full-screen"}`,
        toggler: `${props?.prefix}-toggler`
      };
    });
    const {
      isOpen,
      close,
      styles,
      open,
      modalsList
    } = composables_useModal({
      ...props
    });
    const contentNode = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watchEffect)(() => {
      if (props?.interactive) {
        useClickOutside(contentNode, close);
      }
    });
    useRender(() => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
      "class": CLASSES.value.wrapper,
      "style": styles
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
      "class": CLASSES?.value.toggler,
      "onMouseOver": () => {
        props?.hover && open();
      },
      "onClick": open,
      "onFocus": open
    }, [slots?.default?.()]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("Teleport"), {
      "to": props.placement,
      "disabled": !props.teleport
    }, {
      default: () => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("Transition"), {
        "name": props?.animation
      }, {
        default: () => [isOpen.value && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
          "class": CLASSES.value.modal_wrapper
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)("div", {
          "class": CLASSES?.value.content,
          "ref": contentNode,
          "style": styles,
          "onKeyUp": close
        }, [slots?.close_btn_right?.(), slots?.content?.(), slots?.close_btn_left?.()])])]
      })]
    })])]));
  }
}));
;// CONCATENATED MODULE: ./src/lib.js



;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rdbxxx.umd.js.map