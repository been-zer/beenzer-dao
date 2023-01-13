
<script lang="ts">
import { ref } from 'vue';
import VotingArea from './VotingArea.vue';
import ResultsArea from './ResultsArea.vue';
import CalendarArea from './CalendarArea.vue';
import { useStore } from '../../services/store';

export default {
  components: {
    VotingArea,
    ResultsArea,
    CalendarArea,
  },
  data() {
    return {
      date: "2023/0/2",
      checkbox: true,
      commitHover: false,
      commiting: false,
    }
  },
  setup () {
    const store = useStore();
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const clickSound = require('../../assets/sounds/beep.mp3');
    const selTab = ref('Vote')
    function onTab ( tab:string ) {
      selTab.value = tab;
      clickSound.play();
    }

    return {
      store,
      selTab,
      onTab
    }
  }
}
</script>
<template>
<div class="m-auto p-2 mt-0">
  <div class="h-[820px] rounded-xl text-center shadow-xl shadow-green-400 border-x border-b border-green-500/50" >
  <div class="grid grid-cols-3 justify-between">
    <button class="text-center p-2 rounded-t-xl border"
    :onclick="() => onTab('Vote')"
    :class="selTab==='Vote' ? 'border-green-500 border-b-transparent border-l-transparent uppercase font-semibold pt-4' : 'border-green-500'" >
      <div :class="selTab==='Vote' ? 'opacity-100' : 'opacity-75'" >
        Vote
      </div>
    </button>
    <button class="text-center p-2 rounded-t-xl border"
    :onclick="() => onTab('Motions')"
    :class="selTab==='Motions' ? 'border-green-500 border-b-transparent uppercase font-semibold pt-4' : 'border-green-500'" >
      <div :class="selTab==='Motions' ? 'opacity-100' : 'opacity-75'" >
        Motions
      </div>
    </button>  
    <button class="text-center p-2 rounded-t-xl border"
    :onclick="() => onTab('Calendar')"
    :class="selTab==='Calendar' ? 'border-green-500 border-b-transparent border-r-transparent uppercase font-semibold pt-4' : 'border-green-500'" >
      <div :class="selTab==='Calendar' ? 'opacity-100' : 'opacity-75'" >
        Calendar
      </div>
    </button>  
  </div>
  <div class="m-0 p-4">
    <VotingArea :class="selTab==='Vote' ? 'block' : 'hidden'"/>
    <ResultsArea :class="selTab==='Motions' ? 'block' : 'hidden'"/>
    <CalendarArea :class="selTab==='Calendar' ? 'block' : 'hidden'"/>
  </div>
  </div>
</div>

</template>
