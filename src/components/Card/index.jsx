import { defineComponent, computed } from 'vue';
import { useRender } from '@/composables/useRender';

export default defineComponent({
  props: {
    padding: { type: [Number, String], default: 0 },
    border: { type: [Number, String], default: 0 },
    background: { type: String, default: 'white' },
    borderRadius: { type: String, default: 10 },
    shadow: { type: [String, Boolean], default: '0 0 12px #2196f3' },
    tag: { type: String, default: 'div' },
  },
  setup(props, { slots }) {
    const styles = computed(() => {
      return {
        padding: props?.padding ? props?.padding + 'px' : false,
        background: props?.background,
        borderRadius: props?.borderRadius ? props?.borderRadius + 'px' : false,
        border: props?.border,
        boxShadow: props?.shadow,
        width: props?.width ? props?.width + 'px' : 'fit-content',
        display: 'block',
      };
    });

    useRender(() => (
      <props.tag style={styles.value} class={'card'}>
        {slots?.default()}
      </props.tag>
    ));
  },
});
