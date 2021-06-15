import { ref } from 'vue';
import { BlogPost } from '@/models';
import { ApiBlog } from '@/api';

const useGetPost = (id: string) => {
  const post = ref(null as BlogPost | null);
  const error = ref(null as string | null);

  const load = () => {
    ApiBlog.get(id)
      .then((data) => { post.value = data; })
      .catch((err) => { error.value = err.message; });
  };

  return { post, error, load };
};

export default useGetPost;
