import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MintView from '../views/MintView.vue';
import StakeView from '../views/StakeView.vue';
import GovernanceView from '../views/GovernanceView.vue';
import SocialsView from '../views/SocialsView.vue';
import AppView from '../views/AppView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/mint',
    name: 'Mint',
    component: MintView
  },
  {
    path: '/stake',
    name: 'Stake',
    component: StakeView
  },
  {
    path: '/governance',
    name: 'Governance',
    component: () => GovernanceView
  },
  {
    path: '/socials',
    name: 'Socials',
    component: () => SocialsView
  },
  {
    path: '/app',
    name: 'App',
    component: () => AppView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
