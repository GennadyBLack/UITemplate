<template>
  <div :class="wrapClasses" style="touch-action: none">
    <div
      :class="scrollContainerClasses"
      :style="{ height: height + 'px' }"
      @scroll="handleScroll"
      @wheel="onWheel"
      @touchstart="onPointerDown"
      ref="scrollContainer"
    >
      <div
        :class="loaderClasses"
        :style="{ paddingTop: wrapperPadding.paddingTop }"
        ref="toploader"
      >
        <loader :text="localeLoadingText" :active="showTopLoader"></loader>
      </div>
      <div :class="slotContainerClasses" ref="scrollContent">
        <slot></slot>
      </div>
      <!-- <div
        :class="loaderClasses"
        :style="{ paddingBottom: wrapperPadding.paddingBottom }"
        ref="bottomLoader"
      >
        <loader :text="localeLoadingText" :active="showBottomLoader"></loader>
      </div> -->
    </div>
  </div>
</template>
<script setup>
import throttle from "lodash.throttle";
import { on, off } from "@/utils";

const prefixCls = "ivu-scroll";
const dragConfig = {
  sensitivity: 10,
  minimumStartDragOffset: 5, // minimum start drag offset
};

const noop = () => Promise.resolve();

const props = defineProps({
  height: {
    type: [Number, String],
    default: 300,
  },
  onReachTop: {
    type: Function,
  },
  onReachBottom: {
    type: Function,
  },
  onReachEdge: {
    type: Function,
  },
  loadingText: {
    type: String,
  },
  distanceToEdge: [Number, Array],
  stopSlide: {
    type: Boolean,
    default: false,
  },
});

const distanceToEdge = calculateProximityThreshold();
const showTopLoader = ref(false);
const showBottomLoader = ref(false);
const showBodyLoader = ref(false);
const lastScroll = ref(0);
const reachedTopScrollLimit = ref(false);
const reachedBottomScrollLimit = ref(false);

const topRubberPadding = ref(0);
const bottomRubberPadding = ref(0);
const rubberRollBackTimeout = ref(false);
const isLoading = ref(false);
const pointerTouchDown = ref(false);
const touchScroll = ref(false);

const handleScroll = ref(() => {});
const pointerUpHandler = ref(() => {});
const pointerMoveHandler = ref(() => {});
const topProximityThreshold = ref(distanceToEdge[0]);
const bottomProximityThreshold = ref(distanceToEdge[1]);

const wrapClasses = computed(() => {
  return `${prefixCls}-wrapper`;
});

const slotContainerClasses = computed(() => {
  return [
    `${prefixCls}-content`,
    {
      [`${prefixCls}-content-loading`]: showBodyLoader.value,
    },
  ];
});
const scrollContainerClasses = computed(() => {
  return [
    `${prefixCls}-container`,
    {
      [`${prefixCls}-container-loading`]:
        showBodyLoader.value && this.stopSlide,
    },
  ];
});
const wrapperPadding = computed(() => {
  return {
    paddingTop: topRubberPadding.value + "px",
    paddingBottom: bottomRubberPadding.value + "px",
  };
});
const loaderClasses = computed(() => {
  return `${prefixCls}-loader`;
});
const localeLoadingText = computed(() => {
  if (this.loadingText === undefined) {
    return this.t("i.select.loading");
  } else {
    return this.loadingText;
  }
});

const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

const calculateProximityThreshold = () => {
  const dte = this.distanceToEdge;
  if (typeof dte == "undefined") return [20, 20];
  return Array.isArray(dte) ? dte : [dte, dte];
};

const onCallback = (dir) => {
  isLoading.value = true;
  showBodyLoader.value = true;
  if (dir > 0) {
    // this.showTopLoader = true;
    topRubberPadding.value = 20;
  } else {
    // this.showBottomLoader = true;
    bottomRubberPadding.value = 20;

    // to force the scroll to the bottom while height is animating
    let bottomLoaderHeight = 0;
    const container = this.$refs.scrollContainer;
    const initialScrollTop = container.scrollTop;
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        bottomLoaderHeight = Math.max(
          bottomLoaderHeight,
          this.$refs.bottomLoader.getBoundingClientRect().height
        );
        container.scrollTop = initialScrollTop + bottomLoaderHeight;
      }, i * 50);
    }
  }

  const callbacks = [
    this.waitOneSecond(),
    onReachEdge.value ? onReachEdge.value(dir) : noop(),
  ];
  callbacks.push(
    dir > 0
      ? onReachTop.value
        ? onReachTop.value()
        : noop()
      : onReachBottom.value
      ? onReachBottom.value()
      : noop()
  );

  let tooSlow = setTimeout(() => {
    this.reset();
  }, 5000);

  Promise.all(callbacks).then(() => {
    clearTimeout(tooSlow);
    this.reset();
  });
};

