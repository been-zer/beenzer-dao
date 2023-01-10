<script lang="ts">
import CoverArea from './CoverArea.vue';
import ProfileArea from './ProfileArea.vue';
import { useStore } from '../../services/store';

export default {
  components: {
    CoverArea,
    ProfileArea,
  },
  setup() {
    const store = useStore();

    return { store };
  }
}
</script>

<template>
  <div class="p-2">
    <div class="rounded-xl text-center shadow-xl border" 
    :class="store.state.dark ? 'bg-gray-800 shadow-white/20 border-gray-600' : 'bg-white shadow-black/20 border-gray-400'">
      <div class="">
        <CoverArea />
      </div>
      <div>
        <ProfileArea />
      </div> 
    </div>
  </div>
</template>
