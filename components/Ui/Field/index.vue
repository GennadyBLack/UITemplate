<script setup>
import useFields from "~/conposables/useFields";
defineProps({
  value: [String, Number, Boolean],
  unchecked_value: [String, Number, Boolean],
  modelValue: [String, Number, Boolean],
  masked: Boolean,
  name: String,
  rules: String,
});

const { model, errorMessage } = useFields();
</script>
<template>
  <UiRadio v-model="model" />
  {{ errorMessage }}/errorMessage
</template>
