<script lang="ts">
import { watchEffect } from 'vue';
import { useNotification } from '@kyvg/vue3-notification';
import WelcomeModal from './components/modules/modals/WelcomeModal.vue';
import SignupModal from './components/modules/modals/SignupModal.vue';
import NavbarWallet from './components/modules/navbar/NavbarWallet.vue';
import FooterBar from './components/modules/footer/FooterBar.vue';

import { useStore } from './services/store'

export default {
  setup() {
    const store = useStore();
    const { notify } = useNotification();
    let run = true;
    watchEffect(() => {
      if (run && store.state.username) {
        notify({
          title: "Welcome 👋",
          text: `Hi ${store.state.username}! You have logged in successfully!`,
          type: "success",
        });
        run = false;
        return 0;
      }
    });

    return {
      store
    }
  },
  components: {
    WelcomeModal,
    SignupModal,
    NavbarWallet,
    FooterBar
  },
}
</script>

<template>
<div :class="store.state.dark ? 
  'bg-gray-900 shadow-gray-700 border-gray-200 text-gray-200' : 
  'bg-gray-100 shadow-gray-300 border-gray-900 text-gray-800'">
  <notifications position="top left" class="mt-2 cursor-pointer" animation-type="velocity"/>
  <welcome-modal/>
  <signup-modal/>
  <navbar-wallet/>
  <router-view/>
  <footer-bar/>
</div>
</template>

<style >
#app {
  text-align: center;
}

html {
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  background-color: transparent !important;
}

::-webkit-scrollbar-track {
  background-color: rgba(179, 179, 179, 0.692);
  border-radius: 1rem;
  margin: 0.4rem;
  margin-top: 0.4rem;
  border-left: 1px solid rgba(211, 211, 211, 0);
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background:  linear-gradient(30deg, #1bd3247c, #21b913be);
  box-shadow: inset 0 0 6px #30d31b,
}

.apexcharts-tooltip span {
  color: #fff !important;
}
</style>


