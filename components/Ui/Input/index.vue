<script setup>
const props = defineProps({
  modelValue: [String, Number],
  value: [String, Number],
  maska: [String, Object, Array],
  label: String,
  placeholder: String,
  masked: Boolean,
  after: Function,
  before: Function,
});
const input = ref(null);
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="base_field__after">
    <slot name="after"><component :is="props?.after"></component></slot>
  </div>
  <input
    ref="input"
    v-bind="props"
    v-maska
    :data-maska="maska"
    @maska="
      (e) =>
        emit(
          'update:modelValue',
          props?.masked ? e.detail.masked : e.detail.unmasked
        )
    "
    :value="props?.modelValue"
  />
  <div class="base_field__before">
    <slot name="before"><component :is="props?.before"></component></slot>
  </div>
</template>
