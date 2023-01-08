<script lang='ts'>
import MintPanel from '../components/MintPanel.vue';
import MintDash from '../components/MintDash.vue';
import WelcomeModal from '../components/WelcomeModal.vue';
import SignupModal from '../components/SignupModal.vue';
import { useStore } from '../services/store';
import { useNotification } from '@kyvg/vue3-notification';
import { watchEffect } from 'vue';

export default {
  components: {
    MintPanel,
    MintDash,
    WelcomeModal,
    SignupModal,
  },
  setup() {
    const store = useStore();
    const { notify } = useNotification();
    let run = false;
    watchEffect(() => {
      if (store.state.username && !run) {
        notify({
          title: "Welcome 👋",
          text: `Hi ${store.state.username}! You have logged in successfully!`,
          type: "success",
        });
        run = true;
        return;
      }
    });
    return { store };
  }
}
</script>
<template>
<div>
  <notifications position="top left" class="mt-2" animation-type="velocity"/>
  <welcome-modal/>
  <signup-modal/>
  <div class="flex flex-wrap" >
    <mint-panel/>
    <mint-dash/>
  </div>
</div>
</template>
