<template>
  {{ model }}
  <Field
    field="radio"
    v-model="model"
    label="Label"
    name="title"
    :rules="{ required: true }"
  />
</template>

<script setup>
import Field from "@/components/Field/index";
import { ref } from "vue";
const model = ref("modelTest");
</script>
