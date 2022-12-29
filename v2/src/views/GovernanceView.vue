<script lang='ts'>
import GovernPanel from '../components/GovernPanel.vue';
import VotingPanel from '../components/VotingPanel.vue';

export default {
  components: {
    GovernPanel,
    VotingPanel
  },
}
</script>
<template>
  <div class="flex flex-wrap top-24 left-0 right-0 justify-center align-center text-center" >
    <govern-panel/>
    <voting-panel/>
  </div>
</template>
