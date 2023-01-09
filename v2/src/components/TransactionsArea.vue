<script>
// import LineChart from './charts/lineChart.ts';
import { ref, watchEffect } from 'vue';
import { useStore } from '../services/store';
import { shortWallet, markWallet } from '../utils';
import { getTokenTransactions } from '../services/getTokenTransactions';

export default {
  methods: {
    shortWallet,
    markWallet
  },
  components: {
    // LineChart,
  },
  setup () {
    const store = useStore();
    const trans = ref([]);
    const supply = ref(0);
    const nHolders = ref(0);
    const avgHolded = ref(0);
    watchEffect(async () => {
      trans.value = await getTokenTransactions();
      // supply.value = transfers.value[0].supply;
      // nHolders.value = transfers.value.length;
      // avgHolded.value = Math.floor((supply.value/nHolders.value)*10000)/100;
    });
    const cluster = process.env.VUE_APP_CLUSTER;
    const nf = Intl.NumberFormat();    
    return {
      store,
      trans,
      supply,
      nHolders,
      avgHolded,
      cluster,
      nf
    }
  }
}
</script>
<template>
    <div class="p-0 sm:p-2 text-center">
      <div class="uppercase text-sm tracking-widest text-gray-400 font-semibold mt-8">
        HISTORICAL
      </div>
      <div class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
        TRANSACTIONS
      </div>
      <div class="grid grid-cols-3 grid-flow-row gap-4 mt-8 align-center justify-center text-center">
        <div class="p-2 text-center">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Volume
          </p>
          <div class="flex justify-center" >
            <p class="font-bold text-lg mt-2"
              :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
            >{{ nf.format(0).replaceAll(',', ' ') }}</p>
          </div>
        </div>
        <div class="p-2 text-center">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Last
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            24H
          </p>
          <div class="flex justify-center" >
            <p class="font-bold text-lg mt-2"
              :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'"
            >{{ 0 }}</p>
          </div>
        </div>
        <div class="p-2 text-center">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Average
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Transaction
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
            HOLDERS RANKING
          </div>
          <lo class="max-h-96 min-h-96 h-96 max-w-[365px] min-w-[365px] flex flex-col align-start overflow-y-auto p-2 rounded-xl shadow-inner" 
          :class="store.state.dark ? 'bg-gray-700 shadow-white/20' : 'bg-gray-200 shadow-black/20'">
            <div v-for="x of trans" :key="x.date+x.time">
              <a class=" grid grid-cols-12 hover:font-semibold hover:text-yellow-500 justify-center align-center align-middle"
              :class="store.state.dark ? 'text-gray-300' : 'text-gray-500'"
              :href="'https://solscan.io/tx/'+x.signature+'?cluster='+cluster" target="_blank" >
                <div class="text-xs text-left col-span-2" 
                :class="markWallet(store.state.pubkey, x.holder) ? 'text-green-400 font-bold hover:text-yellow-500' : ''">
                  {{ x.date }}
                </div>
                <div class="text-xs text-left col-span-2 ml-3" 
                :class="markWallet(store.state.pubkey, x.holder) ? 'text-green-400 font-bold hover:text-yellow-500' : ''">
                  {{ x.time }}
                </div>
                <div class="text-xs text-left col-span-3 ml-2" 
                :class="markWallet(store.state.pubkey, x.holder) ? 'text-green-400 font-bold hover:text-yellow-500' : ''">
                  {{ x.type }}
                </div>
                <div class="flex text-xs text-center col-span-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
                  <div class="text-xs mb-3 pl-1 pr-1">
                    📍 
                  </div>
                  {{ nf.format(Math.floor(x.amount*100)/100).replaceAll(',', ' ') }}
                </div>
                <div class="text-xs text-left col-span-1"
                :class="markWallet(store.state.pubkey, x.holder) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold hover:text-yellow-500' : 'text-grey-600'" >
                  {{ shortWallet(x.sender, 2) }}
                </div>
                <div class="text-xs text-right col-span-2"
                :class="markWallet(store.state.pubkey, x.holder) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold hover:text-yellow-500' : 'text-grey-600'" >
                  {{ shortWallet(x.receiver, 2) }}
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
