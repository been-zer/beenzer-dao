<script lang="ts">
import NFTsArea from './NFTsArea.vue';
import { useStore } from '../../services/store';

export default {
  components: {
    NFTsArea
  },
  setup() {
    const store = useStore();

    return { store };
  }
}
</script>

<template>
  <div class="p-2">
    <div class="flex flex-wrap justify-center p-4 rounded-xl text-center shadow-xl" 
    :class="store.state.dark ? 'bg-gray-800 shadow-white/20' : 'bg-white shadow-black/20'">
      <NFTsArea />
    </div>
  </div>
</template>