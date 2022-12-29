<script lang="ts">
  import WalletMultiButton from './wallets/WalletMultiButton.vue';
  import SocialButtons from './SocialButtons.vue';
  import store from '../store';

  export default {
    props: [
      'users',
      'balance',
      'time'
    ],
    data() {
      return {
        store,
        isOpen: false,
        landing_url: "https://beenzer.app",
        sound_black: require("../assets/ico/sound.png"),
        sound_white: require("../assets/ico/sound-white.png"),
        mute_black: require("../assets/ico/mute.png"),
        mute_white: require("../assets/ico/mute-white.png"),
      }
    },
    components: {
      WalletMultiButton,
      SocialButtons
    }
  }
</script>

<template>
  <header class="sm:pl-24 sm:pr-24 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"  >

    <div class="flex items-center justify-between px-4 py-3 sm:p-0">

      <!-- Logo -->
      <!-- <a :href="landing_url" target="_blank" class="sm:mr-8">
        <button class="h-10 flex justify-center items-center">
          <img class="h-12 -mt-2 rounded-full" src="../assets/logo.png" alt="Workcation">
        </button>
      </a> -->
      <div class="font-bold sm:text-4xl text-lg sm:pr-8 sm:-ml-12 pr-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400">
        <h1><a href="index.html"><span>Beenzer</span></a></h1>
      </div>
      
      <!-- Wallet Connect -->
      <div class="flex items-center justify-center">
        <wallet-multi-button :dark="store.state.dark"></wallet-multi-button>
        <a href="https://solfaucet.com" target="_blank" >
          <p v-if="balance" class="ml-4 pr-4 text-sm font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600" >{{balance}} SOL</p>
          <p v-if="balance" class="ml-4 pr-4 text-sm font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600" >{{3}} BEEN</p>
        </a>
      </div>
       
      <!-- Toogle nav -->
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" :class="store.state.dark ? 'text-gray-200' : 'text-gray-500'" class="block text-gray-500">
          <svg v-if="!isOpen" class="h-6 w-6 fill-current text-green-600" viewBox="0 0 24 24" >
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
          <svg v-if="isOpen" class="h-6 w-6 fill-current text-green-600" viewBox="0 0 24 24" >
            <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <nav :class="isOpen ? 'block' : 'hidden'" class="z-10 px-2 pt-2 pb-4  sm:flex sm:p-0">

      <div class="flex justify-center items-center rounded-xl">

        <SocialButtons />

        <div class="ml-8 block p-4 mr-4 sm:flex sm:-mr-8">
            <!-- Sound Button -->
            <button class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl border " 
            @click="store.dispatch('soundButton')" 
            :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-gray-100 text-gray-600'">
              <img v-if="store.state.sound" :src="store.state.dark ? sound_white : sound_black" class="h-4 w-4"/>
              <img v-else :src="store.state.dark ? mute_white : mute_black" class="h-4 w-4"/>
            </button>
          <!-- Dark Button -->
          <button class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl border " 
          @click="store.dispatch('lightButton')" 
          :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-gray-100 text-gray-600'">
            <svg v-if="store.state.dark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </diV>

      </div>    
    </nav>
  </header>
</template>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
