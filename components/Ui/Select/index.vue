<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <div
      @focusout="onFocusout"
      ref="wrapper"
      tabindex="-1"
      class="control__select"
    >
      <div
        @keydown.enter="isOpened = !isOpened"
        class="control__field"
        tabindex="0"
        :class="{ select__active: isOpened }"
        @click="toggle"
        style="position: relative"
      >
        <template v-if="isSearchable">
          <div v-if="!isOpened" class="select__value">
            {{ model?.value || "Не выбрано" }}
          </div>
          <input
            ref="inputRef"
            @input="$emit('update:searchString', $event.target.value)"
            :value="searchString"
            v-if="isOpened"
            type="text"
          />
        </template>
        <template v-else>
          <div class="select__value">{{ model?.value || "Не выбрано" }}</div>
        </template>
      </div>
      <div
        ref="selectRef"
        v-if="isOpened"
        @scroll="handleScroll"
        class="select__options"
        @mousedown.prevent
      >
        <template v-if="options?.length">
          <div
            class="options__item"
            v-for="option in options"
            :key="option.id"
            @mousedown="handleSelect(option)"
            :class="{ selected: option?.id == model?.id }"
          >
            {{ option?.value }}
          </div>
        </template>
        <template v-else>
          <div class="options__notfound">Ничего не найдено</div>
        </template>
      </div>
    </div>
  </UiControl>
</template>
<script setup>
const selectRef = ref();
const props = defineProps({
  rightIcon: [String, Object, Array],
  errorMessage: String,
  message: String,
  label: String,
  searchString: String,
  isSearchable: Boolean,
  closeAfterSelect: Boolean,

  modelValue: {
    type: [Object, Number, String, Array],
  },
  options: Array,

  modelValueIsNumber: {
    default: false,
    type: Boolean,
  },
});
const emits = defineEmits(["scrolledTop", "scrolledBottom"]);

const model = computed({
  get() {
    if (!props.modelValue) return;

    if (props.modelValueIsNumber) {
      return {
        id: props.modelValue,
        value: props.options.find((i) => i.id == props.modelValue)?.value,
      };
    }

    return props.modelValue;
  },
  set(_value) {
    if (!_value) {
      return emits("update:modelValue", null);
    }

    if (props.modelValueIsNumber) {
      if (props.modelValue === _value?.id) {
        return emits("update:modelValue", null);
      }

      return emits("update:modelValue", _value.id);
    }

    if (props.modelValue?.id === _value?.id) {
      return emits("update:modelValue", null);
    }

    return emits("update:modelValue", _value);
  },
});

const isOpened = ref(false);

watch([selectRef], () => {
  if (selectRef.value) {
    selectRef.value.scrollTo(0, selectRef.value.children[0].clientHeight / 15);
  }
});

const inputRef = ref();

const toggle = () => {
  isOpened.value = !isOpened.value;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const wrapper = ref();

const onFocusout = (e) => {
  if (!wrapper.value.contains(e.relatedTarget)) isOpened.value = false;
};

const handleSelect = (option) => {
  if (props.closeAfterSelect) {
    isOpened.value = false;
  }
  model.value = option;
};

const handleScroll = (event) => {
  const div = event.target;

  const scrollFromTop = div.scrollTop;
  const scrollFromBottom =
    div.scrollHeight - (div.scrollTop + div.clientHeight);

  if (scrollFromBottom < 20) {
    emits("scrolledBottom", div);
  }
  if (scrollFromTop < 20) {
    emits("scrolledTop", div);
  }
};
</script>

<style lang="scss"></style>
