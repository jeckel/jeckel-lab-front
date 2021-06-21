import { RouteRecordRaw } from 'vue-router';

const blogRoutes: Array<RouteRecordRaw> = [
  {
    path: '/blog',
    name: 'BlogIndexPage',
    component: () => import('@/components/pages/Blog.vue'),
    meta: { menuItem: 'blog' },
  },
  {
    path: '/blog/post/:id',
    component: () => import('@/views/BlogPost.vue'),
    props: true,
    meta: { menuItem: 'blog' },
  },
];

export default blogRoutes;
