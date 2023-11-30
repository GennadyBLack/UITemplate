<script setup>
import Icon from "@/components/Ui/Icon";
const fields = [
  {
    field: "input",
    name: "title",
    maska: "#-##",
    rules: { required: true },
    before: h(Icon, { name: "trash" }),
  },
  { field: "input", name: "name" },
];
</script>
<template>
  <UiForm :fields="fields">
    <template #header>
      <h1>FORM</h1>
    </template>
  </UiForm>
</template>
