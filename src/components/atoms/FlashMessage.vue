<template>
  <div class="alert alert-success" v-if="flashMessage.level === FlashMessageLevel.success">
    <i class="fas fa-check-circle"></i>
    {{ flashMessage.message }}
  </div>

  <div class="alert alert-error" v-else>
    <i class="fas fa-exclamation-triangle"></i>
    {{ flashMessage.message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FlashMessage, FlashMessageLevel } from '@/models';

export default defineComponent({
  props: {
    flashMessage: { type: Object as PropType<FlashMessage> },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.alert {
  display: block;
  padding: 15px;
  font-family: $font-menu;
  font-weight: 200;
  margin: 20px 0;
  font-size: large;
  //border-radius: 3px;
  border: 1px dashed $muted-border-color;
  background-color: rgb(212,212,212);
  text-align: center;
}

//.alert.alert-error {
//  border: 1px solid rgb(238,211,215);
//  background-color: rgb(242,222,222);
//}

.alert.alert-success {
  background-color: $alert-success-background;
  border: 1px dashed $alert-success-border;
}

.alert.alert-error {
  background-color: $alert-error-background;
  border: 1px dashed $alert-error-border;
}
</style>
