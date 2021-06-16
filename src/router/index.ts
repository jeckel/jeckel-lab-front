import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

/*
const routes: Array<RouteConfig> = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/blog', name: 'Blog', component: BlogPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/login', name: 'Login', component: LoginPage }
]
 */

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    meta: { menuItem: 'home' },
  },
  {
    path: '/blog',
    component: () => import('@/views/Blog.vue'),
    meta: { menuItem: 'blog' },
  },
  {
    path: '/blog/post/:id',
    component: () => import('@/views/BlogPost.vue'),
    props: true,
    meta: { menuItem: 'blog' },
  },
  {
    path: '/contact',
    component: () => import('@/views/Contact.vue'),
    meta: { menuItem: 'contact' },
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: { menuItem: 'user' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
