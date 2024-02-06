import { defineComponent } from 'vue';
import { useRender } from '@/composables/useRender';
import Label from '../Field/Label';

export default defineComponent({
  props: {
    modelValue: [String, Number],
    value: [String, Number],
  },
  setup(props, { emit }) {
    const onChange = (e) => {
      try {
        emit('update:modelValue', e.target.checked);
      } catch (error) {
        console.error(error);
      }
    };

    useRender(() => (
      <>
        <input type="checkbox" checked={props?.value} onChange={onChange} />
      </>
    ));
  },
});
