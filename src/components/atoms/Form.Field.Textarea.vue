<template>
  <textarea
    :id="id"
    :name="fieldName"
    :required="required"
    :placeholder="placeholder"
    :class="classname"
    v-model="value" @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    id: { type: String, required: true },
    name: { type: String, required: false },
    required: { type: Boolean, default: false },
    placeholder: { type: String, default: '', required: false },
    classname: { type: String, default: 'form-control' },
    modelValue: String,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      value: this.modelValue,
      fieldName: this.name ?? this.id,
    };
  },
})
export default class FormFieldTextarea extends Vue {
}
</script>

<style lang="scss" scoped>
textarea {
  height: 10em;
}
</style>
