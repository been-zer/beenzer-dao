<script lang="ts">
import { ref, watchEffect } from 'vue';
import { balanceSOL, balanceUSDC, balanceBEEN } from '../../services/wallets/getBalances';
import { useStore } from '../../services/store';

export default {


  setup () {

    const store = useStore();



    const SOL = ref(434);
    const USDC = ref(566);
    const BEEN = ref(333);
    const BEENZ = ref(877);
    watchEffect( async () => {
      SOL.value = await balanceSOL(store.state.pubkey);
      USDC.value = await balanceUSDC(store.state.pubkey);
      BEEN.value = await balanceBEEN(store.state.pubkey);
      // BEENZ.value = await balanceBEENZ(store.state.pubkey);
    });

    const donutData = { 
      series: [SOL.value, USDC.value, BEEN.value, BEENZ.value],
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
                color: '#fff',
                label: 'NAV',
                formatter: () => '$'+'177 323 283.46',
              }
            }
          }
        },
        },
        stroke:{
          colors:['#66000000'],
          width: 1
        },
        theme: {
          palette: 'palette3' // upto palette10
        },
        legend: false,
        labels: ['SOL', 'USDC', 'BEEN', 'BEENZ'],
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
      donutData
    }
  }
}
</script>
<template>
  <div class="px-4 text-center mt-10">
    <div class="px-4 text-center mt-2">
      <a :href="'https://solscan.io/token/DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy'" target="_blank" >
        <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
          YOUR
        </p>
        <p class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
          WALLET
        </p>
      </a>
    </div>
    <div class="mt-4">
      <apexchart class="mt-4 flex justify-center" 
      type="donut" height="300" width="300" 
      :options="donutData.chartOptions" 
      :series="donutData.series" />
    </div>
    <div class="mt-8">
      <div class="grid grid-cols-3">
        <button class="p-2 border-x border-t"
        :class="store.state.dark ? 'border-white/50' : 'border-black/50'">
          MINTING
        </button>
        <button class="p-2"
        :class="store.state.dark ? 'border-white/50' : 'border-black/50'">
          STAKING
        </button>
        <button class="p-2"
        :class="store.state.dark ? 'border-white/50' : 'border-black/50'">
          GOVERNANCE
        </button>
      </div>
      <div class="h-[293px] border-x border-b rounded-b-xl"
      :class="store.state.dark ? 'border-white/50' : 'border-black/50'">

      </div>
    </div>
  </div> 
</template>