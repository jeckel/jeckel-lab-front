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
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog', name: 'Blog', component: () => import('@/views/Blog.vue'),
  },
  {
    path: '/contact', name: 'Contact', component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/login', name: 'Login', component: () => import('@/views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
