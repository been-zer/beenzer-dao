<script lang='ts'>
import MintPanel from '../components/MintPanel.vue';
import MintDash from '../components/MintDash.vue';

export default {
  components: {
    MintPanel,
    MintDash
  }
}
</script>
<template>
<div>
  <div class="flex flex-wrap" >
    <mint-panel/>
    <mint-dash/>
  </div>
</div>
</template>
