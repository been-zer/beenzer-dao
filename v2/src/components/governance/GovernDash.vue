
<script lang="ts">
import { ref } from 'vue';
import click_sound from '../../assets/sounds/beep.mp3';
import VotingArea from './VotingArea.vue';
import ResultsArea from './ResultsArea.vue';
import { useStore } from '../../services/store';

export default {
  components: {
    VotingArea,
    ResultsArea
  },
  methods: {
    commitNumber () {
      this.$emit('commit', this.commitNumber)
    },
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
    const selTab = ref('Vote')
    function onTab ( tab:string ) {
      selTab.value = tab;
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
  <div class="h-[840px] rounded-xl text-center shadow-xl shadow-purple-400" >
  <div class="grid grid-cols-3 justify-between">
    <button class="text-center p-2 rounded-tl-xl"
    :onclick="() => onTab('Vote')"
    :class="selTab==='Vote' ? 'bg-green-500' : 'bg-transparent'">
      Vote
    </button>
    <button class="text-center p-2"
    :onclick="() => onTab('Results')"
    :class="selTab==='Results' ? 'bg-green-500' : 'bg-transparent'" >
      Results
    </button>  
    <button class="text-center p-2 rounded-tr-xl"
    :onclick="() => onTab('Calendar')"
    :class="selTab==='Calendar' ? 'bg-green-500' : 'bg-transparent'">
      Calendar
    </button>  
  </div>
  <div class="m-0 p-4 border border-green-500">
  <VotingArea :class="selTab==='Vote' ? 'block' : 'hidden'"/>
  <ResultsArea :class="selTab==='Results' ? 'block' : 'hidden'"/>
  </div>
  </div>
</div>

</template>
