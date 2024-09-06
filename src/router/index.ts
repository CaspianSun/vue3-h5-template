import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouterOptions } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
  },
]

const router = createRouter(<RouterOptions>{
  history: createWebHashHistory(),
  routes: [...routes],
})

router.beforeEach((to, form, next) => {
  next()
})
router.afterEach(() => {})

export default router
