import OnlineShopping from '@/components/OnlineShopping.vue'
import Wishlist from '@/components/WishList.vue'
import NotFound from '@/components/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: OnlineShopping,
  },
  {
    path: '/wishlist',
    component: Wishlist,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
