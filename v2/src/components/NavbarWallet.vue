<script lang="ts">
  import WalletMultiButton from './wallets/WalletMultiButton2.vue';
  import SettingsButtons from './SettingsButtons.vue';
  import SocialButtons from './SocialButtons.vue';
  import NavMenu from './NavMenu.vue';
  import { useStore } from '../services/store';

  export default {
    setup() {
      const store = useStore();
      return {
        store
      };
    },
    data() {
      return {
        isOpen: false,
        landing_url: "https://beenzer.app"
      }
    },
    components: {
      WalletMultiButton,
      SettingsButtons,
      SocialButtons,
      NavMenu
    }
  }
</script>
<template>
<header class="sm:pl-24 sm:pr-24 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"  >
  <div class="flex items-center justify-between px-4 py-3 sm:p-0">
    <!-- Logo -->
    <div class="font-bold mr-4 sm:text-4xl text-2xl sm:pr-8 sm:-ml-12 uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400">
      <h1><a href="index.html"><span>Beenzer</span></a></h1>
    </div>
    <!-- Wallet Connect -->
    <div class="flex items-center justify-center">
      <wallet-multi-button :dark="store.state.dark"></wallet-multi-button>
    </div>
    <!-- Profile -->
    <div class="ml-4 text-left font-semibold text-sm"
      v-if="store.state.username"
    >
      <span class="text-xs">Welcome,</span><br/>{{store.state.username}}
    </div>
    <!-- Toogle nav -->
    <div class="lg:hidden ml-24">
      <button @click="isOpen = !isOpen" class="block text-gray-500"
      :class="store.state.dark ? 'text-gray-200' : 'text-gray-500'">
        <svg v-if="!isOpen" class="h-6 w-6 fill-current text-green-600" viewBox="0 0 24 24" >
          <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        </svg>
        <svg v-if="isOpen" class="h-6 w-6 fill-current text-green-600" viewBox="0 0 24 24" >
          <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
        </svg>
      </button>
    </div>
  </div>
  <nav :class="isOpen ? 'block' : 'hidden'" class="z-10 px-2 pt-2 pb-4  lg:flex sm:p-0">
    <div class="lg:flex block justify-between items-center rounded-xl">
      <nav-menu />
      <social-buttons />
      <settings-buttons />
    </div>    
  </nav>
</header>
</template>