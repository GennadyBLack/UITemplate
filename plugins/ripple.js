export default defineNuxtPlugin((nuxtApp) => {
  const calculate = (el, pageX, pageY, currentTarget) => {
    const largestSide = Math.sqrt(
      Math.pow(el.offsetWidth, 2) + Math.pow(el.offsetHeight, 2)
    );

    const dotSize = Math.ceil((largestSide * 2) / 100);
    const rippleColor = el.dataset.rippleColor || "#768b8c";
    const dotStyle = `
    position: absolute;
    left: 0;
    top: 0;
    width: ${dotSize}px;
    height: ${dotSize}px;
    z-index: 3;
    border-radius: 50%;
    background: ${rippleColor};
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
    animation: ripple 0.7s ease-out forwards;
`;

    const x =
      ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
    const y =
      ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;
    return { x, y, style: dotStyle };
  };

  const ripple = (el) => {
    let timeOut;
    clearTimeout(timeOut);

    function setRippleElement() {
      const dot = document.createElement("SPAN");
      el.style.position = "relative";
      el.style.overflow = "hidden";

      el.addEventListener("click", ({ pageX, pageY, currentTarget }) => {
        const { x, y, style } = calculate(el, pageX, pageY, currentTarget);
        el._ripple = el?._ripple ?? {};
        if (el?._ripple?.showed) return;
        dot.style = style;

        const computed = window.getComputedStyle(el);
        if (computed && computed.position === "static") {
          el.style.position = "relative";
          el.dataset.previousPosition = "static";
        }
        el.appendChild(dot);
        dot.style.left = x + "%";
        dot.style.top = y + "%";
        el._ripple.showed = true;
        timeOut = setTimeout(() => {
          dot?.remove();
          el._ripple.showed = false;
          if (el.dataset.previousPosition) {
            el.style.position = el.dataset.previousPosition;
            delete el.dataset.previousPosition;
          }
        }, 300);
      });
    }
    setRippleElement();
  };

  nuxtApp.vueApp.directive("ripple", ripple);
});
