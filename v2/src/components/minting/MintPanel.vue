<script>
import { ref } from 'vue';
import click_sound from '../../assets/sounds/beep.mp3';
import MintSwitcher from '../modules/switchers/MintSwitcher.vue';
import CountDown from '../modules/CountDown';
import { useStore } from '../../services/store';

export default {
  components: {
    CountDown,
    MintSwitcher,
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
      date: "2023/1/1",
      date2: "2023/3/1",
      checkbox: true,
      commitHover: false,
      commiting: false
    }
  },
  setup () {

    const store = useStore();
    const BEEN = ref('0');
    const BEENZER = ref('0');
    const DISCOUNT = 30;
    const USD = ref('0');
    const SOL = ref('0');
    const nf = Intl.NumberFormat();
    const maxNumber = 1000000;
    const audio = new Audio(click_sound);

    // Keyboard functionality
    function clickNum (n) {
      if ( store.state.sound )
        audio.play();

      if (BEEN.value[0] === '0') {
        BEEN.value = String(n);
        BEENZER.value = BEEN.value * 4;
        USD.value = Math.floor((BEEN.value * (100-DISCOUNT)/100)*100)/100;
        SOL.value = Math.floor((BEEN.value / 14)*100)/100;
        return
      }
      if ( BEEN.value+n <= maxNumber ) {
        BEEN.value += n;
        BEENZER.value = BEEN.value * 4;
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
      BEENZER.value = '0';
    }

    const commitPop = ref(false);
    
    return {
      store,
      clickNum,
      deleteNum,
      resetNum,
      nf,
      location,
      commitPop,
      USD,
      BEEN,
      BEENZER,
      SOL,
      DISCOUNT
    }
  }
}
</script>
<template>
  <!-- Mint Panel. -->
  <div class="m-auto w-full max-w-md p-2 mt-0">

    <div class="rounded-xl shadow-xl" :class="this.checkbox ? 'shadow-green-600' : 'shadow-red-600'" >
    <div class="rounded-xl pt-2 pb-6" :class="store.state.dark ? 'bg-gray-800 shadow-gray-700' : 'bg-white'">
      <div class="flex justify-center px-4 text-center mt-10">
        <div class="text-xl px-4">⛏️</div>
          <MintSwitcher @checkbox="(checkbox) => checkBox(checkbox)" class="pt-1 pl-1" />
        <div class="text-xl px-4">🔥</div>
      </div>

      <div v-if="checkbox">
        <!-- Title Box -->
        <div class="px-4 text-center mt-4">
          <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
            MINT OPEN
          </p>
          <a :href="'https://solscan.io/token/DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy'" target="_blank" >
            <p class="uppercase text-6xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
              $BEEN
            </p>
          </a>
          <div class="py-4 text-center uppercase text-sm tracking-widest font-semibold justify-center">
            <div class="pl-2 pt-2">
              <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
                DISC. {{ DISCOUNT }}% 🎉 FINISHES
              </p>
              <p class="uppercase text-3xl tracking-widestfont-semibold">
                FEB  1  2023 
              </p>
              <CountDown :target_date="date" class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400" />
            </div>    
          </div>
        </div>

        <!-- Amounts boxes -->
        <div class="py-4 text-center uppercase tracking-widest font-semibold justify-center border-1 rounded-xl -my-3">
          <div class="grid grid-cols-4 grid-flow-row align-center justify-center mb-4 px-4 text-center">
            <div class="text-center">
              <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">
                SOL
              </p>
              <div class="flex justify-center" >
                <p class="font-bold text-md mt-2"
                  :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                > -{{ nf.format(SOL).replaceAll(',', ' ') }}</p>
              </div>
            </div>
            <div class="text-center">
              <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">
                USD
              </p>
              <div class="flex justify-center" >
                <p class="lowercase font-bold text-md mt-2"
                  :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                > -{{ nf.format(USD).replaceAll(',', ' ') }}</p>
              </div>
            </div>
            <div class="text-center">
              <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">
                BEEN
              </p>
              <div class="flex justify-center" >
                <p class="lowercase font-bold text-md mt-2"
                  :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                > +{{ nf.format(BEEN).replaceAll(',', ' ') }}</p>
              </div>
            </div>
            <div class="text-center">
              <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">
                BEENZER
              </p>
              <div class="flex justify-center" >
                <p class="font-bold text-md mt-2"
                  :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                > +{{ nf.format(BEENZER).replaceAll(',', ' ') }}</p>
              </div>
            </div>
          </div>
        </div>


        <!-- <div class="uppercase text-s tracking-widest text-gray-400 font-semibold text-center mb-4 -mt-2">
          Pick your amount
        </div> -->

        <div class="font-bold text-4xl text-center p-5 rounded-xl mx-6 mt-2 cursor-pointer border border-green-600"
        :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'"
        @click="$emit('commit', BEEN)"
        @mouseover="commitHover=true"
        @mouseleave="commitHover=false">
          <div class="text-2xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600" v-if="commitHover">
            <a class="text-xl mr-5 ">
              ⛏️ MINT 
            </a>
            {{ nf.format(BEEN).replaceAll(',', ' ') }}
            <a class="text-2xl ml-4">
              BEEN </a>
          </div>
          <div v-else>{{ nf.format(BEEN).replaceAll(',', ' ') }} </div>
        </div>
        
        <div class="grid grid-cols-3 gap-1 text-s font-semibold text-center py-4 px-6 rounded-xl">
          <button @click="clickNum(1)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-tl-xl align-middle relative border">1</button>
          <button @click="clickNum(2)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">2</button>
          <button @click="clickNum(3)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-tr-xl align-middle relative border">3</button>
          <button @click="clickNum(4)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">4</button>
          <button @click="clickNum(5)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">5</button>
          <button @click="clickNum(6)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">6</button>
          <button @click="clickNum(7)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-bl-xl align-middle relative border">7</button>
          <button @click="clickNum(8)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">8</button>
          <button @click="clickNum(9)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-br-xl align-middle relative border">9</button>
          <button @click="resetNum()"  :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-2 px-2 rounded-3xl m-3 align-middle relative border">↻</button>
          <button @click="clickNum(0)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-b-xl align-middle relative border">0</button>
          <button @click="deleteNum()" :class="store.state.dark ? 'bg-gray-600 hover:bg-green-600' : 'bg-gray-50 hover:bg-green-600'" class="py-2 px-2 rounded-3xl m-3 align-middle relative border border-green-600">⛏️</button>          
        <div/>

      </div>

      </div>
      <div v-else>
        <!-- Title Box -->
        <div class="px-4 text-center mt-4">
          <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
            BURN CLOSE
          </p>
          <a :href="'https://solscan.io/token/DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy'" target="_blank" >
            <p class="uppercase text-6xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              $BEEN
            </p>
          </a>
          <div class="py-4 text-center uppercase text-sm tracking-widest font-semibold justify-center">
            <div class="pl-2 pt-2">
              <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
                BURN 🔥 STARTS
              </p>
              <p class="uppercase text-3xl tracking-widestfont-semibold">
                APRIL  1  2023 
              </p>
              <CountDown :target_date="date2" class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400" />
            </div>    

          </div>
        </div>

        <!-- Amounts boxes -->
        <div class="py-4 text-center uppercase tracking-widest font-semibold justify-center border-1 rounded-xl -my-3">
          <div class="grid grid-cols-4 grid-flow-row align-center justify-center mb-4 px-4 text-center">
            <div class="text-center">
              <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">SOL</p>
              <div class="flex justify-center" >
                <p class="font-bold text-md mt-2"
                  :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                > +{{ nf.format(SOL).replaceAll(',', ' ') }}</p>
              </div>
            </div>
            <div class="text-center">
              <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">USD</p>
              <div class="flex justify-center" >
                <p class="lowercase font-bold text-md mt-2"
                  :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                > +{{ nf.format(USD).replaceAll(',', ' ') }}</p>
              </div>
            </div>
            <div class="text-center">
              <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">BEEN</p>
              <div class="flex justify-center" >
                <p class="lowercase font-bold text-md mt-2"
                  :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                > -{{ nf.format(BEEN).replaceAll(',', ' ') }}</p>
              </div>
            </div>
            <div class="text-center">
              <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">BEENZ</p>
              <div class="flex justify-center" >
                <p class="font-bold text-md mt-2"
                  :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                > -{{ nf.format(BEENZ).replaceAll(',', ' ') }}</p>
              </div>
            </div>
          </div>
        </div>



        <div class="font-bold text-4xl text-center p-5 rounded-xl mx-6 mt-2 cursor-pointer border border-red-600"
        :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'"
        @click="$emit('commit', BEEN)"
        @mouseover="commitHover=true"
        @mouseleave="commitHover=false">
          <div class="text-2xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600" v-if="commitHover">
            <a class="text-xl mr-5">
              🔥 BURN 
            </a>
            {{ nf.format(BEEN).replaceAll(',', ' ') }}
            <a class="text-2xl ml-4 ">
              BEEN </a>
          </div>
          <div v-else>{{ nf.format(BEEN).replaceAll(',', ' ') }} </div>
        </div>
        
        <div class="grid grid-cols-3 gap-1 text-s font-semibold text-center py-4 px-6 rounded-xl">
          <button @click="clickNum(1)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-tl-xl align-middle relative border">1</button>
          <button @click="clickNum(2)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">2</button>
          <button @click="clickNum(3)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-tr-xl align-middle relative border">3</button>
          <button @click="clickNum(4)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">4</button>
          <button @click="clickNum(5)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">5</button>
          <button @click="clickNum(6)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">6</button>
          <button @click="clickNum(7)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-bl-xl align-middle relative border">7</button>
          <button @click="clickNum(8)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 align-middle relative border">8</button>
          <button @click="clickNum(9)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-br-xl align-middle relative border">9</button>
          <button @click="resetNum()"  :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-2 px-2 rounded-3xl m-3 align-middle relative border">↻</button>
          <button @click="clickNum(0)" :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-400 border-gray-500' : 'bg-gray-50 hover:bg-gray-200 border-gray-100'" class="py-4 px-2 rounded-b-xl align-middle relative border">0</button>
          <button @click="deleteNum()" :class="store.state.dark ? 'bg-gray-600 hover:bg-red-600' : 'bg-gray-50 hover:bg-red-600'" class="py-2 px-2 rounded-3xl m-3 align-middle relative border border-red-600">🔥</button>          
        <div/>

      </div>
      </div>
      <div>
    </div>
    </div>
  </div>
</div>

</template>
