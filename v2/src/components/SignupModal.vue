<script lang='ts'>
import { useStore } from '../services/store';
import { searchUsersSocket } from '../services/sockets/user.socket';
import { useNotification } from "@kyvg/vue3-notification";
import { createUser } from '../services/sockets/user.socket';
import CountDown from './CountDown.vue';

export default {
  components: {
    CountDown,
  },
  setup () {
    
    const store = useStore();
    const { notify }  = useNotification()

    function goBack () {
      store.dispatch('switchWelcome', true);
    }
    function searchUser (username: string) {
      searchUsersSocket(username);
    }

    function signUp (username: string) {
      if ( store.state.username ) {
        createUser(username);
        if ( !store.state.signUp &&
             !store.state.usernameAv ) {
          notify({
            title: "Congrats! 🎉",
            text: "New user created!",
            type: "success",
          });
        }
      } else {
        notify({
          title: "Error",
          text: "Invalid username!",
          type: "error",
        });
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
      countdown_date: '2023/01/01'
    }
  }
}
</script>
<template>
<teleport to="body">
  <notifications position="top left" animation-type="velocity"/>
  <div :class="store.state.singup ? 'block' : 'hidden'">
    <div ref="modal-backdrop" class="fixed z-10 inset-0 overflow-y-auto bg-opacity-50" 
    :class="store.state.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-900 text-gray-700'">
    <img :src="fireworks" class="absolute mt-12 inset-0 m-auto opacity-30" />
      <div class="z-22 flex items-center justify-center min-h-screen text-center" >
        <div class="z-90 min-h-[900px] m-2 sm:w-1/3 rounded-lg text-center overflow-hidden border border-white/20 shadow-xl shadow-yellow-500 p-8 flex flex-col justify-center" 
        :class="store.state.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'" 
        >
        <div class="py-4 -mt-10 text-center uppercase text-sm tracking-widest font-semibold justify-center">
          <div class="pl-2 pt-2">
            <p class="uppercase text-3xl tracking-widestfont-semibold">
              <span class="text-5xl">SIGN UP</span> <br/> 🎁 GET A FREE $BEEN! 🎉
            </p>
            <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
              PROMOTION ENDS FEBRUARY 1ST 2023
            </p>
            <CountDown :target_date="countdown_date" class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400" />
          </div>    
        </div>
        <p class="mt-4 px-4 uppercase text-2xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400">
          INSERT A USERNAME TO CREATE AN ACCOUNT AT BEENZER  
        </p>
        <p class="mt-8 text-xs sm:text-sm">
          WALLET ACCOUNT:
        </p>
        <p class="m-2 text-sm sm:text-md text-gray-400 tracking-widest">
          {{ store.state.pubkey }}
        </p>
        <p class="mt-4 text-xs sm:text-sm">
          YOUR USERNAME:
        </p>
        <input trype="text" id="username" key="username" v-model="username" v-on="searchUser(username)"
          class="mt-4 text-lg py-1 text-center px-4 sm:px-8 mx-16 sm:mx-32 tracking-widest font-semibold rounded-3xl mx-22 border inner shadow-inner-xl bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400" 
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
        <button class="m-2 mt-8 mx-12 sm:mx-36 p-3 rounded-3xl uppercase text-xl font-bold border border-gray-500 hover:border-green-600 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400"
          @click="signUp(username)"
        >
          SIGN UP  🚀
        </button>
        <button class="m-2 mx-12 sm:mx-36 p-3 rounded-3xl uppercase text-xl border border-gray-500 hover:border-red-600 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400"
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
<style lang="scss" scope>
input {
  background-color: transparent;
  border: 1px solid rgb(36, 211, 12);
}

input:hover {
  border: 2px solid rgb(151, 211, 12);
}

.notifications {
  // styling
  margin: 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;

  // default (blue)
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  // types (green, amber, red)
  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
}

</style>
