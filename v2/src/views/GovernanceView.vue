<script lang='ts'>
import GovernDash from '../components/governance/GovernDash.vue';
import ChatDash from '../components/governance/ChatDash.vue';

export default {
  components: {
    GovernDash,
    ChatDash
  },
}
</script>
<template>
  <div class="flex flex-wrap justify-center align-center text-center" >
    <GovernDash />
    <ChatDash />
  </div>
</template>
