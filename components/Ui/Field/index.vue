<script setup>
import useFields from "~/conposables/useFields";

defineProps({
  value: [String, Number, Boolean],
  unchecked_value: [String, Number, Boolean],
  modelValue: [String, Number, Boolean],
  masked: Boolean,
  name: String,
  rules: String,
  maska: String,
  type: String,
  label: String,
  placeholder: String,
  forceDeps: Boolean,
  deps: [Array, Object, String, Number],
  options: [Array, Object],
});

const { model, errorMessage, props } = useFields();
</script>
<template>
  <div
    class="base_field"
    :class="[
      `base_field__${props?.type ?? ''}`,
      `base_field__${props?.class ?? ''}`,
    ]"
  >
    <div
      class="base_field"
      :class="[
        `field__wrapper__${props?.type ?? ''}`,
        `field__wrapper__${props?.class ?? ''}`,
      ]"
    >
      <div class="base_field__before">
        <slot name="before"></slot>
      </div>
      <UiCheck
        v-model="model"
        v-bind="props"
        v-if="props?.type == 'checkbox'"
      />
      <UiInput v-model="model" v-bind="props" v-if="props?.type == 'input'" />
      <UiRadio v-model="model" v-bind="props" v-if="props?.type == 'radio'" />
      <UiSelect v-model="model" v-bind="props" v-if="props?.type == 'select'" />
      <UiRange v-model="model" v-bind="props" v-if="props?.type == 'range'" />
      <UiToggle v-model="model" v-bind="props" v-if="props?.type == 'toggle'" />
      <UiDate v-model="model" v-bind="props" v-if="props?.type == 'date'" />
      <UiTextarea
        v-model="model"
        v-bind="props"
        v-if="props?.type == 'textarea'"
      />
      <div class="base_field__after">
        <slot name="after"></slot>
      </div>
    </div>
    <div class="error_message">Валидация - {{ errorMessage }}</div>
  </div>
</template>
