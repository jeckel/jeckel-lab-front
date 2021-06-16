<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <div>{{ post.body }}</div>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts">
import useGetPost from '@/composables/useGetPost';

export default {
  name: 'BlogPost',
  props: ['id'],
  setup(props: any) {
    const { post, error, load } = useGetPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style scoped>

</style>
