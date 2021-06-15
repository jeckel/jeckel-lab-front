import { ref } from 'vue';
import { BlogPost } from '@/models';
import { ApiBlog } from '@/api';

const useGetPosts = () => {
  const posts = ref([] as BlogPost[]);
  const error = ref(null as string | null);

  const load = () => {
    ApiBlog.getList()
      .then((data) => { posts.value = data; })
      .catch((err) => { error.value = err.message; });
  };

  return { posts, error, load };
};

export default useGetPosts;
