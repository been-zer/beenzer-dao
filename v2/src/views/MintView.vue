<script lang='ts'>
import MintPanel from '../components/MintPanel.vue';
import HistoryPanel from '../components/HistoryPanel.vue';

export default {
  components: {
    MintPanel,
    HistoryPanel
  },
}
</script>
<template>
  <div class="flex flex-wrap top-24 left-0 right-0 justify-center align-center text-center" >
    <mint-panel/>
    <history-panel/>
  </div>
</template>
