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
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Modal/index.vue?vue&type=script&setup=true&lang=js




/* harmony default export */ var Modalvue_type_script_setup_true_lang_js = ({
  __name: 'index',
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
  setup(__props) {
    const props = __props;
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
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(CLASSES.value.wrapper),
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(styles))
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(CLASSES.value?.toggler),
        onMouseover: _cache[0] || (_cache[0] = () => {
          props?.hover && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(open)();
        }),
        onClick: _cache[1] || (_cache[1] = (...args) => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(open) && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(open)(...args)),
        onFocus: _cache[2] || (_cache[2] = (...args) => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(open) && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(open)(...args))
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")], 34), ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Teleport, {
        to: __props.placement,
        disabled: !__props.teleport
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_.Transition, {
        name: props?.animation
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(isOpen) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
          key: 0,
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(CLASSES.value.modal_wrapper)
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(CLASSES.value?.content),
          onKeyup: _cache[3] || (_cache[3] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withKeys)((...args) => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(close) && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(close)(...args), ["esc"])),
          ref_key: "contentNode",
          ref: contentNode,
          style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(styles))
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "close_btn_right"), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "content"), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "close_btn_left")], 38)], 2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]),
        _: 3
      }, 8, ["name"])], 8, ["to", "disabled"]))], 6);
    };
  }
});
;// CONCATENATED MODULE: ./src/components/Modal/index.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./src/components/Modal/index.vue



const __exports__ = Modalvue_type_script_setup_true_lang_js;

/* harmony default export */ var Modal = (__exports__);
;// CONCATENATED MODULE: ./src/lib.js



;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rdbxxx.umd.js.map