const reset = () => {
  [
    "showTopLoader",
    "showBottomLoader",
    "showBodyLoader",
    "isLoading",
    "reachedTopScrollLimit",
    "reachedBottomScrollLimit",
  ].forEach((prop) => (this[prop] = false));

  lastScroll.value = 0;
  topRubberPadding.value = 0;
  bottomRubberPadding.value = 0;
  clearInterval(rubberRollBackTimeout.value);

  // if we remove the handler too soon the screen will bump
  if (touchScroll.value) {
    setTimeout(() => {
      off(window, "touchend", this.pointerUpHandler);
      this.$refs.scrollContainer.removeEventListener(
        "touchmove",
        this.pointerMoveHandler
      );
      touchScroll.value = false;
    }, 500);
  }
};

const onWheel = (event) => {
  if (isLoading.value) return;

  // get the wheel direction
  const wheelDelta = event.wheelDelta
    ? event.wheelDelta
    : -(event.detail || event.deltaY);
  this.stretchEdge(wheelDelta);
};

const stretchEdge = (direction) => {
  clearTimeout(rubberRollBackTimeout.value);

  // check if set these props
  if (!onReachEdge.value) {
    if (direction > 0) {
      if (!onReachTop.value) return;
    } else {
      if (!onReachBottom.value) return;
    }
  }

  // if the scroll is not strong enough, lets reset it
  rubberRollBackTimeout.value = setTimeout(() => {
    if (!isLoading.value) this.reset();
  }, 250);

  // to give the feeling its ruberish and can be puled more to start loading
  if (direction > 0 && reachedTopScrollLimit.value) {
    topRubberPadding.value += 5 - topRubberPadding.value / 5;
    if (topRubberPadding.value > topProximityThreshold.value)
      this.onCallback(1);
  } else if (direction < 0 && reachedBottomScrollLimit.value) {
    bottomRubberPadding.value += 6 - bottomRubberPadding.value / 4;
    if (bottomRubberPadding.value > bottomProximityThreshold.value)
      this.onCallback(-1);
  } else {
    this.onScroll();
  }
};

const onScroll = () => {
  const el = this.$refs.scrollContainer;
  if (isLoading.value || !el) return;
  const scrollDirection = Math.sign(lastScroll.value - el.scrollTop); // IE has no Math.sign, check that webpack polyfills this
  const displacement = el.scrollHeight - el.clientHeight - el.scrollTop;

  const topNegativeProximity =
    topProximityThreshold.value < 0 ? topProximityThreshold.value : 0;
  const bottomNegativeProximity =
    bottomProximityThreshold.value < 0 ? bottomProximityThreshold.value : 0;
  if (
    scrollDirection == -1 &&
    displacement + bottomNegativeProximity <= dragConfig.sensitivity
  ) {
    reachedBottomScrollLimit.value = true;
  } else if (scrollDirection >= 0 && el.scrollTop + topNegativeProximity <= 0) {
    reachedTopScrollLimit.value = true;
  } else {
    reachedTopScrollLimit.value = false;
    reachedBottomScrollLimit.value = false;
    lastScroll.value = el.scrollTop;
  }
};

const getTouchCoordinates = (e) => {
  return {
    x: e.touches[0].pageX,
    y: e.touches[0].pageY,
  };
};

const onPointerDown = (e) => {
  // we just use scroll and wheel in desktop, no mousedown
  if (isLoading.value) return;
  if (e.type == "touchstart") {
    // if we start do touchmove on the scroll edger the browser will scroll the body
    // by adding 5px margin on pointer down we avoid this behaviour and the scroll/touchmove
    // in the component will not be exported outside of the component
    const container = this.$refs.scrollContainer;
    if (reachedTopScrollLimit.value) container.scrollTop = 5;
    else if (reachedBottomScrollLimit.value) container.scrollTop -= 5;
  }
  if (e.type == "touchstart" && this.$refs.scrollContainer.scrollTop == 0)
    this.$refs.scrollContainer.scrollTop = 5;

  pointerTouchDown.value = this.getTouchCoordinates(e);
  on(window, "touchend", this.pointerUpHandler);
  this.$refs.scrollContainer.parentElement.addEventListener(
    "touchmove",
    (e) => {
      e.stopPropagation();
      this.pointerMoveHandler(e);
    },
    { passive: false, useCapture: true }
  );
};

const onPointerMove = (e) => {
  if (!pointerTouchDown.value) return;
  if (isLoading.value) return;

  const pointerPosition = this.getTouchCoordinates(e);
  const yDiff = pointerPosition.y - pointerTouchDown.value.y;

  this.stretchEdge(yDiff);

  if (!touchScroll.value) {
    const wasDragged = Math.abs(yDiff) > dragConfig.minimumStartDragOffset;
    if (wasDragged) touchScroll.value = true;
  }
};

const onPointerUp = () => {
  pointerTouchDown.value = null;
};

onMounted(() => {
  handleScroll = throttle(onScroll, 150, { leading: false });
  // pointerUpHandler = onPointerUp.bind(this); // because we need the same function to add and remove event handlers
  pointerMoveHandler = throttle(onPointerMove, 50, {
    leading: false,
  });
});
</script>
