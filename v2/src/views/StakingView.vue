<script lang='ts'>
import StakePanel from '../components/staking/StakePanel.vue';
import StakeDash from '../components/staking/StakeDash.vue';

export default {
  components: {
    StakePanel,
    StakeDash
  },
}
</script>
<template>
  <div class="flex flex-wrap mb-12" >
    <StakePanel />
    <StakeDash />
  </div>
</template>
