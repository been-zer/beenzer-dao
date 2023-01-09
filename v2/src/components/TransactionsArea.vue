<script lang="ts">
// import LineChart from './charts/lineChart.ts';
import { ref, watchEffect, Ref } from 'vue';
import { useStore } from '../services/store';
import { shortWallet, markWallet } from '../utils';
import { getTokenTransactions, TokenTransaction } from '../services/getTokenTransactions';

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
    const trans: Ref<TokenTransaction[]> = ref([]);
    const volume = ref(0);
    const minted = ref(0);
    const burned = ref(0);
    const transfer = ref(0);
    watchEffect(async () => {
      trans.value = await getTokenTransactions();
      let volu = 0; let mint = 0; let burn = 0; let tran = 0;
      trans.value.forEach((trans:TokenTransaction) => {
        volu += trans.amount;
        if (trans.type == '⛏️ Mint') mint += trans.amount;
        else if (trans.type == '🔥 Burn') burn += trans.amount;
        else if (trans.type == '💸 Transfer') tran += trans.amount;
      });
      volume.value = Math.floor(volu);
      minted.value = Math.floor(mint);
      burned.value = Math.floor(burn);
      transfer.value = Math.floor(tran);
    });
    const cluster = process.env.VUE_APP_CLUSTER;
    const nf = Intl.NumberFormat();    
    return {
      store,
      trans,
      volume,
      transfer,
      minted,
      burned,
      cluster,
      nf,
    }
  }
}
</script>
<template>
    <div class="p-0 sm:p-2 text-center">
      <div class="mt-6 uppercase text-lg tracking-widest text-gray-400 font-semibold">
        LAST 1,000
      </div>
      <div class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
        TRANSACTIONS
      </div>
      <div class="max-w-[365px] min-w-[280px] grid grid-cols-4 grid-flow-row gap-4 mt-4 align-center justify-center text-center">
        <div class="p-2 text-center -mr-4">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Volume
          </p>
          <p class="font-bold text-sm mt-2"
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'">
          {{ nf.format(volume).replaceAll(',', ' ') }}
          </p>
        </div>
        <div class="p-2 text-center ml-2">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Minted
          </p>
          <p class="font-bold text-sm mt-2"
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'">
          {{ nf.format(minted).replaceAll(',', ' ') }}
          </p>
        </div>
        <div class="p-2 text-center mr-2">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Burned
          </p>
          <p class="font-bold text-sm mt-2" 
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'" > 
          {{ nf.format(burned).replaceAll(',', ' ') }}
          </p>
        </div>
        <div class="p-2 text-center -ml-4">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Transfer
          </p>
          <p class="font-bold text-sm mt-2" 
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'" > 
          {{ nf.format(transfer).replaceAll(',', ' ') }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap" >
        <div class="w-full h-full mt-4">
          <div class=" grid grid-cols-12 font-semibold text-gray-400 hover:text-yellow-500 justify-center align-center align-middle pb-2">
            <div class="text-[11px] text-center col-span-2">
              Date
            </div>
            <div class="text-[11px] text-center col-span-2">
              Time
            </div>
            <div class="text-[11px] text-center col-span-2">
              Type
            </div>
            <div class="text-[11px] text-center col-span-2">
              BEEN
            </div>
            <div class="text-[11px] text-center col-span-2 ml-2">
              From
            </div>
            <div class="text-[11px] text-center col-span-1 ml-2">
              To
            </div>
          </div>
          <lo class="max-h-96 min-h-96 h-96 max-w-[365px] min-w-[280px] flex flex-col align-start overflow-y-auto p-2 rounded-xl shadow-inner" 
          :class="store.state.dark ? 'bg-gray-700 shadow-white/20' : 'bg-gray-200 shadow-black/20'">
            <div v-for="x of trans" :key="x.date+x.time">
              <a class=" grid grid-cols-12 hover:font-semibold hover:text-yellow-500 justify-center align-center align-middle"
              :class="store.state.dark ? 'text-gray-300' : 'text-gray-500'"
              :href="'https://solscan.io/tx/'+x.signature+'?cluster='+cluster" target="_blank" >
                <div class="text-[11px] text-left col-span-2" 
                :class="markWallet(store.state.pubkey, x.sender) ? 'text-green-400 font-bold hover:text-yellow-500' : ''">
                  {{ x.date }}
                </div>
                <div class="text-[11px] text-left col-span-2 ml-3" 
                :class="markWallet(store.state.pubkey, x.sender) ? 'text-green-400 font-bold hover:text-yellow-500' : ''">
                  {{ x.time }}
                </div>
                <div class="text-[11px] text-left col-span-3 ml-2" 
                :class="markWallet(store.state.pubkey, x.sender) ? 'text-green-400 font-bold hover:text-yellow-500' : ''">
                  {{ x.type }}
                </div>
                <div class="flex text-[11px] text-left -ml-4 col-span-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
                  <div class="mb-3 pl-1">
                    📍 
                  </div>
                  {{ nf.format(Math.floor(x.amount*100)/100).replaceAll(',', ' ') }}
                </div>
                <div class="z-0 text-[11px] text-left col-span-1"
                :class="markWallet(store.state.pubkey, x.sender) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold hover:text-yellow-500' : ''" >
                  {{ shortWallet(x.sender, 2) }}
                </div>
                <div class="text-[11px] text-right col-span-2"
                :class="markWallet(store.state.pubkey, x.receiver) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold hover:text-yellow-500' : ''" >
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
