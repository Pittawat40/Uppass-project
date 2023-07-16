// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    children: [
      {
        path: '/Uppass-project/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/Uppass-project/detail',
        name: 'Detail',
        component: () => import('@/views/Detail.vue'),
      },
      {
        path: '/Uppass-project/favorite',
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
