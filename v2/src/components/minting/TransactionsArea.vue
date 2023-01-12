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
    const lineData = { 
      series: [{
        name: '⛏️ Minted',
        color: 'green',
        data: mintedArr.value
      },{
        name: '🔥 Burned',
        color: 'red',
        data: burnedArr.value
      }, {
        name: '💸 Transfered',
        color: 'yellow',
        data: transferArr.value
      }],
      chartOptions: {
        tooltip: {
          theme: store.state.dark ? 'dark' : 'light',
        },
        chart: {
          foreColor: '#9CA3AF',
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: [
          {
            labels: {
              formatter: function(val:number) {
                return val.toFixed(0);
              }
            }
          }
        ],
        dataLabels: {
          enabled: false,
        },
        legend: { 
          position: 'top' 
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            shade: store.state.dark ? 'dark' : 'light',
            type: "horizontal"
          }
        },
        markers: {
          size: 3,
        },
        grid: {
          borderColor: '#cccccc',
          width: 1,
        },
        title: {
          text: '.',
          align: 'right',
        },
        stroke: {
          width: 2,
        },
      },
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
      lineData,
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
          <p class="font-bold text-sm mt-2 -ml-1"
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
        <lo class="max-h-56 min-h-56 h-56 max-w-[365px] min-w-[280px] flex flex-col align-start overflow-y-auto p-2 rounded-xl shadow-inner" 
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
      <div class="uppercase text-xs mt-6 px-2 tracking-widest text-gray-400 font-semibold">
        <apexchart class="mt-4 -mb-8 -ml-8 flex justify-center text-gray-400" 
        type="area" height="280" width="380" theme="light"
        :options="lineData.chartOptions" 
        :series="lineData.series"/>
      </div>
  </div>
</template>