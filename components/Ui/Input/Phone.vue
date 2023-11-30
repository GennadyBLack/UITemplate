<script setup>
const props = defineProps({
  modelValue: [String, Number],
  value: [String, Number],
  maska: [String, Object, Array],
  label: String,
  placeholder: String,
  masked: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="d-flex">
    <button @click="" type="button">Phone</button>
    <input
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
  </div>
</template>
