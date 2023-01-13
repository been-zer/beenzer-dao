<script lang="ts">
import { ref } from 'vue';
// import click_sound from '../../assets/sounds/beep.mp3';
import CountDown from '../modules/CountDown.vue';
import { useStore } from '../../services/store';

export default {
  components: {
    CountDown,
  },
  data() {
    return {
      date: "2023/1/1",
      date2: "2023/3/1",
      commitHover: false,
      commiting: false,
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
    const tokenSel = ref('BEENZ');
    const audio = new Audio('');
    const info = ref(false);

    function infoBtn () {
      info.value = !info.value;
    }

    // Keyboard functionality
    function clickNum (n:number) {
      if ( store.state.sound )
        audio.play();
      if (BEEN.value[0] === '0') {
        BEEN.value = String(n);
        BEENZER.value = String(Number(BEEN.value) * 4);
        USD.value = String(Math.floor((Number(BEEN.value) * (100-DISCOUNT)/100)*100)/100);
        SOL.value = String(Math.floor((Number(BEEN.value) / 14)*100)/100);
        return
      }
      if ( Number(BEEN.value)+n <= maxNumber ) {
        BEEN.value += n;
        BEENZER.value = String(Number(BEEN.value )* 4);
        if ( Number(BEEN.value)+n > 100000) {
          SOL.value = String(Math.floor((Number(BEEN.value) / 14)));
          USD.value = String(Math.floor((Number(BEEN.value) * (100-DISCOUNT)/100)));
        } else { 
          SOL.value = String(Math.floor((Number(BEEN.value) / 14)*100)/100);
          USD.value = String(Math.floor((Number(BEEN.value) * (100-DISCOUNT)/100)*100)/100);
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

    function tokenSelector (token:string) {
      tokenSel.value = token;
    }
    
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
      DISCOUNT,
      tokenSel,
      tokenSelector,
      info,
      infoBtn,
    }
  }
}
</script>
<template>
  <div class="m-auto w-full max-w-md p-2 mt-0">
    <div class="rounded-xl shadow-xl shadow-green-600" >
      <div class="rounded-xl pt-2 pb-6 relative" 
      :class="store.state.dark ? 'bg-gray-800 shadow-gray-700' : 'bg-white'">
        <button class="absolute right-6 top-6 font-bold rounded-full border w-7 h-7 hover:bg-white/30"
        :onclick="infoBtn"
        :class="store.state.dark ? 'border-gray-400' : 'border-gray-800'">
          <div v-if="info" class="text-center">
            ⛏️
          </div>
          <div v-else class="text-center">
            i
          </div>
        </button>
        <div v-if="info">
          <div class="px-4 text-center mt-10">
            <div class="px-4 text-center mt-2">
              <a :href="'https://solscan.io/token/DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy'" target="_blank" >
                <p class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
                  TOKENOMICS
                </p>
              </a>
              <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
                CONTRACTS
              </p>
            </div>
            <div class="grid grid-cols-2 mb-2">
              <button class="mt-8 mb-4 pb-2 uppercase tracking-widest font-semibold"
              :class="tokenSel==='BEEN' ? 'border-b-2 border-green-500 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400 text-2xl' : 'border-none text-xl'"
              :onclick="() => tokenSelector('BEEN')">
                $BEEN
              </button>
              <button class="mt-8 mb-4 pb-2 uppercase tracking-widest font-semibold"
              :class="tokenSel==='BEENZ' ? 'border-b-2 border-green-500 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400 text-2xl' : 'border-none text-xl'"
              :onclick="() => tokenSelector('BEENZ')">
                $BEENZ
              </button>
            </div>
            <div v-if="tokenSel==='BEEN'">
              <div class="mb-6">
                <h1 class="text-gray-400 p-1 font-semibold">
                  TOKEN ADDRESS
                </h1>
                <a class="text-sm hover:text-green-500 hover:font-semibold" target="_blank"
                href="https://solscan.io/token/DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy">
                  DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy
                </a>
              </div>
              <div class="border border-white/50 rounded-xl text-left pl-2 py-4 mb-[10px]">
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Token Type
                  </div>
                  <div class="ml-4">
                    🪙 &nbsp; Currency
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Maximum Supply
                  </div>
                  <div class="ml-4">
                    ♾️ &nbsp; Unlimited
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Decimals
                  </div>
                  <div class="ml-4">
                    ➗ &nbsp; 2
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Mint
                  </div>
                  <div class="ml-4">
                    ✅ &nbsp; TRUE
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Burn
                  </div>
                  <div class="ml-4">
                    ✅ &nbsp; TRUE
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Stake
                  </div>
                  <div class="ml-4">
                    ✅ &nbsp; TRUE
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Tradeable
                  </div>
                  <div class="ml-4">
                    ❌ &nbsp; FALSE
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Price
                  </div>
                  <div class="ml-4">
                    🏦 &nbsp; Fixed to $1
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    App Utility
                  </div>
                  <div class="ml-4">
                    ⛏️ &nbsp; Mint BEENZER
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Financial Utility
                  </div>
                  <div class="ml-4">
                    💸 &nbsp; Earn BEENZ
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Governance Utility
                  </div>
                  <div class="ml-4">
                    🗳️ &nbsp; Voting Rights
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="tokenSel==='BEENZ'">
              <div class="mb-6">
                <h1 class="text-gray-400 p-1 font-semibold">
                  TOKEN ADDRESS
                </h1>
                <a class="text-sm hover:text-green-500 hover:font-semibold" target="_blank"
                href="https://solscan.io/token/C883VsqqQoj39QpUzd54ncJes2Q8SubD24WWuDmsVa3n">
                  C883VsqqQoj39QpUzd54ncJes2Q8SubD24WWuDmsVa3n
                </a>
              </div>
              <div class="border border-white/50 rounded-xl text-left pl-2 py-4 mb-[10px]">
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Token Type
                  </div>
                  <div class="ml-4">
                    📜 &nbsp; Stock
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Maximum Supply
                  </div>
                  <div class="ml-4">
                    <span class="text-yellow-600 font-bold ml-1">
                      ₿ 
                    </span>
                    &nbsp; &nbsp; 21,000,000
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Decimals
                  </div>
                  <div class="ml-4">
                    ➗ &nbsp; 2
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Mint
                  </div>
                  <div class="ml-4">
                    ❌ &nbsp; FALSE
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Burn
                  </div>
                  <div class="ml-4">
                    ❌ &nbsp; FALSE
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Stake
                  </div>
                  <div class="ml-4">
                    ❌ &nbsp; FALSE
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Tradeable
                  </div>
                  <div class="ml-4">
                    ✅ &nbsp; TRUE
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Price
                  </div>
                  <div class="ml-4">
                    📈 &nbsp; Market Price
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    App Utility
                  </div>
                  <div class="ml-4">
                    💱 &nbsp; Money Transfer
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Financial Utility
                  </div>
                  <div class="ml-4">
                    <span class="text-purple-500 font-bold">
                      ☉ 
                    </span>
                    &nbsp; &nbsp;SOL Dividend
                  </div>
                </div>
                <div class="grid grid-cols-2 p-2">
                  <div class="uppercase font-semibold">
                    Governance Utility
                  </div>
                  <div class="ml-4">
                    💪 &nbsp; Voting Power
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="(!info)">
          <div class="px-4 text-center mt-4">
            <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
              MINT OPEN
            </p>
            <a :href="'https://solscan.io/token/DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy'" target="_blank" >
              <p class="uppercase text-6xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
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
          <div class="py-4 text-center uppercase tracking-widest font-semibold justify-center border-1 rounded-xl -my-3">
            <div class="grid grid-cols-4 grid-flow-row align-center justify-center mb-4 px-4 text-center">
              <div class="text-center">
                <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">
                  SOL
                </p>
                <div class="flex justify-center" >
                  <p class="font-bold text-md mt-2"
                    :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                  > -{{ nf.format(Number(SOL)).replaceAll(',', ' ') }}</p>
                </div>
              </div>
              <div class="text-center">
                <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">
                  USD
                </p>
                <div class="flex justify-center" >
                  <p class="lowercase font-bold text-md mt-2"
                    :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                  > -{{ nf.format(Number(USD)).replaceAll(',', ' ') }}</p>
                </div>
              </div>
              <div class="text-center">
                <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">
                  BEEN
                </p>
                <div class="flex justify-center" >
                  <p class="lowercase font-bold text-md mt-2"
                    :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                  > +{{ nf.format(Number(BEEN)).replaceAll(',', ' ') }}</p>
                </div>
              </div>
              <div class="text-center">
                <p class="uppercase text-md tracking-widest text-gray-400 font-semibold">
                  BEENZER
                </p>
                <div class="flex justify-center" >
                  <p class="font-bold text-md mt-2"
                    :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
                  > +{{ nf.format(Number(BEENZER)).replaceAll(',', ' ') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="font-bold text-4xl text-center p-5 rounded-xl mx-6 mt-2 cursor-pointer border border-green-600"
          :class="store.state.dark ? 'bg-gray-600 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-200'"
          @click="$emit('commit', BEEN)"
          @mouseover="commitHover=true"
          @mouseleave="commitHover=false">
            <div class="text-2xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600" v-if="commitHover">
              <a class="text-xl mr-5 ">
                ⛏️ MINT 
              </a>
              {{ nf.format(Number(BEEN)).replaceAll(',', ' ') }}
              <a class="text-2xl ml-4">
                BEEN </a>
            </div>
            <div v-else>{{ nf.format(Number(BEEN)).replaceAll(',', ' ') }} </div>
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
    </div>
  </div>
</div>
</template>
