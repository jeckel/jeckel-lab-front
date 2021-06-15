<template>
  <div class="post">
    <router-link :to="{ name: 'BlogPost', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <div>{{ snippet }}</div>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'SinglePost',
  props: ['post'],
  setup(props: any): Record<string, unknown> {
    const snippet = computed(() => props.post.body.substring(0, 100));
    return { snippet };
  },
};
</script>

<style scoped>

</style>
