<script lang="ts">
import ProfileArea from './ProfileArea.vue';
import { useStore } from '../../services/store';

export default {
  components: {
    ProfileArea,
  },
  setup() {
    const store = useStore();

    return { store };
  }
}
</script>

<template>
  <div class="m-auto p-2 mt-0">
    <div class="w-96 h-96 flex flex-wrap justify-center p-4 rounded-xl text-center shadow-xl" 
    :class="store.state.dark ? 'bg-gray-800 shadow-white/20' : 'bg-white shadow-black/20'">
      <div>
        <ProfileArea />
      </div>
      <div>
        <ProfileArea />
      </div> 
    </div>
  </div>
</template>
