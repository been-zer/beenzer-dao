
<script>
import { ref } from 'vue';
import click_sound from '../../assets/sounds/beep.mp3';
import CountDown from '../modules/CountDown';
import motions from '../../../config/motions.json';

export default {
  components: {
    CountDown,
  },
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
      motions,
      date: "2023/2/2",
      checkbox: true,
      commitHover: false,
      commiting: false,
    }
  },
  setup () {

    const nf = Intl.NumberFormat();

    
    return { 
      nf
    }
  }
}
</script>
<template>
  <div class="p-2 max-w-md ">
    <div class="px-4 text-center mt-2">
      <p class="mt-8 uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
        ⚖️ GOVERNANCE ⚖️
      </p>
      <p class="uppercase text-lg tracking-widest text-gray-400 font-semibold">
        USE YOUR $BEEN TO VOTE
      </p>
    </div>
    <div class="mt-4 px-8">
      <div class="uppercase text-2xl tracking-widest font-semibold text-center p-4">
        {{ motions[0].prop }}
      </div>
      <div class="p-4 pl-6 my-2 font-bold text-sm text-left w-full rounded-xl cursor-pointer border border-gray-500 hover:bg-green-500 hover:text-white"
      :class="this.$store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'">
        {{motions[0].a}}
      </div>
      <div class="p-4 pl-6 my-2 font-bold text-sm text-left w-full rounded-xl cursor-pointer border border-gray-500 hover:bg-green-600 hover:border-yellow-500"
      :class="this.$store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'">
        {{motions[0].b}}
      </div>
      <div class="p-4 pl-6 my-2 font-bold text-sm text-left w-full rounded-xl cursor-pointer border border-gray-500 hover:bg-green-600 hover:border-yellow-500"
      :class="this.$store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'">
        {{motions[0].c}}
      </div>
      <div class="p-4 pl-6 my-2 font-bold text-sm text-left w-full rounded-xl cursor-pointer border border-gray-500 hover:bg-green-600 hover:border-yellow-500"
      :class="this.$store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'">
        {{motions[0].d}}
      </div>
    </div>

    <div class="mt-8 text-center uppercase text-sm tracking-widest font-semibold justify-center">
      <div class="uppercase text-s tracking-widest text-gray-400 font-semibold text-center ">
        CURRENT VOTING ENDS IN
      </div>
      <CountDown :target_date="motions[0].ends" class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400" />
    </div>
</div>

</template>
