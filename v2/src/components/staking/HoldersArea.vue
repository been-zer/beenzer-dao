<script>
import { ref, watchEffect } from 'vue';
import { shortWallet, markWallet } from '../../utils';
import { getTokenHolders } from '../../services/token/getTokenHolders';
import { useStore } from '../../services/store';

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

    const donutData = { 
      series: [400, 200, 120, 80, 70, 50, 45, 30, 20, 17, 12, 10, 8],
      chartOptions: {
        chart: {
          type: 'donut',
          foreColor: '#9CA3AF',
        },
        plotOptions: {
          pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                color: '#16a34a',
                label: 'Supply',
                formatter: () => '999916',
              }
            }
          }
        },
        },
        stroke:{
          colors:['#9CA3AF']
        },
        theme: {
          monochrome: {
            enabled: true,
            color: '#16a34a',
            shadeTo: store.state.dark ? 'dark' : 'light',
            shadeIntensity: 1
          }
        },
        legend: false,
        labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10', '#11', '#12', '#13', '#14' ],
        // responsive: [{
        //   breakpoint: 480,
        //   options: {
        //     chart: {
        //       width: 200
        //     },
        //     legend: {
        //       position: 'bottom'
        //     }
        //   }
        // }],
      },
    };


    return {
      store,
      holders,
      supply,
      nHolders,
      avgHolded,
      cluster,
      nf,
      donutData
    }
  }
}
</script>
<template>
  <div class="p-0 sm:p-2 text-center">
    <div class="mt-6 uppercase text-lg tracking-widest text-gray-400 font-semibold">
      STOCK
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
    <div class="mt-4 grid grid-cols-10 font-semibold text-gray-400 justify-center align-center align-middle pb-2">
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
    <lo class="max-w-sm h-48 flex flex-col align-start overflow-y-auto p-2 rounded-xl shadow-inner" 
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
    <div class="uppercase text-xs mt-8 px-2 sm:mx-8 tracking-widest text-gray-400 font-semibold">
      DISTRIBUTION BY WALLET
      <apexchart class="mt-4 flex justify-center" 
      type="donut" height="300" width="300" 
      :options="donutData.chartOptions" 
      :series="donutData.series" />
    </div>   
  </div>
</template>
