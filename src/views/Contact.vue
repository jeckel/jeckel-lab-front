<template>
  <div class="card">
    <div class="card-header">
      <h2>
        <i class="far fa-envelope"></i> Contacter Jeckel-Lab
      </h2>
    </div>
    <div class="card-body">
      <FormContactForm/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import FormContactForm from '@/components/organisms/Form.ContactForm.vue';

@Options({
  components: { FormContactForm },
})
export default class ContactPage extends Vue {
}
</script>

<style scoped>

</style>
