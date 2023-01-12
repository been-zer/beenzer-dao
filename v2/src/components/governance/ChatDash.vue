
<script>
import { ref } from 'vue';
import click_sound from '../../assets/sounds/beep.mp3';
import MessagesArea from './MessagesArea.vue';
import ChatsArea from './ChatsArea.vue';

export default {
  components: {
    MessagesArea,
    ChatsArea
  },
  props: [
    'potSOL',
    'wallet',
    'balance',
    'tickets',
    'yourNumbers',
    'yourProbability',
    'yourROI'
  ],
  methods: {
    commitNumber () {
      this.$emit('commit', this.commitNumber)
    },
    checkBox ( checkbox ) {
      this.checkbox = checkbox;
    }
  },
  data() {
    return {
      date: "2023/0/2",
      checkbox: true,
      commitHover: false,
      commiting: false,
    }
  }
}
</script>
<template>
<div class="m-auto p-2 mt-0">
  <div class="flex justify-center h-[840px] p-4 text-gray-600 rounded-xl text-center shadow-xl shadow-yellow-400" 
  :class="this.$store.state.dark ? 'bg-gray-800' : 'bg-white'">
    <MessagesArea />
    <ChatsArea />
  </div>
</div>

</template>
