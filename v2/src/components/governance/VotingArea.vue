
<script>
import { ref } from 'vue';
import click_sound from '../../assets/sounds/beep.mp3';
import CountDown from '../modules/CountDown';

export default {
  components: {
    CountDown,
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
  },
  setup () {

    const sound = true; // storeeee

    const BEEN = ref('0');
    const BEENZ = ref('0');
    const DISCOUNT = 30;
    const USD = ref('0');
    const SOL = ref('0');
    const nf = Intl.NumberFormat();
    const maxNumber = 1000000;
    const audio = new Audio(click_sound);

    // Keyboard functionality
    function clickNum (n) {
      if ( sound )
        audio.play();

      if (BEEN.value[0] === '0') {
        BEEN.value = String(n);
        BEENZ.value = BEEN.value * 4;
        USD.value = Math.floor((BEEN.value * (100-DISCOUNT)/100)*100)/100;
        SOL.value = Math.floor((BEEN.value / 14)*100)/100;
        return
      }
      if ( BEEN.value+n <= maxNumber ) {
        BEEN.value += n;
        BEENZ.value = BEEN.value * 4;
        if ( BEEN.value+n > 100000) {
          SOL.value = Math.floor((BEEN.value / 14));
          USD.value = Math.floor((BEEN.value * (100-DISCOUNT)/100));
        } else { 
          SOL.value = Math.floor((BEEN.value / 14)*100)/100;
          USD.value = Math.floor((BEEN.value * (100-DISCOUNT)/100)*100)/100;
        }
        return
      }
      else
        return alert(`Number must be between 1 and ${nf.format(maxNumber)}, including both.`)     
    }
    function deleteNum () {
      if (BEEN.value.length > 1)
        BEEN.value = BEEN.value.slice(0, -1);
      else resetNum();
    }
    function resetNum () {
      SOL.value = '0';
      USD.value = '0';
      BEEN.value = '0';
      BEENZ.value = '0';
    }

    const commitPop = ref(false);
    
    return { 
      clickNum,
      deleteNum,
      resetNum,
      nf,
      location,
      commitPop,
      USD,
      BEEN,
      BEENZ,
      SOL,
      DISCOUNT
    }
  }
}
</script>
<template>
  <div class="p-2 max-w-md ">
    <!-- Title Box -->
    <div class="px-4 mt-8 text-center mt-2">
          <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
            GOVERNANCE
          </p>
          <p class="uppercase text-6xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
            BEENZER
          </p>
          <p class="mt-6 tracking-widestfont-semibold py-4 text-center uppercase text-sm tracking-widest font-semibold justify-center">
            ⚖️ USE YOUR TOKENS TO VOTE ⚖️
            </p>
          <div class="py-4 text-center uppercase text-sm tracking-widest font-semibold justify-center">

            <div class="pl-2 pt-2">
            
              <p class="uppercase text-xl tracking-widestfont-semibold">
              NEXT VOTING ENDS IN
            </p>
              <CountDown :target_date="date" class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400" />
            </div>    

          </div>
        </div>

      
        <div class="uppercase  mt-4 text-s tracking-widest text-gray-400 font-semibold text-center ">
          WEEKLY PROPOSAL:
        </div>
        
          <div class="uppercase text-2xl px-8 tracking-widest text-gray-400 font-semibold text-center p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400">
            SHOULD WE OPEN AN INSTAGRAM ACCOUNT?
          </div>

        <div class="ml-1 mr-2">
          <div class="flex mt-4 text-center ">
            <div class="inline-block align-middle uppercase p-4 text-lg tracking-widest text-gray-400 font-semibold">
              A.
            </div>
            <div class="font-bold text-md text-center -ml-2 py-4 px-2 w-full rounded-xl mx-4 cursor-pointer border border-gray-500 hover:bg-green-600 hover:border-yellow-500"
            :class="this.$store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'">
            👍 YES! MANY POTENTIAL USERS CAN BE FOUND THERE!          
            </div>
          </div>

          <div class="flex mt-4">
            <div class="uppercase p-4 text-lg tracking-widest text-gray-400 font-semibold text-center justify-center ">
              B.
            </div>
            <div class="font-bold text-md text-center -ml-2 py-4 px-2 w-full rounded-xl mx-4 cursor-pointer border border-gray-500 hover:bg-green-600 hover:border-yellow-500"
            :class="this.$store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'">
            👎 NO! INSTAGRAM IS EVIL! FUCK FACEBOOK! FUCK WEB2!
            </div>
          </div>

          <div class="flex mt-4">
            <div class="uppercase p-4 text-lg tracking-widest text-gray-400 font-semibold text-center justify-center ">
              C.
            </div>
            <div class="font-bold text-md text-center -ml-2 py-4 px-2 w-full rounded-xl mx-4 cursor-pointer border border-gray-500 hover:bg-green-600 hover:border-yellow-500"
            :class="this.$store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'">
            💯 WE SHOULD HAVE AN ACCOUNT IN EVERY SOCIAL MEDIA PLATFORM.
            </div>
          </div>

          <div class="flex mt-4">
            <div class="uppercase p-4 text-lg tracking-widest text-gray-400 font-semibold text-center justify-center ">
              D.
            </div>
            <div class="font-bold text-md text-center -ml-2 py-4 px-2 w-full rounded-xl mx-4 cursor-pointer border border-gray-500 hover:bg-green-600 hover:border-yellow-500"
            :class="this.$store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'">
            💀 WHO CARES! NOT AN IMPORTANT QUESTION... NEXT!
            </div>
          </div>
        </div>

      <div>
  </div>
</div>

</template>
