<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import SinglePost from '@/components/organisms/SinglePost.vue';

export default {
  name: 'PostList',
  components: { SinglePost },
  props: ['posts'],
  setup(props: any): Record<string, unknown> {
    console.log(props.posts);
    return {};
  },
};
</script>

<style scoped>

</style>
