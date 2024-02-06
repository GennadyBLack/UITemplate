<template>
  <Modal>
    <template #default>asdasd</template>
    <template #content>AAAAA</template>
  </Modal>

  <Btn title="lol" @click="log" :loading="loading" />
</template>

<script setup>
import { ref } from 'vue';
const loading = ref(false);
const log = () => {
  loading.value = !loading.value;
};
</script>
