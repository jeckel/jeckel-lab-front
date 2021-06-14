<template>
  <div class="form-group">
    <FormButton type="submit" :class="classname" :icon="icon" :label="label"/>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import FormButton from '@/components/atoms/Form.Button.vue';

@Options({
  components: { FormButton },
  props: {
    label: { type: String, required: true },
    icon: { type: String, required: false, default: '' },
    classname: { type: String, required: false, default: 'btn' },
  },
})
export default class FormFormRawSubmit extends Vue {
}
</script>

<style scoped>
.form-group {
  text-align: center;
}
</style>
