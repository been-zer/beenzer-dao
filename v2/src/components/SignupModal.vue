<script lang='ts'>
import { useStore } from '../services/store';
import { searchUsersSocket } from '../services/sockets/user.socket';

export default {
  setup () {
    const store = useStore();

    function goBack () {
      store.dispatch('switchWelcome', true);
    }

    function searchUser (username: string) {
      searchUsersSocket(username);
    }

    function signUp () {
      if ( store.state.username ) {
        store.dispatch('switchSignup', false);
      }
    }

    return { 
      store ,
      goBack,
      searchUser,
      signUp
    };
  },
  data () {
    return {
      fireworks: require("../assets/fireworks.gif"),
      username: '',
    }
  }
}
</script>
<template>
<teleport to="body">
  <div :class="store.state.signup ? 'block' : 'hidden'">
    <div ref="modal-backdrop" class="fixed z-11 inset-0 overflow-y-auto bg-opacity-50" 
    :class="store.state.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-900 text-gray-700'">
    <img :src="fireworks" class="absolute mt-12 inset-0 m-auto opacity-30" />
      <div class="z-22 flex items-center justify-center min-h-screen text-center" >
        <div class="z-90 min-h-[900px] m-2 sm:w-1/3 rounded-lg text-center overflow-hidden shadow-xl shadow-yellow-500 p-8 flex flex-col justify-center" 
        :class="store.state.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'" 
        >
        <p class="mt-4 px-8 uppercase text-2xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400">
          INSERT A USERNAME TO SIGN UP TO BEENZER  
        </p>
        <p class="mt-12 text-sm sm:text-lg">
          WALLET ACCOUNT:
        </p>
        <p class="m-2 text-sm sm:text-lg text-gray-400 tracking-widest">
          {{ store.state.pubkey }}
        </p>
        <p class="mt-4 text-sm sm:text-lg">
          YOUR USERNAME:
        </p>
        <input trype="text" id="username" key="username" v-model="username" v-on="searchUser(username)"
          class="mt-4 text-lg text-center px-8 tracking-widest text-gray-400 font-semibold rounded-xl mx-22 border inner shadow-inner-xl bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400" 
        />
        <div v-if="username">
          <p v-if="store.state.username" class="mt-4 px-8 uppercase text-xs tracking-widest text-green-500">
            IS AVAILABLE
          </p>
          <p v-else class="mt-4 px-8 uppercase text-xs tracking-widest text-red-500">
            INVALID OR IN-USE USERNAME
          </p>
        </div>
        <p class="m-2 uppercase text-lg sm:text-xl tracking-widest">
        </p>
        <button class="m-2 mx-8 p-3 rounded-xl uppercase text-xl font-bold border border-gray-500 hover:border-green-600 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400"
          @click="signUp"
        >
          SIGN UP  🚀
        </button>
        <button class="m-2 mx-8 p-3 rounded-xl uppercase text-xl border border-gray-500 hover:border-red-600 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400"
          @click="goBack"
        >
        👈 GO BACK
        </button>
              
  
          
        </div>

      </div>
    </div>
  </div>
</teleport>
</template>
<style scope>
input {
  background-color: transparent;
}

input:hover {
  border: 1px solid rgb(36, 211, 12);

}

</style>
