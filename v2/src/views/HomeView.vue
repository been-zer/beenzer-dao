<script lang='ts'>
import MintPanel from '../components/MintPanel.vue';
import MintDash from '../components/MintDash.vue';
import WelcomeModal from '../components/WelcomeModal.vue';
import SignupModal from '../components/SignupModal.vue';

export default {
  components: {
    MintPanel,
    MintDash,
    WelcomeModal,
    SignupModal,
  },
  props: [
    'store',
    'socket'
  ]
}
</script>
<template>
<div>
  <signup-modal/>
  <welcome-modal/>
  <div class="flex flex-wrap" >
    <mint-panel/>
    <mint-dash/>
  </div>
</div>
</template>
