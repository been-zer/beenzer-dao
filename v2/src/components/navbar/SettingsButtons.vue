<script lang="ts">
import { useStore } from '../../services/store';

export default {
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      dark: true,
      sound: true,
      sound_black: require("../../assets/ico/sound.png"),
      sound_white: require("../../assets/ico/sound-white.png"),
      mute_black: require("../../assets/ico/mute.png"),
      mute_white: require("../../assets/ico/mute-white.png"),
    }
  }
}
</script>
<template>
<div class="flex justify-center p-4">
    <!-- Sound Button -->
    <button class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl border " 
    @click="store.dispatch('switchSound')" 
    :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
      <img v-if="store.state.sound" :src="store.state.dark ? sound_white : sound_black" class="h-4 w-4"/>
      <img v-else :src="store.state.dark ? mute_white : mute_black" class="h-4 w-4"/>
    </button>
  <!-- Dark Button -->
  <button class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl border " 
  @click="store.dispatch('switchDark')" 
  :class="store.state.dark ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'">
    <svg v-if="store.state.dark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </button>
</div>
</template>