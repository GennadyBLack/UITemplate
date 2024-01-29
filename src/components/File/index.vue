<script setup>
import useToggle from "@/composables/useToggle";

const props = defineProps({
  disabled: Boolean,
  accept: String,
  canDownload: Boolean,
  extensions: [Array],
  modelValue: [String, Object],
  name: String,
  size: [String, Number],
  valueType: { type: [String, Object, null], default: null },
  customClass: { type: String, default: "file-wrapper" },
  multiple: { type: Boolean, default: false },
  createUrl: String,
});
const ext = ref("");
const {
  active: loading,
  turnFalse: loadingOff,
  turnTrue: loadingOn,
} = useToggle();
const emit = defineEmits(["update:modelValue", "created"]);
const token = useCookie("token")?.value;
const config = useRuntimeConfig();

const createFile = async (file) => {
  try {
    loadingOn();
    return await $fetch(`${props?.url ?? config?.baseUrl + "/file"}`, {
      method: "POST",
      body: file,
      headers: {
        Authorization: token,
      },
    }).then(async (res) => {
      loadingOff();
      console.error(res instanceof Blob, typeof res);
      if (res instanceof Blob) {
        return JSON.parse(await res.text());
      }
      return res.data;
    });
  } catch (error) {
    loadingOff();
    console.error(error);
  }
};

const editFile = async (value) => {
  if (!value.length) {
    return;
  }
  try {
    if (props.multiple) {
      await props?.createFunc(value);
    } else {
      const val = value[0];
      const docType = val?.type?.split("/")[0];
      if (
        props.extensions &&
        !props.extensions.includes(val?.type?.split("/")[1])
      ) {
        // toast.error(
        //   `Данное расширение запрещено, доступны:${props.extensions}`
        // );
        return;
      }
      let bodyFormData = new FormData();
      bodyFormData.append("files", val);
      ext.value = docType;

      const img = await createFile(bodyFormData);

      if (Array.isArray(props.modelValue)) {
        emit("update:modelValue", [...img, ...props.modelValue]);
      } else {
        emit("update:modelValue", ...img);
      }
      emit("update:created", ...img);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = (value) => {
  emit(
    "update:modelValue",
    props.modelValue.filter((i) => i.id !== value.id)
  );
};

const download = async (id) => {
  if (id) {
    let response = await $apis.files.getById(id);
    const link = document.createElement("a");
    link.href = response?.linkAbsolute;
    link.setAttribute("target", "_blank");
    link.setAttribute("download", response?.linkAbsolute);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
};

const onInputClick = (event) => {
  event.target.value = "";
  return;
};
</script>

<template>
  <div :class="props.customClass">
    <div
      v-if="props.label"
      :class="
        props.size == 'sm' ? `d-block text-muted mb-2 text-sm` : 'form-label'
      "
    >
      {{ props.label }}
    </div>

    <div>
      <div
        class="d-flex justify-content-center w-full h-full flex-column p-1 gap-3"
      >
        <label :for="props.name" class="cursor-pointer w-100">
          <input
            :bind="field"
            :multiple="props.multiple"
            :accept="
              props?.accept ?? 'image/jpeg,image/png,.pdf,.word,.doc,.rtf'
            "
            @click="onInputClick"
            :value="null"
            :id="props.name"
            :name="props.name"
            type="file"
            :disabled="props.disabled"
            class="visually-hidden"
            @input="editFile($event.target.files)"
          />
          <div class="" :id="props.name">
            <slot />
          </div>
          <Spiner v-if="loading" small />
        </label>
      </div>
    </div>
  </div>
</template>
