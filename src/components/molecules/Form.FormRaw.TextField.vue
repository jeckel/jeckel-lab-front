<template>
  <div class="form-group">
    <FormFieldLabel :id="id" :required="required" :label="label" />
    <FormFieldTextarea
      :type="type"
      :id="id"
      :name="fieldName"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholderName"
      :classname="classname"
      v-model="value" @input="$emit('update:modelValue', $event.target.value)"
      v-if="type === 'textarea'"
    />
    <FormFieldTextField
      :type="type"
      :id="id"
      :name="fieldName"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholderName"
      :classname="classname"
      v-model="value" @input="$emit('update:modelValue', $event.target.value)"
      v-else
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FormFieldTextField from '@/components/atoms/Form.Field.TextField.vue';
import FormFieldLabel from '@/components/atoms/Form.Label.vue';
import FormFieldTextarea from '@/components/atoms/Form.Field.Textarea.vue';

@Options({
  components: { FormFieldTextField, FormFieldLabel, FormFieldTextarea },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: false },
    type: { type: String, required: false, default: 'text' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    label: { type: String, required: true },
    placeholder: { type: String, required: false },
    classname: { type: String, default: 'form-control' },
    modelValue: String,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      value: this.modelValue,
      fieldName: this.name ?? this.id,
      placeholderName: this.placeholder ?? this.label,
    };
  },
})
export default class FormFormRawTextField extends Vue {
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.form-control {
  border: none;
  border-radius: 0;
  border-bottom: 1px dashed $form-control-border-color;
  color: inherit;
  width: 100%;
  padding: 12px 0 12px 12px;
  margin: 8px 0;
  background-color: $form-control-background-color;
  font-family: $form-control-font;
}
.form-control:disabled {
  color: $form-control-color-disabled;
}

.form-group {
  text-align: center;
}
</style>
