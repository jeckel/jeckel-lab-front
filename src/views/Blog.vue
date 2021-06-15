<template>
  <h1>Blog</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList :posts="posts"/>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts">
import PostList from '@/components/organisms/PostList.vue';
import useGetPosts from '@/composables/useGetPosts';

export default {
  components: { PostList },
  // eslint-disable-next-line class-methods-use-this
  setup(): Record<string, unknown> {
    const { posts, error, load } = useGetPosts();

    load();

    return { posts, error };
  },
};
</script>

<style scoped>

</style>
