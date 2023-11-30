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
  convertTo: { type: Function },
  before: [Function, Object],
  after: [Function, Object],
});

const { model, errorMessage, props, uid } = useFields();

const FIELDS_VARIABLES = {
  input: "UiInput",
  input_phone: "UiInputPhone",
  input_password: "UiInputPassword",
  radio: "UiRadio",
  checkbox: "UiCheck",
  select: "UiSelect",
  range: "UiRange",
  switch: "UiSwitch",
  date: "UiDate",
  textarea: "UiTextarea",
  slot: "UiFieldSlot",
  empty: "UiFieldEmpty",
};

const component = computed(() => {
  if (props?.field && FIELDS_VARIABLES.hasOwnProperty(props?.field)) {
    return FIELDS_VARIABLES[props?.field];
  } else {
    return FIELDS_VARIABLES["input"];
  }
});

const CLASSES = {
  base: `base_${props?.field ?? ""}__field base_${props?.class ?? ""}__field ${
    errorMessage?.value ? "error" : ""
  }`,
  wrap: `field_${props?.field ?? ""}__wrapper field_${
    props?.class ?? ""
  }__wrapper`,
  label: `field_${props?.field ?? ""}__label  field_${
    props?.class ?? ""
  }__label`,
};
</script>
<template>
  <div :id="uid" class="base_field" :class="CLASSES?.base">
    <label v-if="props?.label" :class="CLASSES?.label">{{
      props?.label
    }}</label>

    <div :class="CLASSES?.wrap">
      <div class="base_field__before">
        <slot name="before"><component :is="props?.before"></component></slot>
      </div>
      <component
        :is="component"
        v-model="model"
        v-bind="props"
        :id="uid + '_field'"
      />
      <div class="base_field__after">
        <slot name="after"><component :is="props?.after"></component></slot>
      </div>
    </div>
    <div class="error_message" v-if="errorMessage">
      Валидация - {{ errorMessage }}
    </div>
  </div>
</template>
