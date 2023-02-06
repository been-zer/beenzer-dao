
<script lang="ts">
import { ref } from 'vue';
import { useStore } from '../../../services/store';
import { getTime, getDate } from '../../../utils';
import SocialButtons from './SocialButtons.vue';
import SettingsButtons from './SettingsButtons.vue';

export default {
  components: {
    SocialButtons,
    SettingsButtons
  },
  setup() {
    const store = useStore();
    const time = ref('');
    const date = ref('');
    setInterval( () => {
      time.value = getTime();
      date.value = getDate();
    }, 1000);
    return { 
      store,
      time,
      date,
    };
  }
}
</script>
<template>
  <div class="p-4 mt-4 text-center text-xs text-gray-400 min-w-full" > 
    <settings-buttons />
    <social-buttons />
    <div class="flex flex-wrap justify-center items-center rounded-xl m-4 mt-8 min-w-full">
      <!-- Server Date -->
      <div class="text-center text-md tracking-widest font-semibold justify-center mr-8 text-gray-400">
        {{ date }}
      </div>
      <!-- Server time -->
      <div class="text-center text-md tracking-widest font-semibold justify-center mr-8 text-gray-400">
        {{ time }}<span class="text-xs"> UTC</span>
      </div>
      <!-- Users flag -->
      <div v-if="!store.state.private" class="text-center text-md tracking-widest font-semibold justify-center mr-8 text-gray-400">
        {{ store.state.flag }}
      </div>
      <div v-else class="text-center text-md tracking-widest font-semibold justify-center mr-8 text-gray-400">
        🏴‍☠️
      </div>
    </div>
    <div class="mt-8 text-center text-md tracking-widest font-semibold justify-center text-gray-400">
      <span class="text-[11px] mr-2">
        USERS CONNECTED:
      </span>
      {{ store.state.users }}
    </div>
    <div class="mt-8">
      Made with 💚 by Beenzer Team <br/>2022 © All rights reserved.
    </div>
  </div>
</template>
