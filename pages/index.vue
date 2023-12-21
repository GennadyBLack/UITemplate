<script setup>
import { useForm } from "vee-validate";
import Utils from "~/utils";
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

const log = () => console.error("error");
</script>
<template>
  <UiIcon name="trash" />
  <div class="aaa">
    <UiDropdown
      ><div>aaaa</div>
      <template #content>PAPAPAP</template></UiDropdown
    >
  </div>
  <form action="" @submit="onSubmit" class="p-5">
    <pre><h1 @contextmenu.prevent="log">I need style</h1></pre>
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
      type="checkbox"
    >
    
    <template #before>BEFORE</template><template #after>AFTER</template></UiField>
    <div class="h1">Получаемое значение: {{ fields.r }}</div></pre>

    <UiField
      v-model="fields.l"
      name="l"
      rules="required"
      maska="#-#"
      field="input_phone"
      variant="phone"
      placeholder="asds"
      label="asds"
      ><template #before>BEFORE</template
      ><template #after>AFTER</template></UiField
    >
    <div class="h1">Получаемое значение: {{ fields.l }}</div>

    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>

    <pre><UiField v-model="fields.phone" name="phone" rules="required"  maska="#-#" field="input_phone" placeholder="asds" label="asds"><template #before>BEFORE</template><template #after>AFTER</template></UiField></pre>
    <button type="submit">onSubmit</button>
    <UiIcon type="ios-add" />
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
.aaa {
  height: 20px;
  width: 200px;
  background: rgb(173, 252, 176);
  overflow: hidden;
}
</style>
