<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { ref, watchEffect, Ref } from 'vue';
import { useStore } from '../../services/store';
import { shortWallet, markWallet } from '../../utils';
import { getTokenTransactions, TokenTransaction } from '../../services/token/getTokenTransactions';

export default {
  methods: {
    shortWallet,
    markWallet
  },
  setup () {
    const store = useStore();
    const volume = ref(0);
    const minted = ref(0);
    const burned = ref(0);
    const transfer = ref(0);
    const mintedArr: Ref<Array<any>> = ref([]);
    const burnedArr: Ref<Array<any>> = ref([]);
    const transferArr: Ref<Array<any>> = ref([]);
    const trans: Ref<TokenTransaction[]> = ref([]);
    watchEffect(async () => {
      trans.value = await getTokenTransactions();
      let volu = 0; let mint = 0; let burn = 0; let tran = 0; 
      trans.value.forEach((trans:TokenTransaction) => {
        volu += trans.amount;
        const dt = new Date(trans.date+' '+trans.time).getTime();
        if (trans.type == '⛏️ Mint') { 
          mint += trans.amount; 
          mintedArr.value.push({x: dt, y: mint })
        } else if (trans.type == '🔥 Burn') {
          burn += trans.amount;
          burnedArr.value.push({x: dt, y: burn })
        } else if (trans.type == '💸 Transfer') {
          tran += trans.amount;
          transferArr.value.push({x: dt, y: tran })
        }
      });
      volume.value = Math.floor(volu);
      minted.value = Math.floor(mint);
      burned.value = Math.floor(burn);
      transfer.value = Math.floor(tran);
      mint
    });
    const cluster = process.env.VUE_APP_CLUSTER;
    const nf = Intl.NumberFormat();    
    var barChart = {
          series: [{
          name: 'EXPIRED CONTRACTS',
          data: [44, 55, 41, 67, 22, 43, 10, 2, 0, 0]
        }, {
          name: 'LIVE CONTRACTS',
          data: [11, 17, 15, 15, 21, 14, 8, 4, 2, 1]
        }],
          chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        xaxis: {
          type: 'text',
          categories: ['1W', '2W', '1M', '3M', '6M',
            '1Y', '2Y', '3Y', '5Y', '10Y'
          ],
        },
        legend: {
          position: 'bottom',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
    };
    return {
      store,
      trans,
      volume,
      transfer,
      minted,
      burned,
      cluster,
      nf,
      barChart,
    }
  }
}
</script>
<template>
  <div class="p-0 sm:p-2 text-center">
    <div class="mt-6 uppercase text-lg tracking-widest text-gray-400 font-semibold">
      STAKE
    </div>
    <div class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
      CONTRACTS
    </div>
    <div class="max-w-[365px] min-w-[280px] grid grid-cols-4 grid-flow-row gap-4 mt-4 align-center justify-center text-center">
      <div class="p-2 text-center -mr-4">
        <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
          BEEN
        </p>
        <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
          Staked
        </p>
        <p class="font-bold text-sm mt-2"
        :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'">
        {{'420 666' }}
        </p>
      </div>
      <div class="p-2 text-center -mr-2">
        <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
          BEENZ
        </p>
        <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
          Earned
        </p>
        <p class="font-bold text-sm mt-2"
        :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'">
        {{ '192 353' }}
        </p>
      </div>
      <div class="p-2 text-center -ml-4">
        <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
          Contracts
        </p>
        <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
          Live
        </p>
        <p class="font-bold text-sm mt-2" 
        :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'" > 
        {{ '📜 40 292' }}
      </p>
    </div>
    <div class="p-2 text-center -ml-2">
      <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">
        Contracts
      </p>
      <p class="uppercase text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
        Expired
      </p>
      <p class="font-bold text-sm mt-2" 
      :class="store.state.dark ? 'text-gray-300' : 'text-gray-600'" > 
      {{ '📜 3 219' }}
      </p>
    </div>
      </div>
      <div class="mt-4">
        <div class=" grid grid-cols-12 font-semibold text-gray-400 ustify-center align-center align-middle pb-2">
          <div class="text-[11px] text-center col-span-2 ml-2">
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
        <lo class="max-w-sm h-48 flex flex-col align-start overflow-y-auto p-2 rounded-xl shadow-inner" 
        :class="store.state.dark ? 'bg-gray-700 shadow-white/20' : 'bg-gray-200 shadow-black/20'">
          <div v-for="x of trans" :key="x.date+x.time">
            <a class=" grid grid-cols-12 hover:font-semibold justify-center align-center align-middle"
            :class="store.state.dark ? 'text-gray-300' : 'text-gray-500'"
            :href="'https://solscan.io/tx/'+x.signature+'?cluster='+cluster" target="_blank" >
              <div class="text-[11px] text-left col-span-2" 
              :class="markWallet(store.state.pubkey, x.sender) ? 'text-green-400 font-bold' : ''">
                {{ x.date }}
              </div>
              <div class="text-[11px] text-left col-span-2 ml-3" 
              :class="markWallet(store.state.pubkey, x.sender) ? 'text-green-400 font-bold' : ''">
                {{ x.time }}
              </div>
              <div class="text-[11px] text-left col-span-3 ml-2" 
              :class="markWallet(store.state.pubkey, x.sender) ? 'text-green-400 font-bold' : ''">
                {{ x.type }}
              </div>
              <div class="flex text-[11px] text-left -ml-4 col-span-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
                <div class="mb-3 pl-1">
                  📍 
                </div>
                {{ nf.format(Math.floor(x.amount*100)/100).replaceAll(',', ' ') }}
              </div>
              <div class="z-0 text-[11px] text-left col-span-1"
              :class="markWallet(store.state.pubkey, x.sender) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold' : ''" >
                {{ shortWallet(x.sender, 2) }}
              </div>
              <div class="text-[11px] text-right col-span-2"
              :class="markWallet(store.state.pubkey, x.receiver) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold' : ''" >
                {{ shortWallet(x.receiver, 2) }}
              </div>
            </a>
          </div>
        </lo>
      </div>
      <div class="uppercase text-xs mt-8 px-2 sm:mx-8 tracking-widest text-gray-400 font-semibold">
        CONTRACTS DISTRIBUTION BY MATURITY
      </div>
      <apexchart class="mt-4 -mb-8 -ml-8 flex justify-center text-gray-400" 
      type="bar" height="300" width="380" theme="light"
      :options="barChart" 
      :series="barChart.series"/>
      
  </div>
</template>