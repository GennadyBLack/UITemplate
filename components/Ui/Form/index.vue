<script setup>
import Utils from "~/utils";
import { Form } from "vee-validate";
const props = defineProps({ fileds: Array, form: [Object, Array] });
const clearForm = ref({ clear: Utils.cloneDeep(props?.form) });
</script>
<template>
  <Form>
    <div class="" v-for="(item, index) in fileds" :key="index">
      <UiField v-bind="item" v-model="form[item.name]" />
    </div>
  </Form>
</template>
