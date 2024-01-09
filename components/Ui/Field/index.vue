<script setup>
import useFields from "~/composables/useFields";
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

const { model, errorMessage, props, uid, instance, component, CLASSES } =
  useFields();
</script>

<template>
  <div :id="uid" class="base_field" :class="CLASSES?.base">
    <div :class="CLASSES?.wrap">
      <UiDropdown :show="!!errorMessage">
        <component
          :is="component"
          v-model="model"
          v-bind="props"
          :id="uid + '_field'"
        />
        <template #content>
          <div class="error_message" v-if="errorMessage">
            {{ errorMessage }}
          </div>
        </template>
      </UiDropdown>
    </div>
  </div>
</template>
