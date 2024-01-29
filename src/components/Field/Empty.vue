<script setup>
import { ref } from "vue";
import Input from "@/components/Input/index";
const props = defineProps({});
const o = ref("Input");
</script>
<template>
  <component :is="o" />
</template>
