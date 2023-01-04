<script lang='ts'>
import MintPanel from '../components/MintPanel.vue';
import MintDash from '../components/MintDash.vue';
import WelcomeModal from '../components/WelcomeModal.vue';
// import SignupModal from '../components/SignupModal.vue';

export default {
  components: {
    MintPanel,
    MintDash,
    WelcomeModal,
    // SignupModal
  },
  props: [
    'store',
    'socket'
  ]
}
</script>
<template>
<div>
  <welcome-modal :connected="true" />
  <div class="flex flex-wrap" >
    <mint-panel/>
    <mint-dash/>
    <!-- <signup-modal/> -->
  </div>
</div>
</template>
