<template>
  {{ model }}
  <Field
    field="input"
    v-model="model"
    label="Label"
    name="title"
    :rules="{ required: true }"
  />
</template>

<script setup>
import Empty from "@/components/Field/Empty.vue";
import Field from "@/components/Field/index";
import { ref } from "vue";
import useModal from "@/composables/useModal";
import { Modal } from "./lib";
import { setTheme } from "./composables/useTheme";
setTheme();
const modalc = useModal({ name: "modal" });

const model = ref("modelTest");
</script>
