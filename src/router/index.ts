import { createRouter, createWebHistory } from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Home' },
      component: BasicLayout,
      redirect: '/device',
      children: [
        {
          path: '/device',
          name: '设备',
          meta: { title: '设备', icon: 'icon-icon-test' },
          component: () => import('../views/Device.vue'),
        },
      ],
    },
  ],
});
