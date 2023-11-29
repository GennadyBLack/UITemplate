<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>
<script setup>
import { configure, defineRule } from "vee-validate";
import { email, min, max, required } from "@vee-validate/rules";
defineRule("required", required);
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
