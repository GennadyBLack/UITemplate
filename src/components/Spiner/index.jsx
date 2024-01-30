import { defineComponent, computed } from "vue";
import { useRender } from "@/composables/useRender";
import "./index.css";

export default defineComponent({
  props: {
    type: String,
    small: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    useRender(() => (
      <>
        {props?.small && <span id="loading"></span>}
        {!props?.small && (
          <div class="spiner-wrap">
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}

        {slots.default?.()}
      </>
    ));
  },
});
