<template>
  <button :type="type" :class="classname">
    {{ label }} <i :class="icon" v-if="icon !== ''"></i>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    type: { type: String, required: false, default: 'button' },
    label: { type: String, required: true },
    icon: { type: String, required: false, default: '' },
    classname: { type: String, required: false, default: 'btn' },
  },
})
export default class FormButton extends Vue {
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';
.btn {
  padding: 11px;
  margin: 26px 0;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px dashed silver;
  border-radius: 20px;
  color: inherit;
  font-family: $form-control-font;
  transition: all 0.1s;
}
.btn:hover {
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
