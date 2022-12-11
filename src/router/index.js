import { createRouter, createWebHistory } from 'vue-router'
import OpeningView from '../views/OpeningView.vue';
import TestView from '../views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "open",
      component: OpeningView
    },
    {
      path: "/test",
      name: "test",
      component: TestView
    }
  ]
})

export default router
