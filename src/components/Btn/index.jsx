import { defineComponent, computed, Transition } from 'vue';
import { useRender } from '@/composables/useRender';
import Spiner from '../Spiner/index.jsx';
import './index.scss';
export default defineComponent({
  props: {
    type: { type: String, default: 'button' },
    variant: { type: String, default: 'default' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    classes: { type: String, default: 'button' },
    long: { type: Boolean, default: false },
    showSlot: { type: Boolean, default: true },
    ghost: { type: Boolean, default: false },
    size: { type: String, default: 'medium' },
    prefixCls: { type: String, default: 'rdbx-btn' },
    tag: { type: String, default: 'button' },
    title: { type: String },
    animation: {
      type: String,
      default: 'fade',
      validator: (v) => ['bounce', 'fade'].includes(v),
    },
  },
  emits: {},
  setup(props, { slots, emit }) {
    const iconClick = (e) => {
      emit('iconClick', e);
    };

    const submit = (e) => {
      emit('submit', e);
    };

    const click = (e) => {
      emit('click', e);
    };

    const classes = computed(() => {
      return [
        `${props.prefixCls}`,
        `${props.prefixCls}-${props?.type}`,
        {
          [`${props.prefixCls}-long`]: props?.long,
          [`${props.prefixCls}-disabled`]: props?.disabled,
          [`${props.prefixCls}-${props?.shape}`]: !!props?.shape,
          [`${props.prefixCls}-${props?.size}`]: props?.size !== 'default',
          [`${props.prefixCls}-loading`]:
            props?.loading != null && props?.loading,
          [`${props.prefixCls}-icon-only`]:
            !props?.showSlot &&
            (!!props?.icon || !!props?.customIcon || props?.loading),
          [`${props.prefixCls}-ghost`]: props?.ghost,
        },
      ];
    });

    const showSlots = computed(() => {
      return !props?.showSlot && props?.loading;
    });

    useRender(() => (
      <Transition name={props?.animation}>
        {slots?.before?.()}

        <props.tag
          type={props.type}
          class={classes.value}
          onClick:stop={click}
          onSubmit:stop={submit}
          disabled={props?.disabled}
        >
          {slots?.beforeInner?.()}
          {props?.loading && <Spiner />}
          {slots?.icon?.() ??
            (props?.icon && (
              <Icon
                icon={props?.icon}
                class={`${props.prefixCls}-icon`}
                onClick:stop={iconClick}
              />
            ))}
          {slots?.title?.() ??
            (props?.title && !showSlots.value && (
              <span class={`${props.prefixCls}-title`}>{props?.title}</span>
            ))}
          {!showSlots.value && slots?.default?.()}
          {slots?.afterInner?.()}
        </props.tag>
        {slots?.after?.()}
      </Transition>
    ));
  },
});
