<script lang='ts'>
import { useStore } from '../services/store';

export default {
  setup () {
    const store = useStore();

    function goBack () {
      store.dispatch('switchWelcome', true);
    }

    return { 
      store ,
      goBack
    };
  },
}
</script>
<template>
<teleport to="body">
  <div :class="store.state.signup ? 'hidden' : 'block'">
    <div ref="modal-backdrop" class="fixed z-9 inset-0 overflow-y-auto bg-opacity-50" 
    :class="store.state.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'">
      <div class="z-10 flex items-center justify-center min-h-screen text-center" >
        <div class="z-80 min-h-[900px] m-2 sm:w-1/3 rounded-lg text-center overflow-hidden shadow-xl shadow-yellow-500 p-8 flex flex-col justify-center" 
        :class="store.state.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'" 
        >
          <p class="m-2 uppercase text-lg sm:text-xl tracking-widest">
            YOU HAVE CONNECTED A NEW WALLET:
          </p>
          <p class="m-2 text-sm sm:text-lg text-gray-400 tracking-widest">
            {{ store.state.pubkey }}
          </p>
          <button class="m-2 mx-8 p-3 rounded-xl uppercase text-xl border border-gray-500 "
            @click="goBack"
          >
            {{'<'}} GO BACK
          </button>
          <p class="mt-2 px-8 uppercase text-2xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400">
            INSERT A USERNAME TO SIGN UP TO BEENZER  
          </p>
          <input class="mt-10 text-2xl tracking-widest text-gray-400 font-semibold"/>
              
  
          
        </div>

      </div>
    </div>
  </div>
</teleport>
</template>
