<script setup>
import { useSlots } from 'vue';

const props = defineProps({});
const slot = useSlots({}).default();
</script>
<template>{{ slot }}</template>
