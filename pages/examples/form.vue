<script setup>
import { useForm } from "vee-validate";
const onSubmit = useForm()?.handleSubmit((values) => {
  console.error(values);
});

const props = defineProps({});
const fields = ref({
  l: false,
  r: null,
  s: null,
  v: null,
  phone: null,
  test: "asds",
});
</script>
<template>
  <form action="" @submit="onSubmit" class="p-5">
    <pre><h1>I need style</h1></pre>
    <pre>
    <UiField
      v-model="fields.v"
      name="v"
      :rules="{required:true}"
      field="switch"
    ><template #before>BEFORE</template><template #after>AFTER</template></UiField>
    <div class="h1">Получаемое значение: {{ fields.v }}</div></pre>

    <pre>


    <UiField
      v-model="fields.r"
      name="r"
      :rules="{required:true}"
      field="checkbox"
    >
    
    <template #before>BEFORE</template><template #after>AFTER</template></UiField>
    <div class="h1">Получаемое значение: {{ fields.r }}</div></pre>

    <pre><UiField @update:depend="(...c)=>{log(c)}" v-model="fields.l" :deps="[fields.v]" name="l" rules="required"  maska="#-#" field="input" variant="phone" placeholder="asds" label="asds"><template #before>BEFORE</template><template #after>AFTER</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.l }}</div></pre>

    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>

    <pre><UiField v-model="fields.phone" name="phone" rules="required"  maska="#-#" field="input_phone" placeholder="asds" label="asds"><template #before>BEFORE</template><template #after>AFTER</template></UiField></pre>

    <pre>


    <!-- <UiFieldEmpty name="l" v-model="fields.l">
     <UiCheck   v-on="on" v-bind="bind"/>
    </UiFieldEmpty> -->

    </pre>
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
