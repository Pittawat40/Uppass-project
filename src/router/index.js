// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/myapp/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/myapp/detail',
        name: 'Detail',
        component: () => import('@/views/Detail.vue'),
      },
      {
        path: '/myapp/favorite',
        name: 'Favotite',
        component: () => import('@/views/Favorite.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
