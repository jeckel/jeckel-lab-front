import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import blogRoutes from '@/router/blog.routes';
import userRoutes from '@/router/user.routes';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    meta: { menuItem: 'home' },
  },
  {
    path: '/contact',
    component: () => import('@/views/Contact.vue'),
    meta: { menuItem: 'contact' },
  },
  ...blogRoutes,
  ...userRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
