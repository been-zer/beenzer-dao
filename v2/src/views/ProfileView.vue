<script lang='ts'>
import ProfileDash from '../components/profile/PorfileDash.vue';
import NFTsDash from '../components/profile/NFTsDash.vue';

export default {
  components: {
    ProfileDash,
    NFTsDash,
  }
}
</script>
<template>
<div>
  <div class="flex flex-wrap" >
    <ProfileDash />
    <NFTsDash />
  </div>
</div>
</template>
