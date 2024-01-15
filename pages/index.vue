<script setup>
//scroll skilet  input select  message notice modal add bottom and top tree poptip rate  tabs breadcrumbsbutton
import Modal from "~/components/Ui/Modal";
import UiList from "@/components/Ui/List";
import { useForm } from "vee-validate";
import Utils from "~/utils";
import usePopup from "~/composables/usePopup";
const onSubmit = useForm()?.handleSubmit((values) => {
  console.error(values);
});

usePopup();
const props = defineProps({});
const fields = ref({
  l: false,
  r: null,
  s: null,
  v: null,
  phone: null,
  test: "asds",
  age: null,
});
const items = ref([]);

const fetchNewItems = () => {
  const pre = [
    { title: "asdasdasd" },
    { title: "asdasdasd" },
    { title: "asdasdasd" },
    { title: "asdasdasd" },
    { title: "asdasdasd" },
    { title: "asdasdasd" },
    { title: "asdasdasd" },
    { title: "asdasdasd" },
    { title: "asdasdasd" },
  ];
  items.value = [...items?.value, ...pre];
};
fetchNewItems();
</script>
<template>
  <button @click="fetchNewItems">fetch</button>

  <UiList
    :items="items"
    class="scrolled"
    @update:modal-value="fetchNewItems"
    :loading="loading"
  >
    <template #item="{ item }">{{ item?.title }}</template>
  </UiList>
  <UiBtn />
  <Modal position="bottom" animation="asd">
    <template #activator><button type="button">open modal</button></template>
    <template #content
      ><div class="bg-white">
        bbbbbbb AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </div></template
    >
  </Modal>
  <Modal position="bottom" animation="asd">
    <template #activator><button>open modal</button></template>
    <template #content
      ><div class="bg-white">
        AAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </div></template
    >
  </Modal>
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
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
    <pre><UiField v-model="fields.s" :options="[{id:1,value:'oaosdosaoo'}]" :convert-to="(val)=>val?.id"  name="s" rules="required"  field="select" placeholder="asds" label="asds"><template #before>BEFORE</template></UiField>
  <div class="h1"> Получаемое значение: {{ fields.s }}</div></pre>
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

.field___label:focus {
  background-color: purple;
  color: red;
}
.scrolled {
  max-height: 300px;
  overflow: scroll;
}
</style>
