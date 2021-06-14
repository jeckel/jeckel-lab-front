<template>
  <form v-on:submit="submitForm">
    <div>
      <label for="contact_form_name" class="required">Votre nom</label>
      <input
        type="text"
        id="contact_form_name"
        name="contact_form_name"
        required="required"
        placeholder="Votre nom"
        class="form-control"
        v-model.lazy.trim="contactMessage.fromName"
      />
    </div>
    <div>
      <label for="contact_form_from_email" class="required">Votre E-Mail</label>
      <FormFieldTextField
        type="email"
        id="contact_form_from_email"
        required
        placeholder="Votre E-Mail"
        v-model.lazy.trim="contactMessage.fromEmail"
      />
    </div>
    <div>
      <label for="contact_form_subject" class="required">Sujet</label>
      <FormFieldTextField
        id="contact_form_subject"
        placeholder="Sujet"
        required
        v-model="contactMessage.subject"
      />

    </div>
    <div>
      <label for="contact_form_message" class="required">Message</label>
      <textarea
        id="contact_form_message"
        name="contact_form[message]"
        required="required"
        placeholder="Message"
        class="form-control"
        v-model.lazy="contactMessage.content"
      ></textarea>
    </div>
    <button type="submit" class="btn">
      Envoyer <i class="fas fa-paper-plane"></i>
    </button>
    <div>{{ output }}</div>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ContactMessage } from '@/api';
import FormFieldTextField from '@/components/atoms/Form.Field.TextField.vue';

@Options({
  components: { FormFieldTextField },
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
