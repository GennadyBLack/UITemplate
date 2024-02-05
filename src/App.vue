<template>
  <Modal>
    <template #default>asdasd</template>
    <template #content>AAAAA</template> </Modal
  ><Card background="black">
    <Field
      field="checkbox"
      v-model="model"
      label="Label"
      name="title"
      :rules="{ required: true }"
    />
  </Card>
</template>

<script setup>
import Field from '@/components/Field/index';
import { ref } from 'vue';
const model = ref(false);
</script>
