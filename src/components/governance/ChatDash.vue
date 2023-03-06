
<script>
import MessagesArea from './MessagesArea.vue';
import ChatsArea from './ChatsArea.vue';
import { useStore } from '../../services/store';

export default {
  components: {
    MessagesArea,
    ChatsArea
  },
  setup () {
    const store = useStore();
    
    return {
      store,
    }
  }
}
</script>
<template>
<div class="m-auto p-2 mt-0">
  <div class="flex justify-center h-[820px] p-4 text-gray-600 rounded-xl text-center shadow-xl border-t" 
  :class="store.state.dark ? 'shadow-white/20 border-white/10' : 'shadow-black/20 border-black/10'">
    <MessagesArea />
    <ChatsArea />
  </div>
</div>
</template>
