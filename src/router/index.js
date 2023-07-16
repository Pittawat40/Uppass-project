// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
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

console.log(process.env.BASE_URL)

const router = createRouter({
  history: createWebHistory("Uppass-project"),
  routes,
})

export default router
