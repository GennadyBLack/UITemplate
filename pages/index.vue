<script setup>
import { useForm } from "vee-validate";
const onSubmit = useForm()?.handleSubmit((values) => {
  console.error(values);
});

const props = defineProps({});

const fields = ref({
  l: null,
  r: null,
  s: null,
});
</script>
<template>
  <form action="" @submit="onSubmit">
    <pre>
    <UiField
      v-model="fields.r"
      name="r"
      maska="#-#"
      type="checkbox"
      :deps="fields.l"
    />
    <div class="h1">Получаемое значение: {{ fields.r }}</div></pre>

    <pre><UiField v-model="fields.l" name="l" rules="required" masked maska="#-#" type="input" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.l }}</div></pre>

    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]"  name="s" rules="required"  type="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <button type="submit">onSubmit</button>
  </form>
</template>
<style>
pre {
  background: #131313;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  height: 100%;
  color: white;
}
.error_message {
  color: red;
}
</style>
