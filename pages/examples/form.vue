<script setup>
import Icon from "@/components/Ui/Icon";

const fields = [
  {
    label: "12",
    field: "input",
    name: "title",
    maska: "#-##",
    rules: { required: true },
    before: h(Icon, { type: "ios-add-circle" }),
  },
];
</script>
<template>
  <UiForm :fields="fields">
    <template #header>
      <h1>FORM</h1>
    </template>
  </UiForm>
</template>
