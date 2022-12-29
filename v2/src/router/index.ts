import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import MintView from '../views/MintView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'DAO',
    component: HomeView
  },
  {
    path: '/mint',
    name: 'Mint',
    component: () => MintView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
