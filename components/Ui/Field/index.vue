<script setup>
import useFields from "~/conposables/useFields";

defineProps({
  value: [String, Number, Boolean],
  unchecked_value: [String, Number, Boolean],
  modelValue: [String, Number, Boolean],
  masked: Boolean,
  name: String,
  rules: String,
  field: String,
  maska: String,
  type: String,
  label: String,
  placeholder: String,
  forceDeps: Boolean,
  deps: [Array, Object, String, Number],
  options: [Array, Object],
  convertValue: { type: Function },
});

const { model, errorMessage, props } = useFields();

const FIELDS_VARIABLES = {
  input: "UiInput",
  radio: "UiRadio",
  checkbox: "UiCheck",
  select: "UiSelect",
  range: "UiRange",
  toggle: "UiToggle",
  date: "UiDate",
  textarea: "UiTextarea",
};

const component = computed(() => {
  if (props?.field && FIELDS_VARIABLES.hasOwnProperty(props?.field)) {
    return FIELDS_VARIABLES[props?.field];
  } else {
    return FIELDS_VARIABLES["input"];
  }
});
</script>
<template>
  <div
    class="base_field"
    :class="[
      `base_field__${props?.field ?? ''}`,
      `base_field__${props?.class ?? ''}`,
    ]"
  >
    {{ component }}/component
    <div
      class="base_field"
      :class="[
        `field__wrapper__${props?.field ?? ''}`,
        `field__wrapper__${props?.class ?? ''}`,
      ]"
    >
      <div class="base_field__before">
        <slot name="before"></slot>
      </div>
      <component :is="component" v-model="model" v-bind="props" />

      <div class="base_field__after">
        <slot name="after"></slot>
      </div>
    </div>
    <div class="error_message">Валидация - {{ errorMessage }}</div>
  </div>
</template>
