<script>
// import LineChart from './charts/lineChart.ts';
import { shortWallet, markWallet } from '../utils';
import { useStore } from '../services/store';

export default {
  props: [
    'history',
    'totalCountries',
    'totalPlayers',
    'maxPot',
    'avgPot',
    'chartData',
    'chartLabels',
    'wallet'
  ],
  methods: {
    shortWallet,
    markWallet
  },
  components: {
    // LineChart,
  },
  setup() {
    const store = useStore();

    return { store };
  }
}
</script>

<template>
<div class="p-2 text-center">
  <div class="uppercase text-sm tracking-widest text-gray-400 font-semibold mt-8">
    HISTORICAL
  </div>
  <div class="uppercase text-3xl tracking-widest  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
    TRANSACTIONS
  </div>
  <div class="grid grid-cols-4 grid-flow-row gap-4 align-center justify-center text-center">
    <div class="p-2 text-center">
      <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">Total</p>
      <p class="uppercase text-xs tracking-widest text-gray-400 font-semibold">Countries</p>
      <div class="flex justify-center" >
        <p class="font-bold text-lg mt-2"
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
        >{{ 12 }}</p>
      </div>
    </div>
    <div class="p-2 text-center">
      <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">Total</p>
      <p class="uppercase text-xs tracking-widest text-gray-400 font-semibold">Players</p>
      <div class="flex justify-center" >
        <p class="font-bold text-lg mt-2"
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
        >{{ 34 }}</p>
      </div>
    </div>
    <div class="p-2 text-center">
      <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">Average</p>
      <p class="uppercase text-xs tracking-widest text-gray-400 font-semibold">SOLPOT</p>
      <div class="flex justify-center" >
        <p class="font-bold text-lg mt-2" :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'" > 
          <span class="text-sm text-gray-400">
            ◎ </span>
          {{ avgPot }}</p>
      </div>
    </div>
    <div class="p-2 text-center mr-2">
      <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">Greatest</p>
      <p class="uppercase text-xs tracking-widest text-gray-400 font-semibold">SOLPOT</p>
      <div class="flex justify-center" >
        <p class="font-bold text-lg mt-2"
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
        > <span class="text-sm text-gray-400">
          ◎ </span>
          {{ maxPot }}</p>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap" >
    <div class="w-full h-full">
      <div class="uppercase text-xs mb-4 mt-4 tracking-widest text-gray-400 font-semibold">
        HOLDERS DISTRIBUTION
      </div>
      <lo class="max-h-96 min-h-96 h-96 flex flex-col align-start overflow-y-auto p-2 rounded-xl shadow-inner" 
      :class="store.state.dark ? 'bg-gray-700 shadow-white/20' : 'bg-gray-200 shadow-black/20'">
        <div v-for="x of holders" :key="x.ranking" >
          <a class="hover:font-semibold hover:text-green-500 grid grid-cols-10 justify-center align-center align-middle"
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-500'"
          :href="'https://solscan.io/address/'+x.holder+'?cluster='+cluster" target="_blank" >
            <div class="text-xs text.left col-span-1 font-semibold " 
            :class="markWallet(store.state.pubkey, x.holder) ? 'text-green-400 font-bold hover:text-green-500' : ''">
              {{ x.ranking }}
            </div>
            <div class="text-xs text.left col-span-2" 
            :class="markWallet(store.state.pubkey, x.holder) ? 'text-green-400 font-bold hover:text-green-500' : ''">
              {{ x.allocation }}
            </div>
            <div class="flex text-xs text-right col-span-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
              <div class="text-xs mb-3 pl-1 pr-1"> 
                📍 
              </div>
              {{ nf.format(x.amount).replaceAll(',', ' ') }}
            </div>
            <div class="flex text-xs text-right col-span-3"
            :class="markWallet(store.state.pubkey, x.holder) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold' : 'text-grey-600'" >
              {{ shortWallet(x.holder, 6) }}
            </div>
            <div class="text-xs text-center col-span-1" >
              {{ x.flag }}
            </div>
          </a>
        </div>
      </lo>
    </div>
      <!-- <div class="w-1/2"> -->
        <!-- <Bar class="m-h-24 h-24" /> -->
        <!-- <div class="uppercase text-xs mt-3 tracking-widest text-gray-400 font-semibold">
          Cumulative SOLPOT -->
          <!-- <LineChart class="m-h-52 h-52" :chartData="chartData" :chartLabels="chartLabels" /> -->
        <!-- </div>
      </div> -->
      <!-- <div class="uppercase text-xs mt-2 tracking-widest text-gray-400 font-semibold">
        POT country distribution
        <PolarChart class="m-h-24 h-24"/>
      </div> -->
  </div>
</div>
</template>
