import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Index.vue')
      }, {
        path: '/new',
        name: 'new',
        component: () => import('pages/Index.vue')
      }, {
        path: '/settings',
        name: 'settings',
        component: () => import('pages/Index.vue')
      }, {
        path: '/card/:id',
        name: 'card',
        component: () => import('pages/Card.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
