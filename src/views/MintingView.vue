<script lang='ts'>
import MintPanel from '../components/minting/MintPanel.vue';
import MintDash from '../components/minting/MintDash.vue';
import { getUsersFlags } from '../services/sockets/user.socket';
import { useStore } from '../services/store';

export default {
  components: {
    MintPanel,
    MintDash
  },
  setup() {
    getUsersFlags();
    const store = useStore();
    return { store };
  }
}
</script>
<template>
<div>
  <div class="flex flex-wrap mb-12 justify-center pt-4" >
    <mint-panel/>
    <mint-dash/>
  </div>
</div>
</template>
