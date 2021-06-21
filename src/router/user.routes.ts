import { RouteRecordRaw } from 'vue-router';

const userRoutes: Array<RouteRecordRaw> = [
  {
    path: '/user/login',
    name: 'LoginPage',
    component: () => import('@/components/pages/Login.vue'),
    meta: { menuItem: 'user' },
  },
];

export default userRoutes;
