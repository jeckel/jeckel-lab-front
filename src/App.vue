<template>
  <div id="nav">
    <Header />
    <div class="content useful-width">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/organisms/Header.vue';

@Options({
  components: { Header },
})
export default class App extends Vue {
  computed(): void {
    console.log(this);
  }
}
</script>
