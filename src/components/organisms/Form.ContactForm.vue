<template>
  <AtomsFlashMessage :flashMessage="flashMessage" v-if="flashMessage"/>
  <div class="form">
  <form @submit.prevent="submitForm">
    <FormFormRawTextField
      id="contact_from_name"
      required
      :disabled="disabled"
      label="Votre nom"
      v-model="contactMessage.fromName"
    />
    <FormFormRawTextField
      type="email"
      id="contact_from_email"
      required
      :disabled="disabled"
      label="Votre E-Mail"
      v-model="contactMessage.fromEmail"
    />
    <FormFormRawTextField
      id="contact_subject"
      required
      :disabled="disabled"
      label="Sujet"
      v-model="contactMessage.subject"
    />
    <FormFormRawTextField
      id="contact_message"
      type="textarea"
      required
      :disabled="disabled"
      label="Message"
      v-model="contactMessage.content"
      />
    <FormFormRawSubmit label="Envoyer" icon="fas fa-paper-plane" v-if="! disabled"/>
    <div class="loader" v-if="loading">
      <Loader/>
    </div>
  </form>
<!--    <div>{{ contactMessage }}</div>-->
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { ContactMessageApi } from '@/api';
import FormFormRawTextField from '@/components/molecules/Form.FormRaw.TextField.vue';
import FormFormRawSubmit from '@/components/molecules/Form.FormRaw.Submit.vue';
import AtomsFlashMessage from '@/components/atoms/FlashMessage.vue';
import Loader from '@/components/atoms/Loader.vue';
import {
  ApiResponse, ContactMessage, FlashMessage, FlashMessageLevel,
} from '@/models';

export default {
  components: {
    FormFormRawTextField, FormFormRawSubmit, Loader, AtomsFlashMessage,
  },

  // eslint-disable-next-line class-methods-use-this
  setup(): Record<string, unknown> {
    const state = reactive({
      contactMessage: {} as ContactMessage,
      loading: false,
      disabled: false,
      flashMessage: null as FlashMessage | null,
    });

    function submitForm() {
      state.loading = true;
      state.disabled = true;

      ContactMessageApi.sendContactMessage(state.contactMessage)
        .then((response: ApiResponse) => {
          state.loading = false;
          state.flashMessage = {
            message: response.message,
            level: response.success ? FlashMessageLevel.success : FlashMessageLevel.error,
          } as FlashMessage;
        })
        .catch((e) => {
          state.flashMessage = {
            message: e.message,
            level: FlashMessageLevel.error,
          } as FlashMessage;
        });
    }

    return { ...toRefs(state), submitForm };
  },
};
</script>

<style lang="scss" scoped>

</style>
