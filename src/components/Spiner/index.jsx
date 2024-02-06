import { defineComponent, Transition } from 'vue';
import { useRender } from '@/composables/useRender';
import './index.css';

export default defineComponent({
  props: {
    type: String,
    size: { type: String, default: 'medium' },
  },
  setup(props, { slots }) {
    useRender(() => (
      <Transition name="bounce" id="loading">
        {slots.default?.({ props }) ?? (
          <span class={`spinner_${props?.size}`}></span>
        )}
      </Transition>
    ));
  },
});
