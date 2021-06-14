<template>
  <FlashMessage :message="completeMessage" :success="completeSuccess" v-if="isCompleted"/>
  <div class="form">
  <form v-on:submit="submitForm">
    <FormFormRawTextField
      id="contact_from_name"
      required
      :disabled="isDisabled"
      label="Votre nom"
      v-model="contactMessage.fromName"
    />
    <FormFormRawTextField
      type="email"
      id="contact_from_email"
      required
      :disabled="isDisabled"
      label="Votre E-Mail"
      v-model="contactMessage.fromEmail"
    />
    <FormFormRawTextField
      id="contact_subject"
      required
      :disabled="isDisabled"
      label="Sujet"
      v-model="contactMessage.subject"
    />
    <FormFormRawTextField
      id="contact_message"
      type="textarea"
      required
      :disabled="isDisabled"
      label="Message"
      v-model="contactMessage.content"
      />
    <FormFormRawSubmit label="Envoyer" icon="fas fa-paper-plane" v-if="isEdit"/>
    <div class="loader" v-if="isLoading">
      <Loader/>
    </div>
  </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ContactMessage } from '@/api';
import FormFormRawTextField from '@/components/molecules/Form.FormRaw.TextField.vue';
import FormFormRawSubmit from '@/components/molecules/Form.FormRaw.Submit.vue';
import Loader from '@/components/atoms/Loader.vue';
import FlashMessage from '@/components/atoms/FlashMessage.vue';
import { ApiResponse } from '@/models/contact.interface';

@Options({
  components: {
    FormFormRawTextField, FormFormRawSubmit, Loader, FlashMessage,
  },
})
export default class FormContactForm extends Vue {
  contactMessage = {
    fromName: '', fromEmail: '', subject: '', content: '',
  }

  edit = true

  loading = false

  completed = false

  completeMessage = 'Votre message a bien été envoyé.'

  completeSuccess = true

  output = ''

  get isDisabled(): boolean {
    return !this.isEdit;
  }

  get isEdit(): boolean {
    return this.edit && !this.loading && !this.completed;
  }

  get isLoading(): boolean {
    return this.loading;
  }

  get isCompleted(): boolean {
    return this.completed;
  }

  submitForm(e: Event): void {
    this.loading = true;
    e.preventDefault();

    ContactMessage.sendContactMessage(this.contactMessage)
      .then((response: ApiResponse) => {
        this.completed = true;
        this.loading = false;
        this.completeMessage = response.message;
        this.completeSuccess = response.success;
      })
      .catch(() => {
        this.completed = true;
        this.completeMessage = 'Error';
      });
  }
}
</script>

<style lang="scss" scoped>

</style>
