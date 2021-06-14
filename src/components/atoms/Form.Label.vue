<template>
  <label :for="id" :class="{ required: required }">{{ label }}</label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
  },
})
export default class FormFieldLabel extends Vue {
}
</script>

<style lang="scss" scoped>
label {
  display: none;
}
</style>
