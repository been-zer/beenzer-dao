import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import MintingView from '../views/MintingView.vue';
import StakingView from '../views/StakingView.vue';
import GovernanceView from '../views/GovernanceView.vue';
import MarketplaceView from '../views/MarketplaceView.vue';
import StatsView from '../views/StatsView.vue';
import ProfileView from '../views/ProfileView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Minting',
    component: MintingView
  },
  {
    path: '/staking',
    name: 'Staking',
    component: StakingView
  },
  {
    path: '/governance',
    name: 'Governance',
    component: () => GovernanceView
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: () => MarketplaceView
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => StatsView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
