import { createWebHistory,createRouter } from "vue-router";
import HomeLayout from '../layouts/HomeLayout.vue'

const routes = [
  {
    path:'/',
    name:'Home',
    component:HomeLayout
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router