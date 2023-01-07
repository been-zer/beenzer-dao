<script>
// import LineChart from './charts/lineChart.ts';
import { shortWallet, markWallet } from '../utils';
import { useStore } from '../services/store';
import { getTokenHoldersSocket } from '../services/sockets/token.socket';

export default {
  methods: {
    shortWallet,
    markWallet
  },
  components: {
    // LineChart,
  },
  setup () {
    getTokenHoldersSocket();
    const store = useStore();
    const nf = Intl.NumberFormat();    
    return {
      store, 
      nf
    }
  }
}
</script>
<template>
    <div class="p-2 text-center min-w-[423px]">
      <div class="uppercase text-sm tracking-widest text-gray-400 font-semibold mt-8">
        CURRENT
      </div>
      <div class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
        HOLDERS
      </div>
      <div class="grid grid-cols-3 grid-flow-row gap-4 mt-8 align-center justify-center text-center">
        <div class="p-2 text-center">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Supply
          </p>
          <div class="flex justify-center" >
            <p class="font-bold text-lg mt-2"
              :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
            >{{ 1000000 }}</p>
          </div>
        </div>
        <div class="p-2 text-center">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Holders
          </p>
          <div class="flex justify-center" >
            <p class="font-bold text-lg mt-2"
              :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
            >{{ 1200 }}</p>
          </div>
        </div>
        <div class="p-2 text-center">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Average
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Holded
          </p>
          <div class="flex justify-center" >
            <p class="font-bold text-lg mt-2" 
            :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'" > 
              {{ 33 }} BEEN</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap" >
        <div class="w-full h-full">
          <div class="uppercase text-xs mb-4 mt-4 tracking-widest text-gray-400 font-semibold">
            HOLDERS DISTRIBUTION
          </div>
          <lo class="flex flex-col flex-grow overflow-y-auto bg-gray-100 p-2 rounded-xl shadow-inner" :class="store.state.dark ? 'bg-gray-700' : 'bg-text-gray-200'">
            <div v-for="x of store.state.holders" :key="x.__date__" >
              <div class="hover:font-semibold grid grid-cols-12 justify-center align-center align-middle"  :class="store.state.dark ? 'text-gray-200' : 'bg-text-gray-800'">
                <div class="text-xs text.left   col-span-3"  :class="markWallet(wallet, x._owner) ? 'text-green-400 font-bold' : 'text-grey-600'">
                  {{ x.__date__ }}
                </div>
                <div class="text-xs text-right col-span-2 font-semibold flex text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
                  <div class="text-xs mb-3 pl-1 pr-1"> 📍 </div>{{ x._pot }}
                </div>
                <div class="text-xs text-left col-span-3"  :class="markWallet(wallet, x._owner) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold' : 'text-grey-600'" >
                  {{ shortWallet(x._owner, 4) }}
                </div>
                <div class="text-xs text-center col-span-1" >
                  {{ x._flag }}
                </div>
                <div class="text-xs text-center col-span-3"  :class="markWallet(wallet, x._owner) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold' : 'text-grey-600'" > 
                  {{ nf.format(x._num).replaceAll(',', ' ') }}
                </div>
              </div>
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
