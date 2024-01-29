<script setup>
import Utils from "@/utils";
import { Form } from "vee-validate";
const props = defineProps({
  fields: Array,
  form: [Object, Array],
  wrapClass: { type: String, default: "" },
  rowClass: { type: String, default: "row align-items-end" },
  prefix: { type: String, default: "tr" },
});

const emit = defineEmits(["submit", "cancel"]);
const pre = ref({ title: null, name: null });
</script>
<template>
  <pre>
    <slot name="header" />
  <Form v-slot="{handleSubmit,errors,values}">
    <div :class="props?.rowClass">
    <div class="" v-for="(item, indx) in props?.fields"   :key="indx + '_' + item?.name" :class="[ prefix ? `${prefix}-form__row` : ``, item?.col ? `col-lg-${item?.col} col-sm-12` : `col-4 col-lg-12`]">
      <slot :name="`FIELD_SLOT_${String(item?.name)?.toUpperCase()}`">
      <UiField v-bind="item" v-model="pre[item.name]"  />
       </slot>
    </div>
  </div>
  </Form>
</pre>
</template>
