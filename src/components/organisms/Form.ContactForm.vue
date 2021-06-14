<template>
  <form v-on:submit="submitForm">
    <FormFormRawTextField
      id="contact_from_name"
      required
      label="Votre nom"
      v-model="contactMessage.fromName"
    />
    <FormFormRawTextField
      type="email"
      id="contact_from_email"
      required
      label="Votre E-Mail"
      v-model="contactMessage.fromEmail"
    />
    <FormFormRawTextField
      id="contact_subject"
      required
      label="Sujet"
      v-model="contactMessage.subject"
    />
    <FormFormRawTextField
      id="contact_message"
      type="textarea"
      required
      label="Message"
      v-model="contactMessage.content"
      />
    <FormFormRawSubmit label="Envoyer" icon="fas fa-paper-plane" />
    <pre>{{ contactMessage }}</pre>
    <div>{{ output }}</div>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ContactMessage } from '@/api';
import FormFormRawTextField from '@/components/molecules/Form.FormRaw.TextField.vue';
import FormFormRawSubmit from '@/components/molecules/Form.FormRaw.Submit.vue';

@Options({
  components: { FormFormRawTextField, FormFormRawSubmit },
})
export default class FormContactForm extends Vue {
  contactMessage = {
    fromName: '', fromEmail: '', subject: '', content: '',
  }

  output = ''

  submitForm(e: Event): void {
    e.preventDefault();
    console.log(this.contactMessage);

    ContactMessage.sendContactMessage(this.contactMessage);
  }
}
</script>

<style lang="scss" scoped>

</style>
