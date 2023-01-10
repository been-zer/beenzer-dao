<script>
// import LineChart from './charts/lineChart.ts';
import { ref, watchEffect } from 'vue';
import { shortWallet, markWallet } from '../../utils';
import { useStore } from '../../services/store';
import { getTokenHolders } from '../../services/getTokenHolders';

export default {
  methods: {
    shortWallet,
    markWallet
  },
  setup () {
    const store = useStore();
    const holders = ref([]);
    const supply = ref(0);
    const nHolders = ref(0);
    const avgHolded = ref(0);
    watchEffect(async () => {
      holders.value = await getTokenHolders();
      supply.value = holders.value[0].supply;
      nHolders.value = holders.value.length;
      avgHolded.value = Math.floor((supply.value/nHolders.value));
    });
    const cluster = process.env.VUE_APP_CLUSTER;
    const nf = Intl.NumberFormat();    
    return {
      store,
      holders,
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
      <div class="mt-6 uppercase text-lg tracking-widest text-gray-400 font-semibold">
        RANKING
      </div>
      <div class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
        HOLDERS
      </div>
      <div class="max-w-[365px] min-w-[280px] grid grid-cols-4 grid-flow-row gap-4 mt-4 align-center justify-center text-center">
        <div class="p-2 text-center -mr-4">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
            Supply
          </p>
          <p class="font-bold text-sm mt-2"
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'">
          {{ nf.format(supply).replaceAll(',', ' ') }}
          </p>
        </div>
        <div class="p-2 text-center -mr-2">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
            Holders
          </p>
          <p class="font-bold text-sm mt-2"
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'">
          {{ holders.length }}
          </p>
        </div>
        <div class="p-2 text-center -ml-2">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Average
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
            Holded
          </p>
          <p class="font-bold text-sm mt-2" 
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'" > 
          {{ avgHolded }}
          </p>
        </div>
        <div class="p-2 text-center -ml-4">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
            Total
          </p>
          <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
            Flags
          </p>
          <p class="font-bold text-sm mt-2" 
          :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'" > 
          {{ 12 }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap" >
        <div class="w-full h-full mt-4">
          <div class=" grid grid-cols-10 font-semibold text-gray-400 justify-center align-center align-middle pb-2">
            <div class="text-[11px] text-left col-span-1">
              Rank
            </div>
            <div class="text-[11px] text-left col-span-2 ml-2">
              Percentage
            </div>
            <div class="text-[11px] text-center col-span-2 -ml-6">
              BEEN
            </div>
            <div class="text-[11px] text-center col-span-2 -ml-5">
              Owner
            </div>
            <div class="text-[11px] text-center col-span-2">
              Username
            </div>
            <div class="text-[11px] text-left col-span-1">
              Flag
            </div>
          </div>
          <lo class="h-[520px] max-w-[365px] min-w-[280px] flex flex-col align-start overflow-y-auto p-2 rounded-xl shadow-inner" 
          :class="store.state.dark ? 'bg-gray-700 shadow-white/20' : 'bg-gray-200 shadow-black/20'">
            <div v-for="x of holders" :key="x.ranking">
              <a class=" grid grid-cols-12 hover:font-semibold  justify-center align-center align-middle"
              :class="store.state.dark ? 'text-gray-300' : 'text-gray-500'"
              :href="'https://solscan.io/address/'+x.holder+'?cluster='+cluster" target="_blank" >
                <div class="text-[11px] text-left col-span-1 font-semibold" 
                :class="markWallet(store.state.pubkey, x.holder) ? 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600' : ''">
                  #{{ x.ranking }}
                </div>
                <div class="text-[11px] text-center col-span-2" 
                :class="markWallet(store.state.pubkey, x.holder) ? 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600' : ''">
                  {{ x.allocation }}
                </div>
                <div class="flex text-[11px] text-right col-span-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
                  <div class="text-xs mb-3 pl-1"> 
                    📍 
                  </div>
                  {{ nf.format(x.amount).replaceAll(',', ' ') }}
                </div>
                <div class="text-[11px] text-left col-span-2"
                :class="markWallet(store.state.pubkey, x.holder) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600 font-bold ' : 'text-grey-600'" >
                  {{ shortWallet(x.holder, 4) }}
                </div>
                <div class="text-[11px] text-right col-span-3"
                :class="markWallet(store.state.pubkey, x.holder) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600 font-bold ' : 'text-grey-600'" >
                  {{ 'username' }}
                </div>
                <div class="text-xs text-center col-span-1" >
                  {{ x.flag }}
                </div>
              </a>
            </div>
          </lo>
        </div>
    </div>
  </div>


</template>
