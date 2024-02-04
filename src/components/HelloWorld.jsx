import { defineComponent, h } from 'vue';
import { useRender } from '@/composables/useRender';

export default defineComponent({
  props: {
    msg: {
      type: String,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    useRender(() => (
      <div>
        {props?.msg && (
          <p>
            {slots?.default?.()?.forEach((elem) => {
              elem.rules = { required: true };
              return h(elem?.type, elem);
            })}
          </p>
        )}
      </div>
    ));
  },
});
