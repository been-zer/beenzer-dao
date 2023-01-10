<script lang='ts'>
import { watchEffect } from 'vue';
import { useNotification } from '@kyvg/vue3-notification';
import MintPanel from '../components/minting/MintPanel.vue';
import MintDash from '../components/minting/MintDash.vue';
import WelcomeModal from '../components/modals/WelcomeModal.vue';
import SignupModal from '../components/modals/SignupModal.vue';
import { useStore } from '../services/store';
import { getUsersFlags } from '../services/sockets/user.socket';

export default {
  components: {
    MintPanel,
    MintDash,
    WelcomeModal,
    SignupModal,
  },
  setup() {
    getUsersFlags();
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
    return { store };
  }
}
</script>
<template>
<div>
  <notifications position="top left" class="mt-2 cursor-pointer" animation-type="velocity"/>
  <welcome-modal/>
  <signup-modal/>
  <div class="flex flex-wrap mb-12" >
    <mint-panel/>
    <mint-dash/>
  </div>
</div>
</template>
